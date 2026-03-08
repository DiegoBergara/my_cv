interface Props {
  items: { label: string; href: string }[];
  langSwitch: { label: string; href: string };
}

const iconBySection: Record<string, JSX.Element> = {
  about: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.5c1.8-3.1 4-4.5 6.5-4.5s4.7 1.4 6.5 4.5" />
    </svg>
  ),
  skills: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="4.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="4.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="14.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="14.5" width="7" height="7" rx="1.5" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="6.5" width="16" height="12" rx="2" />
      <path d="M9 6.5v-1A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5v1" />
      <path d="M4 12h16" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9.5 14.5l-2.5 2.5a2.8 2.8 0 1 1-4-4L5.5 10.5" />
      <path d="M14.5 9.5L17 7a2.8 2.8 0 1 1 4 4l-2.5 2.5" />
      <path d="M8 16l8-8" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  ),
};

const languageIcon = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </svg>
);

export default function MobileMenu({ items, langSwitch }: Props) {
  return (
    <div className="flex items-center gap-1 md:hidden" aria-label="Mobile navigation">
      {items.map((item) => {
        const section = item.href.replace('#', '');
        return (
          <a
            key={item.href}
            href={item.href}
            aria-label={item.label}
            title={item.label}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white/85 transition-all hover:border-white/35 hover:bg-white/15 hover:text-white"
          >
            {iconBySection[section]}
          </a>
        );
      })}

      <a
        href={langSwitch.href}
        aria-label={`Switch language: ${langSwitch.label}`}
        title={`Switch language: ${langSwitch.label}`}
        className="ml-1 flex h-10 w-10 items-center justify-center rounded-lg border-2 border-cyan-400/45 bg-cyan-400/10 text-cyan-200 transition-all hover:border-cyan-300 hover:bg-cyan-400/20"
      >
        {languageIcon}
      </a>
    </div>
  );
}
