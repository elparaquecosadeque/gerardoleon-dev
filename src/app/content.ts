export type Lang = 'en' | 'es';

interface FocusGroup {
  label: string;
  items: string[];
}

interface Job {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  stack: string;
}

interface EduEntry {
  school: string;
  detail: string;
  period: string;
}

interface LanguageEntry {
  name: string;
  level: string;
}

interface CertEntry {
  name: string;
  issuer: string;
  date: string;
}

export interface Content {
  nav: { projects: string; writing: string; contact: string; toTop: string };
  hero: { role: string; bio: string; ctaProjects: string; ctaCv: string };
  focus: { heading: string; groups: FocusGroup[] };
  experience: { heading: string; jobs: Job[] };
  education: {
    heading: string;
    educationLabel: string;
    languagesLabel: string;
    certificationsLabel: string;
    entries: EduEntry[];
    languages: LanguageEntry[];
    certifications: CertEntry[];
  };
  projects: {
    heading: string;
    chordsTagline: string;
    chordsStat: string;
    metroTagline: string;
    metroStat: string;
    live: string;
    source: string;
  };
  writing: { heading: string; more: string };
  contact: { heading: string; body: string };
}

export const CONTENT: Record<Lang, Content> = {
  en: {
    nav: { projects: 'Projects', writing: 'Writing', contact: 'Contact', toTop: 'Back to top' },
    hero: {
      role: 'Software Engineer & Team Lead',
      bio:
        '8 years building systems across health insurance, health provider, and market ' +
        'research platforms &mdash; cutting new-hire onboarding <strong>80%</strong>, holding ' +
        'a critical migration at <strong>99.5% uptime</strong> with zero incidents, and ' +
        'rewriting half a team\'s codebase around SOLID. Currently leading delivery and ' +
        'mentoring engineers at Qualifacts.',
      ctaProjects: 'View projects',
      ctaCv: 'Download CV',
    },
    focus: {
      heading: 'What I build with',
      groups: [
        { label: 'Backend & Cloud', items: ['.NET / C#', 'Elixir','AWS Lambda', 'Azure DevOps', 'MSSQL', 'SNS/SQS', 'GitHub Actions', 'PowerShell', 'Bash', 'Linux'] },
        { label: 'Frontend Engineering', items: ['Angular', 'TypeScript', 'JavaScript', 'Reactive programming', 'RxJS', 'HTML5', 'CSS3', 'SCSS', 'PWA'] },
        { label: 'Leadership', items: ['Hiring', 'Mentoring', 'Code review', 'Scrum', 'Gherkin specs', 'Agile', 'Project management', 'Technical interviews'] },
      ],
    },
    experience: {
      heading: 'Experience',
      jobs: [
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
      ],
    },
    education: {
      heading: 'Education & Credentials',
      educationLabel: 'Education',
      languagesLabel: 'Languages',
      certificationsLabel: 'Certifications',
      entries: [
        { school: 'USIL', detail: "Bachelor's, Business & Software Engineering", period: '2023 — 2026' },
        { school: 'TECSUP', detail: 'Professional Technician, Software Engineering — thesis on distributed systems', period: '2019 — 2021' },
      ],
      languages: [
        { name: 'English', level: 'Fluent — C1' },
        { name: 'French', level: 'Conversational' },
        { name: 'Portuguese', level: 'Conversational' },
        { name: 'Spanish', level: 'Native' },
      ],
      certifications: [
        { name: 'Cambridge First Certificate in English (FCE)', issuer: 'Cambridge English', date: '2016' },
        { name: 'Claude Code in Action', issuer: 'Anthropic', date: 'Aug 2026' },
        { name: 'Claude Code in Action Certificate — Anthropic Claude 101', issuer: 'Anthropic', date: 'Jul 2026' },
      ],
    },
    projects: {
      heading: 'Personal Projects',
      chordsTagline: 'Chord progression generator with a circle-of-fifths selector and visual chord diagrams.',
      chordsStat: 'Published as reusable npm packages',
      metroTagline: 'PWA answering "which bus do I take?" for Lima\'s Metropolitano BRT — routing with transfers, QR sharing, offline-ready.',
      metroStat: '44 stations · 18 tests · geographic backtrack-filtered routing engine',
      live: 'Live demo',
      source: 'Source',
    },
    writing: { heading: 'Writing', more: 'All articles on dev.to →' },
    contact: { heading: "Let's talk", body: 'Open to software engineering roles — reach out directly.' },
  },
  es: {
    nav: { projects: 'Proyectos', writing: 'Artículos', contact: 'Contacto', toTop: 'Volver arriba' },
    hero: {
      role: 'Ingeniero de Software & Team Lead',
      bio:
        '8 años construyendo sistemas para seguros de salud, proveedores de salud y ' +
        'plataformas de investigación de mercado &mdash; reduciendo el onboarding de nuevos ' +
        'ingresos en <strong>80%</strong>, manteniendo una migración crítica con ' +
        '<strong>99.5% de uptime</strong> sin incidentes, y reescribiendo la mitad del código ' +
        'del equipo aplicando SOLID. Actualmente lidera la entrega y mentorea ingenieros en Qualifacts.',
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV',
    },
    focus: {
      heading: 'Con qué construyo',
      groups: [
        { label: 'Backend & Cloud', items: ['.NET / C#', 'Elixir', 'AWS Lambda', 'Azure DevOps', 'MSSQL', 'SNS/SQS', 'GitHub Actions', 'PowerShell', 'Bash', 'Linux'] },
        { label: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'Programación reactiva', 'RxJS', 'HTML5', 'CSS3', 'SCSS', 'PWA'] },
        { label: 'Liderazgo', items: ['Contratación', 'Mentoría', 'Code review', 'Scrum', 'Specs en Gherkin', 'Agile', 'Gestión de proyectos', 'Entrevistas técnicas'] },
      ],
    },
    experience: {
      heading: 'Experiencia',
      jobs: [
        {
          company: 'Qualifacts · Credible EHR Systems',
          role: 'Software Developer / Manager',
          period: 'Jun 2023 — Presente',
          bullets: [
            'Automaticé un manual de onboarding de 11 páginas con PowerShell, reduciendo el setup de nuevos ingresos de <strong>8 días a 1</strong>.',
            'Refactoricé y reescribí <strong>el 50% del código reusable del equipo</strong> aplicando SOLID; lideré code reviews y mentoreé a pares en paralelismo y programación reactiva.',
            'Contraté e incorporé a <strong>4 desarrolladores senior</strong>; implementé herramientas de IA en CLI (Copilot, Claude, Codex) para un flujo human-in-the-loop.',
          ],
          stack: '.NET Core · C# · Angular · MSSQL · Azure DevOps · AWS Lambda',
        },
        {
          company: 'Tranzact',
          role: 'Software Engineer (Team Lead)',
          period: 'Feb 2021 — Jun 2023',
          bullets: [
            'Lideré un equipo de 3 ingenieros bajo Scrum, incluyendo evaluación técnica de candidatos.',
            'Migré una aplicación VoIP crítica fuera de infraestructura on-premise, reduciéndola en <strong>90%</strong> mientras mantenía <strong>99.5% de uptime</strong> y cero incidentes P1.',
          ],
          stack: '.NET Core 5+ · Akka.NET · MSSQL · Azure · AWS Lambda · Splunk',
        },
      ],
    },
    education: {
      heading: 'Educación y credenciales',
      educationLabel: 'Educación',
      languagesLabel: 'Idiomas',
      certificationsLabel: 'Certificaciones',
      entries: [
        { school: 'USIL', detail: 'Bachillerato, Ingeniería Empresarial y de Sistemas', period: '2023 — 2026' },
        { school: 'TECSUP', detail: 'Técnico Profesional en Ingeniería de Software — tesis sobre sistemas distribuidos', period: '2019 — 2021' },
      ],
      languages: [
        { name: 'Inglés', level: 'Fluido — C1' },
        { name: 'Francés', level: 'Conversacional' },
        { name: 'Portugués', level: 'Conversacional' },
        { name: 'Español', level: 'Nativo' },
      ],
      certifications: [
        { name: 'Cambridge First Certificate in English (FCE)', issuer: 'Cambridge English', date: '2016' },
        { name: 'Claude Code in Action', issuer: 'Anthropic', date: 'ago. 2026' },
        { name: 'Claude Code in Action Certificate — Anthropic Claude 101', issuer: 'Anthropic', date: 'jul. 2026' },
      ],
    },
    projects: {
      heading: 'Proyectos Personales',
      chordsTagline: 'Generador de progresiones de acordes con selector de círculo de quintas y diagramas visuales.',
      chordsStat: 'Publicado como paquetes npm reusables',
      metroTagline: 'PWA que responde "¿qué bus tomo?" para el Metropolitano de Lima — rutas con trasbordos, QR, funciona sin conexión.',
      metroStat: '44 estaciones · 18 tests · motor de ruteo con filtro geográfico',
      live: 'Ver demo',
      source: 'Código fuente',
    },
    writing: { heading: 'Artículos', more: 'Todos los artículos en dev.to →' },
    contact: { heading: 'Conversemos', body: 'Abierto a roles de ingeniería de software — escríbeme directamente.' },
  },
};
