import { useState, useEffect, useCallback } from 'react';

interface Props {
  items: { label: string; href: string }[];
  langSwitch: { label: string; href: string };
}

export default function MobileMenu({ items, langSwitch }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen((p) => !p)}
        className="relative z-50 flex h-10 w-10 cursor-pointer items-center justify-center"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <div className="flex w-6 flex-col gap-1.5">
          <span
            className={`block h-0.5 w-full rounded bg-white transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-full rounded bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-full rounded bg-white transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#0a0a0f]/98 backdrop-blur-xl">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="text-2xl font-medium text-white/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
