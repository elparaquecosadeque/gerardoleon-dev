import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const targets = this.host.nativeElement.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || targets.length === 0) return;
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
    targets.forEach((t) => observer.observe(t));
  }

  protected readonly focusAreas = [
    {
      label: 'Systems & Cloud',
      items: ['.NET / C#', 'AWS Lambda', 'Azure DevOps', 'MSSQL', 'SNS/SQS'],
    },
    {
      label: 'Frontend Engineering',
      items: ['Angular', 'TypeScript', 'JavaScript', 'Reactive programming'],
    },
    {
      label: 'Leadership',
      items: ['Hiring', 'Mentoring', 'Code review', 'Scrum', 'Gherkin specs'],
    },
  ];

  protected readonly experience = [
    {
      company: 'Qualifacts · Credible EHR Systems',
      role: 'Software Developer / Manager',
      period: 'Jun 2023 — Present',
      bullets: [
        'Automated an 11-page onboarding manual with PowerShell, cutting new-hire setup from <strong>8 days to 1</strong>.',
        'Refactored and rewrote <strong>50% of the team\'s reusable code</strong> applying SOLID; ran code reviews and mentored peers on parallelism and reactive programming.',
        'Hired and onboarded <strong>4 senior developers</strong>; set up AI CLI tooling (Copilot, Claude, Codex) for a human-in-the-loop workflow.',
      ],
      stack: '.NET Core · C# · Angular · MSSQL · Azure DevOps · AWS Lambda',
    },
    {
      company: 'Tranzact',
      role: 'Software Engineer (Team Lead)',
      period: 'Feb 2021 — Jun 2023',
      bullets: [
        'Led a team of 3 engineers under Scrum, including technical candidate evaluation.',
        'Migrated a critical VoIP application off-premise, cutting infrastructure <strong>90%</strong> while holding <strong>99.5% uptime</strong> and zero P1 incidents.',
      ],
      stack: '.NET Core 5+ · Akka.NET · MSSQL · Azure · AWS Lambda · Splunk',
    },
  ];

  protected readonly chords = {
    tagline: 'Chord progression generator with a circle-of-fifths selector and visual chord diagrams.',
    stat: 'Published as reusable npm packages',
    stack: 'Angular 22',
    live: 'https://elparaquecosadeque.github.io/the-chords/chord-finder',
    repo: 'https://github.com/elparaquecosadeque/the-chords',
  };

  protected readonly metropolitano = {
    tagline: 'PWA answering "which bus do I take?" for Lima\'s Metropolitano BRT — routing with transfers, QR sharing, offline-ready.',
    stat: '44 stations · 18 tests · geographic backtrack-filtered routing engine',
    stack: 'Angular 22 · PWA',
    live: 'https://oficinamentaldebruno.com/mi-metropolitano/',
    repo: 'https://github.com/elparaquecosadeque/mi-metropolitano',
  };

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
