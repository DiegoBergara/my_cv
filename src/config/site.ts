export const supportedLocales = ['es', 'en', 'zh'] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = 'es';

export const siteConfig = {
  seo: {
    title: 'Diego Bergara | Full Stack + AI + Platform Engineer',
    description:
      'Sitio personal de Diego Bergara: experiencia, proyectos con impacto real, ingeniería de software, IA aplicada y plataforma cloud-native.',
    siteUrl: 'https://diegobergara.github.io',
    author: 'Diego Bergara',
    email: 'diegobergaraj@gmail.com',
    calendly: 'https://calendly.com/diegobergaraj/30min',
    social: {
      linkedin: 'https://www.linkedin.com/in/diegobergara',
      credly: 'https://www.credly.com/users/diego-bergara/badges#credly'
    },
    ogImage: '/og-cover.png'
  },
  theme: {
    gradientFallback:
      'radial-gradient(circle at 20% 20%, rgba(0,255,200,0.16), transparent 35%), radial-gradient(circle at 70% 30%, rgba(90,100,255,0.22), transparent 40%), radial-gradient(circle at 50% 80%, rgba(130,10,255,0.22), transparent 45%), #060714'
  }
};

export const content: Record<Locale, any> = {
  es: {
    nav: ['Inicio', 'Sobre mí', 'Proyectos', 'Roadmap CV', 'Contacto'],
    hero: {
      badge: 'Disponible para nuevos desafíos',
      title: 'Construyo soluciones complejas con ingeniería + IA para impacto real',
      subtitle:
        'Soy Diego Bergara, Ingeniero en Informática y Full Stack Senior. Diseño y ejecuto productos y plataformas robustas que conectan negocio, desarrollo y operación.',
      ctas: [
        { label: 'Contactar por email', href: 'mailto:diegobergaraj@gmail.com' },
        { label: 'Agendar reunión', href: siteConfig.seo.calendly }
      ]
    },
    sections: {
      aboutTitle: 'Perfil profesional',
      aboutBody:
        'Trabajo entre backend, frontend y operaciones cloud-native. Mi foco está en resolver problemas de alta complejidad, automatizar procesos críticos y mejorar time-to-market sin perder calidad.',
      stackTitle: 'Stack principal y dominio técnico',
      projectsTitle: 'Proyectos destacados',
      timelineTitle: 'Roadmap profesional',
      accessibilityTitle: 'Diagrama de accesibilidad y calidad',
      contactTitle: 'Hablemos'
    }
  },
  en: {
    nav: ['Home', 'About', 'Projects', 'CV Roadmap', 'Contact'],
    hero: {
      badge: 'Open to new challenges',
      title: 'I build complex solutions with engineering + AI for real-world impact',
      subtitle:
        'I am Diego Bergara, Computer Engineer and Senior Full Stack Developer. I design and deliver robust products and platforms that bridge business, software, and operations.',
      ctas: [
        { label: 'Email me', href: 'mailto:diegobergaraj@gmail.com' },
        { label: 'Schedule a meeting', href: siteConfig.seo.calendly }
      ]
    },
    sections: {
      aboutTitle: 'Professional profile',
      aboutBody:
        'I operate across backend, frontend, and cloud-native operations. My focus is solving high-complexity challenges, automating critical workflows, and improving time-to-market with quality.',
      stackTitle: 'Core stack and technical expertise',
      projectsTitle: 'Featured projects',
      timelineTitle: 'Professional roadmap',
      accessibilityTitle: 'Accessibility and quality diagram',
      contactTitle: 'Let’s talk'
    }
  },
  zh: {
    nav: ['首页', '关于我', '项目', '职业路线', '联系'],
    hero: {
      badge: '可接受新的机会',
      title: '用工程能力与 AI 构建高复杂度、真实世界可落地的解决方案',
      subtitle:
        '我是 Diego Bergara，计算机工程师与高级全栈开发者。我专注于连接业务、研发与运维，交付稳定且可扩展的产品与平台。',
      ctas: [
        { label: '邮件联系', href: 'mailto:diegobergaraj@gmail.com' },
        { label: '预约会议', href: siteConfig.seo.calendly }
      ]
    },
    sections: {
      aboutTitle: '职业简介',
      aboutBody:
        '我覆盖后端、前端与云原生运维，擅长解决高复杂度问题、自动化关键流程，并在保证质量的前提下提升交付速度。',
      stackTitle: '核心技术栈',
      projectsTitle: '重点项目',
      timelineTitle: '职业路线图',
      accessibilityTitle: '可访问性与质量架构图',
      contactTitle: '欢迎联系'
    }
  }
};

export const profileData = {
  name: 'Diego Bergara',
  headline: 'Senior Full Stack Developer · AI-Driven Engineer · Platform & SysAdmin',
  location: 'Uruguay · Remote-friendly',
  education: 'Ingeniero en Informática · Universidad Católica del Uruguay',
  stacks: [
    'Python',
    'FastAPI',
    'Django',
    'React',
    'React Native',
    'TypeScript',
    'Linux',
    'Kubernetes',
    'OpenShift',
    'ArgoCD',
    'Ansible',
    'Jenkins',
    'VMware',
    'Hyper-V',
    'CI/CD'
  ],
  timeline: [
    {
      period: 'Nov 2022 - Actualidad',
      title: 'Senior Full Stack Developer · Ripio',
      detail:
        'Desarrollo de productos críticos para fintech/crypto, con foco en performance, estabilidad y aceleración de entrega.'
    },
    {
      period: 'Sep 2023 - Sep 2025',
      title: 'Área de liberaciones CI/CD · Banco de Previsión Social',
      detail:
        'Automatización de liberaciones, mejora de pipelines y reducción de tareas manuales para equipos de desarrollo.'
    },
    {
      period: 'Sep 2025 - Actualidad',
      title: 'Equipo SYSADMIN Cluster (Hyper-V, OpenShift, VMware) · BPS',
      detail:
        'Operación de plataformas, automatismos en infraestructura y estandarización de despliegues en entornos enterprise.'
    }
  ],
  projects: [
    {
      title: 'SGR · Sistema de Gestión de Recursos (Tesis final)',
      impact:
        'Solución integral para mantenimiento y gestión de maquinaria en CUJO SA con app OCR + geolocalización, panel de administración y backend OWASP-compliant. Calificación final: 6/6 excelente.',
      tags: ['OCR', 'Geolocalización', 'App móvil', 'Web admin', 'OWASP'],
      links: [
        { label: 'Empresa CUJO SA', href: 'https://cujo.com.uy/' }
      ]
    },
    {
      title: 'Motor interno de renderizado dinámico · Ripio',
      impact:
        'Framework para definir componentes desde backend y renderizarlos en la app sin nuevas releases, mejorando time-to-market y adaptación por país en pantallas críticas.',
      tags: ['Dynamic Rendering', 'Mobile Performance', 'Product Velocity'],
      links: []
    },
    {
      title: 'Migración masiva a ArgoCD · BPS',
      impact:
        'Estandarización GitOps para aplicaciones en OpenShift: menos tickets operativos, despliegues automáticos y mayor autonomía para centros de desarrollo.',
      tags: ['ArgoCD', 'OpenShift', 'GitOps', 'Automation'],
      links: []
    },
    {
      title: 'Implementación de Microfrontends · Ripio',
      impact:
        'Descentralización de desarrollo web para reducir conflictos, mejorar versionado por feature y elevar estabilidad general de la plataforma.',
      tags: ['Microfrontends', 'Web Architecture', 'Scalability'],
      links: []
    }
  ],
  certifications: [
    {
      label: 'Credly badges (OpenShift y más)',
      href: 'https://www.credly.com/users/diego-bergara/badges#credly'
    }
  ]
};
