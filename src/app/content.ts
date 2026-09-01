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
  experience: { heading: string; jobs: Job[]; seeMore: string; seeLess: string };
  education: {
    heading: string;
    educationLabel: string;
    languagesLabel: string;
    certificationsLabel: string;
    entries: EduEntry[];
    languages: LanguageEntry[];
    certifications: CertEntry[];
    seeMore: string;
    seeLess: string;
  };
  projects: {
    heading: string;
    live: string;
    source: string;
    prev: string;
    next: string;
    items: { name: string; tagline: string; stat?: string }[];
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
        { label: 'Backend & Cloud', items: ['.NET / C#', 'Elixir', 'AWS Lambda', 'Azure DevOps', 'MSSQL', 'SNS/SQS', 'GitHub Actions', 'PowerShell', 'Bash', 'Linux'] },
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
        {
          company: 'Signal Insights Inc. (New Jersey & Sweden)',
          role: 'Software Engineer',
          period: 'Aug 2021 — Dec 2023',
          bullets: [
            'Kept client web-scraping automations running at a <strong>95% uptime floor</strong>.',
            'Handled bug fixes and script-modification requests for clients.',
          ],
          stack: 'Linux · Elixir · JavaScript · Functional Programming',
        },
        {
          company: 'Trestles TLMS',
          role: 'Full Stack Software Developer',
          period: 'May 2019 — Jan 2021',
          bullets: [
            'Built the frontend in Angular and backend in C# .NET Core, with SQL Server 2017 scripting.',
            'Developed a cross-platform Android/iOS app with Ionic.',
            'Built a test-automation framework with NUnit, SpecFlow, and Selenium (C# .NET Core).',
          ],
          stack: 'Angular · C# · .NET Core · SQL Server · Ionic · NUnit · SpecFlow · Selenium',
        },
        {
          company: '3DIQ Inc.',
          role: 'Back End Developer',
          period: 'Mar 2019 — May 2019',
          bullets: [
            'Built backend services with Node.js and Loopback 3/4.',
            'Handled data modeling and manipulation in MongoDB.',
          ],
          stack: 'Node.js · Loopback · MongoDB',
        },
        {
          company: 'WebCreek Inc.',
          role: 'Full Stack Software Developer',
          period: 'Jan 2019 — Mar 2019',
          bullets: [
            'Built Android apps with Kotlin and web apps with C#.',
          ],
          stack: 'Kotlin · Android · C#',
        },
      ],
      seeMore: 'See full experience',
      seeLess: 'Show less',
    },
    education: {
      heading: 'Education & Credentials',
      educationLabel: 'Education',
      languagesLabel: 'Languages',
      certificationsLabel: 'Certifications',
      entries: [
        { school: 'USIL', detail: "Bachelor's, Business & Software Engineering", period: '2023 — 2026' },
        { school: 'TECSUP', detail: 'Software Engineering Technician — thesis on resilient distributed systems', period: '2016 — 2019 (Thesis in 2021)' },
        { school: 'CTAudio', detail: 'Technician, Live Sound Reinforcement', period: '2023' },
        { school: 'ISIL', detail: 'Technician, Business Administration — unconcluded', period: 'Until 2021' },
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
      seeMore: 'See all',
      seeLess: 'Show less',
    },
    projects: {
      heading: 'Personal Projects',
      live: 'Live demo',
      source: 'Source',
      prev: 'Previous projects',
      next: 'Next projects',
      items: [
        {
          name: 'The Chords',
          tagline: 'Chord progression generator with a circle-of-fifths selector and visual chord diagrams.',
          stat: 'Published as reusable npm packages',
        },
        {
          name: 'Mi Metropolitano',
          tagline: 'PWA answering "which bus do I take?" for Lima\'s Metropolitano BRT — routing with transfers, QR sharing, offline-ready.',
          stat: '44 stations · 18 tests · geographic backtrack-filtered routing engine',
        },
        {
          name: 'Personal Trainer PWA',
          tagline: 'A public app shell that logs workouts and meals on the go, syncing privately to your own GitHub repo — no data ever leaves your control.',
          stat: 'ChatGPT-assisted meal reports from the logged data',
        },
        {
          name: 'Live Sound Calculator',
          tagline: 'Angular calculator for frequency, period, wavelength, speed of sound, and phase-delay conversions used in live sound engineering.',
        },
        {
          name: 'Terminal Scripts',
          tagline: 'A personal PowerShell toolbox for daily git and terminal workflows — branch switching, port killing, PATH management.',
          stat: '16 scripts, self-documenting via a built-in listing command',
        },
      ],
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
        {
          company: 'Signal Insights Inc. (Nueva Jersey y Suecia)',
          role: 'Software Engineer',
          period: 'Ago 2021 — Dic 2023',
          bullets: [
            'Mantuve el funcionamiento de las automatizaciones de scraping para los clientes con un piso mínimo de <strong>95% de uptime</strong>.',
            'Soporte de bugs y requisitos de modificación de scripts para los clientes.',
          ],
          stack: 'Linux · Elixir · JavaScript · Programación Funcional',
        },
        {
          company: 'Trestles TLMS',
          role: 'Full Stack Software Developer',
          period: 'May 2019 — Ene 2021',
          bullets: [
            'Desarrollo front-end con Angular, back-end con C# .NET Core, y scripts en SQL Server 2017.',
            'Desarrollo de aplicación multiplataforma Android/iOS con Ionic.',
            'Desarrollo de framework de automatización de pruebas con NUnit, SpecFlow y Selenium (C# .NET Core).',
          ],
          stack: 'Angular · C# · .NET Core · SQL Server · Ionic · NUnit · SpecFlow · Selenium',
        },
        {
          company: '3DIQ Inc.',
          role: 'Back End Developer',
          period: 'Mar 2019 — May 2019',
          bullets: [
            'Desarrollo back-end con NodeJS y Loopback 3-4.',
            'Manipulación de datos a través de MongoDB.',
          ],
          stack: 'Node.js · Loopback · MongoDB',
        },
        {
          company: 'WebCreek Inc.',
          role: 'Full Stack Software Developer',
          period: 'Ene 2019 — Mar 2019',
          bullets: [
            'Desarrollo de aplicaciones con Android Kotlin y web con C#.',
          ],
          stack: 'Kotlin · Android · C#',
        },
      ],
      seeMore: 'Ver experiencia completa',
      seeLess: 'Ver menos',
    },
    education: {
      heading: 'Educación y credenciales',
      educationLabel: 'Educación',
      languagesLabel: 'Idiomas',
      certificationsLabel: 'Certificaciones',
      entries: [
        { school: 'USIL', detail: 'Bachillerato, Ingeniería Empresarial y de Sistemas', period: '2023 — 2026' },
        { school: 'TECSUP', detail: 'Técnico en Ingeniería de Software — tesis sobre sistemas distribuidos resilientes', period: '2016 — 2019 (Tesis en 2021)' },
        { school: 'CTAudio', detail: 'Técnico en Reforzamiento Sonoro en Vivo', period: '2023' },
        { school: 'ISIL', detail: 'Técnico en Administración de Empresas — inconcluso', period: 'Hasta 2021' },
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
      seeMore: 'Ver todo',
      seeLess: 'Ver menos',
    },
    projects: {
      heading: 'Proyectos Personales',
      live: 'Ver demo',
      source: 'Código fuente',
      prev: 'Proyectos anteriores',
      next: 'Siguientes proyectos',
      items: [
        {
          name: 'The Chords',
          tagline: 'Generador de progresiones de acordes con selector de círculo de quintas y diagramas visuales.',
          stat: 'Publicado como paquetes npm reusables',
        },
        {
          name: 'Mi Metropolitano',
          tagline: 'PWA que responde "¿qué bus tomo?" para el Metropolitano de Lima — rutas con trasbordos, QR, funciona sin conexión.',
          stat: '44 estaciones · 18 tests · motor de ruteo con filtro geográfico',
        },
        {
          name: 'Personal Trainer PWA',
          tagline: 'Un shell público que registra entrenamiento y comida desde el celular, sincronizando en privado a tu propio repo de GitHub — tus datos nunca salen de tu control.',
          stat: 'Reportes de comida asistidos por ChatGPT a partir de lo registrado',
        },
        {
          name: 'Live Sound Calculator',
          tagline: 'Calculadora Angular para conversiones de frecuencia, periodo, longitud de onda, velocidad del sonido y desfase, usadas en sonido en vivo.',
        },
        {
          name: 'Terminal Scripts',
          tagline: 'Mi caja de herramientas de PowerShell para el día a día con git y terminal — cambio de rama, matar procesos por puerto, gestión del PATH.',
          stat: '16 scripts, autodocumentados con un comando de listado incluido',
        },
      ],
    },
    writing: { heading: 'Artículos', more: 'Todos los artículos en dev.to →' },
    contact: { heading: 'Conversemos', body: 'Abierto a roles de ingeniería de software — escríbeme directamente.' },
  },
};
