import { AfterViewInit, Component, computed, ElementRef, OnDestroy, signal } from '@angular/core';
import { CONTENT, Lang } from './content';

class Carousel {
  readonly index = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  constructor(private readonly length: number, private readonly intervalMs = 4500) {}

  start(): void {
    if (this.length <= 1 || prefersReducedMotion()) return;
    this.stop();
    this.timer = setInterval(() => this.index.update((i) => (i + 1) % this.length), this.intervalMs);
  }

  stop(): void {
    clearInterval(this.timer);
  }

  goTo(i: number): void {
    this.index.set(i);
    this.start();
  }
}

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

function chunk<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) pages.push(items.slice(i, i + size));
  return pages;
}

const LANG_KEY = 'gl-lang';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  protected readonly lang = signal<Lang>(this.initialLang());
  protected readonly t = computed(() => CONTENT[this.lang()]);

  private initialLang(): Lang {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem(LANG_KEY);
    return saved === 'es' || saved === 'en' ? saved : 'en';
  }

  protected readonly showAllExperience = signal(false);
  protected readonly showAllCredentials = signal(false);

  protected readonly visibleJobs = computed(() => {
    const jobs = this.t().experience.jobs;
    return this.showAllExperience() ? jobs : jobs.slice(0, 2);
  });
  protected readonly hasMoreExperience = computed(() => this.t().experience.jobs.length > 2);

  protected readonly visibleEducation = computed(() => {
    const entries = this.t().education.entries;
    return this.showAllCredentials() ? entries : entries.slice(0, 2);
  });
  protected readonly visibleLanguages = computed(() => {
    const items = this.t().education.languages;
    return this.showAllCredentials() ? items : items.slice(0, 2);
  });
  protected readonly visibleCertifications = computed(() => {
    const items = this.t().education.certifications;
    return this.showAllCredentials() ? items : items.slice(0, 2);
  });
  protected readonly hasMoreCredentials = computed(() => {
    const e = this.t().education;
    return e.entries.length > 2 || e.languages.length > 2 || e.certifications.length > 2;
  });

  protected toggleLang(): void {
    const next = this.lang() === 'en' ? 'es' : 'en';
    this.lang.set(next);
    window.localStorage.setItem(LANG_KEY, next);
    document.documentElement.lang = next;
  }

  ngAfterViewInit(): void {
    document.documentElement.lang = this.lang();

    const targets = this.host.nativeElement.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && targets.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15 },
      );
      targets.forEach((el) => observer.observe(el));
    }

    this.projects.forEach((p) => p.carousel.start());
  }

  ngOnDestroy(): void {
    this.projects.forEach((p) => p.carousel.stop());
  }

  // Each project's screenshots carousel auto-advances every ~4.5s when it has more
  // than one image (paused on hover, skipped under prefers-reduced-motion).
  // The `projects` array order also drives the outer project carousel, matched by
  // index against t().projects.items in content.ts.
  private readonly projectData = [
    {
      id: 'chords',
      stack: 'Angular 22',
      live: 'https://elparaquecosadeque.github.io/the-chords/chord-finder',
      repo: 'https://github.com/elparaquecosadeque/the-chords',
      screenshots: ['/assets/screenshots/the-chords/1.jpg', '/assets/screenshots/the-chords/2.jpg'],
    },
    {
      id: 'metropolitano',
      stack: 'Angular 22 · PWA',
      live: 'https://oficinamentaldebruno.com/mi-metropolitano/',
      repo: 'https://github.com/elparaquecosadeque/mi-metropolitano',
      screenshots: ['/assets/screenshots/mi-metropolitano/1.jpg', '/assets/screenshots/mi-metropolitano/2.jpg'],
    },
    {
      id: 'personal-trainer-pwa',
      stack: 'Angular · PWA',
      live: 'https://elparaquecosadeque.github.io/personal-trainer-pwa/',
      repo: 'https://github.com/elparaquecosadeque/personal-trainer-pwa',
      screenshots: ['/assets/screenshots/personal-trainer-pwa/1.jpg', '/assets/screenshots/personal-trainer-pwa/2.jpg'],
    },
    {
      id: 'live-sound-calculator',
      stack: 'Angular',
      live: 'https://elparaquecosadeque.github.io/live-sound-calculator/',
      repo: 'https://github.com/elparaquecosadeque/live-sound-calculator',
      screenshots: ['/assets/screenshots/live-sound-calculator/1.jpg', '/assets/screenshots/live-sound-calculator/2.jpg'],
    },
    {
      id: 'terminal-scripts',
      stack: 'PowerShell',
      live: null as string | null,
      repo: 'https://github.com/elparaquecosadeque/terminal-scripts',
      screenshots: ['/assets/screenshots/terminal-scripts/1.jpg'],
    },
  ];

  protected readonly projects = this.projectData.map((p, index) => ({
    ...p,
    index,
    carousel: new Carousel(p.screenshots.length),
  }));

  // Outer carousel pages the project grid two cards at a time.
  protected readonly projectPages = chunk(this.projects, 2);
  protected readonly activePage = signal(0);

  protected prevPage(): void {
    this.activePage.update((i) => (i - 1 + this.projectPages.length) % this.projectPages.length);
  }

  protected nextPage(): void {
    this.activePage.update((i) => (i + 1) % this.projectPages.length);
  }

  protected readonly writing = [
    { title: 'Do you assume or confirm?', url: 'https://dev.to/gerardo_leon/do-you-assume-or-confirm-57m3', tag: 'debugging' },
    { title: 'Rotate AWS IAM Access Keys by script', url: 'https://dev.to/gerardo_leon/rotate-aws-iam-access-keys-by-script-4g8g', tag: 'aws' },
    { title: 'Connect your GitHub repo to NPM for package deployments', url: 'https://dev.to/gerardo_leon/connect-your-github-repo-to-npm-for-package-deployments-33ec', tag: 'npm' },
    { title: 'Create your first Angular components library', url: 'https://dev.to/gerardo_leon/create-your-first-angular-components-library-2co', tag: 'angular' },
  ];

  protected readonly year = new Date().getFullYear();
  protected readonly email = 'bleonp1997@gmail.com';
  protected readonly linkedin = 'https://www.linkedin.com/in/gerardoleon-97/';
  protected readonly github = 'https://github.com/elparaquecosadeque';
  protected readonly devto = 'https://dev.to/gerardo_leon';
}
