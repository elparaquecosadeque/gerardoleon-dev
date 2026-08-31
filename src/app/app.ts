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

    this.chordsCarousel.start();
    this.metroCarousel.start();
  }

  ngOnDestroy(): void {
    this.chordsCarousel.stop();
    this.metroCarousel.stop();
  }

  // Drop screenshots at these paths and list them here — the carousel activates
  // automatically once a project has more than one, auto-advancing every ~4.5s
  // (paused on hover, and skipped entirely under prefers-reduced-motion).
  protected readonly chords = {
    stack: 'Angular 22',
    live: 'https://elparaquecosadeque.github.io/the-chords/chord-finder',
    repo: 'https://github.com/elparaquecosadeque/the-chords',
    screenshots: [] as string[], // e.g. '/assets/screenshots/the-chords/1.jpg'
  };

  protected readonly metropolitano = {
    stack: 'Angular 22 · PWA',
    live: 'https://oficinamentaldebruno.com/mi-metropolitano/',
    repo: 'https://github.com/elparaquecosadeque/mi-metropolitano',
    screenshots: [] as string[], // e.g. '/assets/screenshots/mi-metropolitano/1.jpg'
  };

  protected readonly chordsCarousel = new Carousel(this.chords.screenshots.length);
  protected readonly metroCarousel = new Carousel(this.metropolitano.screenshots.length);

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
