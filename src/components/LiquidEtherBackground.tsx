import { useEffect, useRef } from 'react';

type Props = { className?: string };

export default function LiquidEtherBackground({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    let raf = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let scrollY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onPointerMove = (event: PointerEvent | TouchEvent) => {
      if ('touches' in event) {
        if (!event.touches[0]) return;
        pointerX = event.touches[0].clientX;
        pointerY = event.touches[0].clientY;
      } else {
        pointerX = event.clientX;
        pointerY = event.clientY;
      }
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const draw = (time: number) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#090b1a');
      gradient.addColorStop(1, '#060714');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const orbs = [
        { x: canvas.width * 0.22, y: canvas.height * 0.33, color: '0,255,200', r: 260, speed: 0.6 },
        { x: canvas.width * 0.72, y: canvas.height * 0.2, color: '90,100,255', r: 280, speed: 0.45 },
        { x: canvas.width * 0.6, y: canvas.height * 0.8, color: '140,20,255', r: 300, speed: 0.4 }
      ];

      for (const [i, orb] of orbs.entries()) {
        const px = (pointerX / canvas.width - 0.5) * (24 + i * 8);
        const py = (pointerY / canvas.height - 0.5) * (24 + i * 10);
        const sx = Math.sin(t * orb.speed + i) * 36;
        const sy = Math.cos(t * (orb.speed + 0.2) + i) * 28 + scrollY * 0.03;
        const x = orb.x + sx + px;
        const y = orb.y + sy + py;

        const radial = ctx.createRadialGradient(x, y, 0, x, y, orb.r);
        radial.addColorStop(0, `rgba(${orb.color}, 0.26)`);
        radial.addColorStop(1, `rgba(${orb.color}, 0)`);
        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(x, y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
