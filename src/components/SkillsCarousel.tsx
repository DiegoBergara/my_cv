import { useRef, useEffect } from 'react';

interface Props {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

export default function SkillsCarousel({ items, direction = 'left', speed = 30 }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const duplicated = [...items, ...items];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const pause = () => {
      el.style.animationPlayState = 'paused';
    };
    const resume = () => {
      el.style.animationPlayState = 'running';
    };

    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume, { passive: true });
    return () => {
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <div className="relative overflow-hidden" role="region" aria-label="Skills">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-base to-transparent" />

      <div
        ref={trackRef}
        className="marquee-track flex w-max gap-3"
        style={
          {
            '--marquee-duration': `${speed}s`,
            animationDirection: direction === 'right' ? 'reverse' : 'normal',
          } as React.CSSProperties
        }
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
