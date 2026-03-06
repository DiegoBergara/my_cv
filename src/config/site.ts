export const supportedLocales = ['es', 'en'] as const;
export type Locale = (typeof supportedLocales)[number];
export const defaultLocale: Locale = 'es';

export const siteConfig = {
  site: 'https://diegobergara.github.io',
  author: 'Diego Bergara',
  email: 'diegobergaraj@gmail.com',
  calendly: 'https://calendly.com/diegobergaraj/30min',
  ogImage: '/og-cover.png',
  social: {
    linkedin: 'https://www.linkedin.com/in/diegobergara',
    credly: 'https://www.credly.com/users/diego-bergara/badges#credly',
  },
  theme: {
    gradientFallback:
      'radial-gradient(circle at 20% 20%, rgba(0,255,200,0.15), transparent 35%), radial-gradient(circle at 70% 30%, rgba(139,92,246,0.2), transparent 40%), radial-gradient(circle at 50% 80%, rgba(6,182,212,0.15), transparent 45%), #0a0a0f',
  },
};

export const skills: Record<string, string[]> = {
  backend: ['Python', 'FastAPI', 'Django', 'Node.js', 'PostgreSQL', 'REST APIs', 'Redis', 'Celery'],
  frontend: ['React', 'React Native', 'TypeScript', 'Next.js', 'Astro', 'Tailwind CSS', 'HTML5 / CSS3', 'Vite'],
  devops: ['Linux', 'Docker', 'Kubernetes', 'OpenShift', 'ArgoCD', 'Ansible', 'Jenkins', 'GitLab CI/CD', 'VMware', 'Hyper-V', 'Terraform', 'Git'],
};

interface NavItem {
  label: string;
  href: string;
}

interface CTA {
  label: string;
  href: string;
}

interface TimelineEntry {
  period: string;
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}

export interface LocaleContent {
  seo: { title: string; description: string };
  nav: { items: NavItem[]; langSwitch: { label: string; href: string } };
  hero: { badge: string; title: string; subtitle: string; primaryCta: CTA; secondaryCta: CTA };
  about: { title: string; description: string; education: string; location: string };
  skills: { title: string; categories: Record<string, string> };
  experience: { title: string; items: TimelineEntry[] };
  projects: { title: string; items: Project[] };
  certifications: { title: string; items: { label: string; href: string }[] };
  contact: { title: string; subtitle: string; primaryCta: CTA; secondaryCta: CTA };
}

export const content: Record<Locale, LocaleContent> = {
  es: {
    seo: {
      title: 'Diego Bergara | Full Stack Developer Sr · AI · Platform Engineer',
      description:
        'Ingeniero en Informática y Full Stack Developer Senior. Construyo soluciones complejas con ingeniería y AI para impacto real.',
    },
    nav: {
      items: [
        { label: 'Sobre mí', href: '#about' },
        { label: 'Stack', href: '#skills' },
        { label: 'Experiencia', href: '#experience' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Contacto', href: '#contact' },
      ],
      langSwitch: { label: 'EN', href: '/en/' },
    },
    hero: {
      badge: 'Disponible para nuevos desafíos',
      title: 'Ing. Diego Bergara',
      subtitle:
        'Construyo soluciones complejas con ingeniería + AI para impacto real. Ingeniero en Informática y Full Stack Developer Senior — diseño y ejecuto productos y plataformas robustas que conectan negocio, desarrollo y operación.',
      primaryCta: { label: 'Agendar reunión', href: siteConfig.calendly },
      secondaryCta: { label: 'Contactar por email', href: `mailto:${siteConfig.email}` },
    },
    about: {
      title: 'Perfil profesional',
      description:
        'Trabajo entre backend, frontend y operaciones cloud-native. Mi foco está en resolver problemas de alta complejidad, automatizar procesos críticos y mejorar time-to-market sin perder calidad.',
      education: 'Ingeniero en Informática · Universidad Católica del Uruguay',
      location: 'Uruguay · Remote-friendly',
    },
    skills: {
      title: 'Stack técnico',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        devops: 'DevOps & Infraestructura',
      },
    },
    experience: {
      title: 'Experiencia profesional',
      items: [
        {
          period: 'Sep 2025 — Presente',
          title: 'SysAdmin Cluster (Hyper-V, OpenShift, VMware) · BPS',
          description:
            'Operación de plataformas de virtualización y contenedores. Automatismos enfocados en gestión de clusters, estandarización de despliegues y observabilidad en entornos enterprise.',
        },
        {
          period: 'Jun 2025',
          title: 'Egreso como Software Engineer · UCU',
          description:
            'Titulación en Ingeniería en Informática por la Universidad Católica del Uruguay.',
        },
        {
          period: 'Sep 2023 — Sep 2025',
          title: 'Liberaciones CI/CD · BPS',
          description:
            'Automatización de liberaciones, mejora de pipelines CI/CD y reducción de procesos manuales. Mayor autonomía para equipos de desarrollo.',
        },
        {
          period: 'Nov 2022 — Presente',
          title: 'Sr. Full Stack Developer · Ripio',
          description:
            'Desarrollo de productos críticos para fintech/crypto con foco en performance, estabilidad y aceleración de entrega. Implementación de motor dinámico y microfrontends.',
        },
        {
          period: 'Ene 2021 — Nov 2022',
          title: 'Ssr. Full Stack Developer · Ripio',
          description:
            'Desarrollo full stack en productos fintech. Crecimiento en responsabilidades y entrega de features de alto impacto.',
        },
        {
          period: 'Oct 2020 — Dic 2020',
          title: 'Jr. Full Stack Developer · Ripio',
          description:
            'Primeros pasos en desarrollo profesional. Integración en equipos de producto y stack tecnológico fintech.',
        },
        {
          period: 'Jun 2019 — Sep 2020',
          title: 'Alutel',
          description:
            'Experiencia en telecomunicaciones y tecnología. Alutel — soluciones en Uruguay.',
        },
        {
          period: '2017',
          title: 'Ingreso a la universidad con beca al buen desempeño concursable · UCU',
          description:
            'Inicio de la carrera de Ingeniería en Informática en la UCU con beca al buen desempeño concursable.',
        },
      ],
    },
    projects: {
      title: 'Proyectos destacados',
      items: [
        {
          title: 'SGR — Sistema de Gestión de Recursos',
          description:
            'Tesis final: sistema integral para mantenimiento de maquinaria de CUJO SA. App OCR + geolocalización, panel de administración web y backend OWASP-compliant. Calificación: 6/6 excelente.',
          tags: ['OCR', 'Geolocalización', 'React Native', 'Django', 'OWASP'],
          links: [{ label: 'CUJO SA', href: 'https://cujo.com.uy/' }],
        },
        {
          title: 'Motor de Renderizado Dinámico · Ripio',
          description:
            'Framework interno para definir componentes desde backend y renderizarlos en la app sin nuevas releases. Mejora de time-to-market y diferenciación por país en pantallas críticas.',
          tags: ['Dynamic Rendering', 'React Native', 'Performance', 'Product Velocity'],
          links: [],
        },
        {
          title: 'Migración a ArgoCD · BPS',
          description:
            'Estandarización GitOps para aplicaciones en OpenShift. Eliminación de procesos manuales, despliegues automáticos y mayor autonomía para centros de desarrollo.',
          tags: ['ArgoCD', 'OpenShift', 'GitOps', 'Automation'],
          links: [],
        },
        {
          title: 'Microfrontends · Ripio',
          description:
            'Descentralización de desarrollo web: menos conflictos, mejor versionado por feature y mayor estabilidad general de la plataforma.',
          tags: ['Microfrontends', 'Module Federation', 'Web Architecture'],
          links: [],
        },
      ],
    },
    certifications: {
      title: 'Certificaciones',
      items: [{ label: 'Ver certificaciones en Credly', href: siteConfig.social.credly }],
    },
    contact: {
      title: 'Hablemos',
      subtitle:
        '¿Tenés un proyecto en mente o buscás un perfil técnico senior? Agendá una reunión o escribime directamente.',
      primaryCta: { label: 'Agendar reunión', href: siteConfig.calendly },
      secondaryCta: { label: 'Enviar email', href: `mailto:${siteConfig.email}` },
    },
  },
  en: {
    seo: {
      title: 'Diego Bergara | Senior Full Stack Developer · AI · Platform Engineer',
      description:
        'Computer Engineer and Senior Full Stack Developer. I build complex solutions with engineering and AI for real-world impact.',
    },
    nav: {
      items: [
        { label: 'About', href: '#about' },
        { label: 'Stack', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
      langSwitch: { label: 'ES', href: '/' },
    },
    hero: {
      badge: 'Open to new challenges',
      title: 'Eng. Diego Bergara',
      subtitle:
        'I build complex solutions with engineering + AI for real-world impact. Computer Engineer and Senior Full Stack Developer — I design and deliver robust products and platforms that bridge business, software, and operations.',
      primaryCta: { label: 'Schedule a meeting', href: siteConfig.calendly },
      secondaryCta: { label: 'Email me', href: `mailto:${siteConfig.email}` },
    },
    about: {
      title: 'Professional profile',
      description:
        'I operate across backend, frontend, and cloud-native operations. My focus is solving high-complexity challenges, automating critical workflows, and improving time-to-market with quality.',
      education: 'Computer Engineer · Universidad Católica del Uruguay',
      location: 'Uruguay · Remote-friendly',
    },
    skills: {
      title: 'Tech stack',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        devops: 'DevOps & Infrastructure',
      },
    },
    experience: {
      title: 'Professional experience',
      items: [
        {
          period: 'Sep 2025 — Present',
          title: 'SysAdmin Cluster (Hyper-V, OpenShift, VMware) · BPS',
          description:
            'Platform operations for virtualization and container clusters. Automation focused on cluster management, deployment standardization, and observability in enterprise environments.',
        },
        {
          period: 'Jun 2025',
          title: 'Software Engineer degree · UCU',
          description:
            'Computer Engineering degree from Universidad Católica del Uruguay.',
        },
        {
          period: 'Sep 2023 — Sep 2025',
          title: 'CI/CD Releases · BPS',
          description:
            'Release automation, CI/CD pipeline improvements, and manual process reduction. Increased autonomy for development teams.',
        },
        {
          period: 'Nov 2022 — Present',
          title: 'Sr. Full Stack Developer · Ripio',
          description:
            'Building critical fintech/crypto products focused on performance, stability, and faster delivery. Implemented dynamic rendering engine and microfrontends.',
        },
        {
          period: 'Jan 2021 — Nov 2022',
          title: 'Ssr. Full Stack Developer · Ripio',
          description:
            'Full stack development on fintech products. Growth in responsibilities and delivery of high-impact features.',
        },
        {
          period: 'Oct 2020 — Dec 2020',
          title: 'Jr. Full Stack Developer · Ripio',
          description:
            'First steps in professional development. Integration into product teams and fintech tech stack.',
        },
        {
          period: 'Jun 2019 — Sep 2020',
          title: 'Alutel',
          description:
            'Experience in telecommunications and technology. Alutel — solutions in Uruguay.',
        },
        {
          period: '2017',
          title: 'University enrollment with merit-based scholarship · UCU',
          description:
            'Started Computer Engineering at UCU with a merit-based competitive scholarship.',
        },
      ],
    },
    projects: {
      title: 'Featured projects',
      items: [
        {
          title: 'SGR — Resource Management System',
          description:
            'Final thesis: comprehensive system for machinery maintenance at CUJO SA. OCR app + geolocation, admin web panel, and OWASP-compliant backend. Grade: 6/6 excellent.',
          tags: ['OCR', 'Geolocation', 'React Native', 'Django', 'OWASP'],
          links: [{ label: 'CUJO SA', href: 'https://cujo.com.uy/' }],
        },
        {
          title: 'Dynamic Rendering Engine · Ripio',
          description:
            'Internal framework to define components from backend and render them in the app without new releases. Improved time-to-market and per-country differentiation on critical screens.',
          tags: ['Dynamic Rendering', 'React Native', 'Performance', 'Product Velocity'],
          links: [],
        },
        {
          title: 'ArgoCD Migration · BPS',
          description:
            'GitOps standardization for OpenShift applications. Eliminated manual processes, enabled automatic deployments, and granted autonomy to development centers.',
          tags: ['ArgoCD', 'OpenShift', 'GitOps', 'Automation'],
          links: [],
        },
        {
          title: 'Microfrontends · Ripio',
          description:
            'Web development decentralization: fewer conflicts, better feature versioning, and improved overall platform stability.',
          tags: ['Microfrontends', 'Module Federation', 'Web Architecture'],
          links: [],
        },
      ],
    },
    certifications: {
      title: 'Certifications',
      items: [{ label: 'View certifications on Credly', href: siteConfig.social.credly }],
    },
    contact: {
      title: "Let's talk",
      subtitle:
        'Have a project in mind or looking for a senior technical profile? Schedule a meeting or reach out directly.',
      primaryCta: { label: 'Schedule a meeting', href: siteConfig.calendly },
      secondaryCta: { label: 'Send email', href: `mailto:${siteConfig.email}` },
    },
  },
};
