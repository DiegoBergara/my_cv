import { useRef, useEffect } from 'react';

interface Props {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

export default function SkillsCarousel({ items, direction = 'left', speed = 0.5 }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const duplicated = [...items, ...items];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout>;
    const dir = direction === 'right' ? -1 : 1;

    if (direction === 'right') {
      el.scrollLeft = el.scrollWidth / 2;
    }

    let currentScroll = el.scrollLeft;

    const tick = () => {
      if (paused) return;
      currentScroll += speed * dir;

      const half = el.scrollWidth / 2;
      if (dir > 0 && currentScroll >= half) currentScroll -= half;
      if (dir < 0 && currentScroll <= 0) currentScroll += half;

      el.scrollLeft = currentScroll;
    };

    intervalRef.current = window.setInterval(tick, 16);

    const pause = () => {
      paused = true;
      clearTimeout(resumeTimer);
    };
    const resume = () => {
      paused = false;
    };

    const resumeDelayed = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
      }, 2000);
    };

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resumeDelayed, { passive: true });
    el.addEventListener('focus', pause, true);
    el.addEventListener('blur', resumeDelayed, true);

    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
      clearTimeout(resumeTimer);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resumeDelayed);
      el.removeEventListener('focus', pause, true);
      el.removeEventListener('blur', resumeDelayed, true);
    };
  }, [direction, speed]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-base to-transparent" />

      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-3 overflow-x-auto"
        role="region"
        aria-label="Skills"
        tabIndex={0}
      >
        {duplicated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 select-none rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:border-primary/30 hover:text-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
