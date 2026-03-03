import { useEffect, useRef, useState } from 'react';

const VERT = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;
uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
out vec4 fragColor;

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop { vec3 color; float position; };

#define COLOR_RAMP(colors, factor, finalColor) { \
  int index = 0; \
  for (int i = 0; i < 2; i++) { \
    ColorStop currentColor = colors[i]; \
    bool isInBetween = currentColor.position <= factor; \
    index = int(mix(float(index), float(i), float(isInBetween))); \
  } \
  ColorStop currentColor = colors[index]; \
  ColorStop nextColor = colors[index + 1]; \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  vec3 auroraColor = intensity * rampColor;
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}`;

const FALLBACK =
  'radial-gradient(circle at 20% 20%, rgba(0,255,200,0.15), transparent 35%), radial-gradient(circle at 70% 30%, rgba(139,92,246,0.2), transparent 40%), radial-gradient(circle at 50% 80%, rgba(6,182,212,0.15), transparent 45%), #0a0a0f';

const COLORS = ['#00ffc8', '#8b5cf6', '#06b6d4'];

interface Props {
  className?: string;
}

export default function HeroBackground({ className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const interactionRef = useRef({ mx: 0.5, my: 0.5, scrollY: 0 });
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const ctn = containerRef.current;
    if (!ctn) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setUseFallback(true);
      return;
    }

    let cancelled = false;
    let cleanup: (() => void) | null = null;

    (async () => {
      let ogl: any;
      try {
        ogl = await import('ogl');
      } catch {
        setUseFallback(true);
        return;
      }
      if (cancelled) return;

      const { Renderer, Program, Mesh, Color, Triangle } = ogl;

      let renderer: any;
      try {
        renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true });
      } catch {
        setUseFallback(true);
        return;
      }

      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      const canvas = gl.canvas as HTMLCanvasElement;
      Object.assign(canvas.style, {
        width: '100%',
        height: '100%',
        display: 'block',
        position: 'absolute',
        inset: '0',
      });

      const geometry = new Triangle(gl);
      if (geometry.attributes.uv) delete geometry.attributes.uv;

      const colorStopsArray = COLORS.map((hex: string) => {
        const c = new Color(hex);
        return [c.r, c.g, c.b];
      });

      const program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          uTime: { value: 0 },
          uAmplitude: { value: 1.0 },
          uColorStops: { value: colorStopsArray },
          uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
          uBlend: { value: 0.5 },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });
      ctn.appendChild(canvas);

      const resize = () => {
        if (!ctn) return;
        renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
        program.uniforms.uResolution.value = [ctn.offsetWidth, ctn.offsetHeight];
      };

      const onPointer = (e: MouseEvent | TouchEvent) => {
        const rect = ctn.getBoundingClientRect();
        const cx = 'touches' in e ? e.touches[0]?.clientX ?? 0 : e.clientX;
        const cy = 'touches' in e ? e.touches[0]?.clientY ?? 0 : e.clientY;
        interactionRef.current.mx = (cx - rect.left) / rect.width;
        interactionRef.current.my = (cy - rect.top) / rect.height;
      };

      const onScroll = () => {
        interactionRef.current.scrollY = window.scrollY;
      };

      ctn.addEventListener('mousemove', onPointer);
      ctn.addEventListener('touchmove', onPointer, { passive: true });
      ctn.addEventListener('click', () => {
        interactionRef.current.mx = Math.random();
        interactionRef.current.my = Math.random();
      });
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', resize);
      resize();

      let raf = 0;
      const update = (t: number) => {
        raf = requestAnimationFrame(update);
        const { mx, my, scrollY } = interactionRef.current;
        const scrollFade = Math.max(0.2, 1 - scrollY / (window.innerHeight * 0.7));
        const speed = 0.8 + mx * 0.4;
        const amplitude = (0.8 + (1 - my) * 0.4) * scrollFade;
        program.uniforms.uTime.value = t * 0.01 * speed * 0.1;
        program.uniforms.uAmplitude.value = amplitude;
        renderer.render({ scene: mesh });
      };
      raf = requestAnimationFrame(update);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ctn.removeEventListener('mousemove', onPointer);
        ctn.removeEventListener('touchmove', onPointer);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', resize);
        if (canvas.parentNode === ctn) ctn.removeChild(canvas);
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ background: useFallback ? FALLBACK : FALLBACK }}
      aria-hidden="true"
    />
  );
}
