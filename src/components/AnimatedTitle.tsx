import { useEffect, useRef } from 'react';

type Props = {
  text: string;
  className?: string;
};

export default function AnimatedTitle({ text, className }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) node.classList.add('title-active');
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <h1 ref={ref} className={`title-reveal ${className ?? ''}`}>
      {text}
    </h1>
  );
}
