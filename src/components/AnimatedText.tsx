import { useEffect, useRef, useState } from 'react';

interface Props {
  text: string;
  as?: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, as: Tag = 'p', className = '', delay = 40 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');
  const Comp = Tag as any;

  return (
    <Comp ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word: string, i: number) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            filter: inView ? 'blur(0px)' : 'blur(4px)',
            transition: `opacity 0.5s ease ${i * delay}ms, transform 0.5s ease ${i * delay}ms, filter 0.5s ease ${i * delay}ms`,
          }}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Comp>
  );
}
