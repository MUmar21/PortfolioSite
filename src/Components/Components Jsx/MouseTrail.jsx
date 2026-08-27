import { useEffect, useRef } from 'react';

/*
  MouseTrail — canvas-based particle trail.
  Particles are small gold/blue dots that fade out.
  Kept subtle so it feels premium, not distracting.
*/
export default function MouseTrail() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse     = useRef({ x: 0, y: 0 });
  const rafId     = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Spawn 2 particles per move
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x:     mouse.current.x + (Math.random() - 0.5) * 6,
          y:     mouse.current.y + (Math.random() - 0.5) * 6,
          size:  Math.random() * 3 + 1,
          alpha: 0.6 + Math.random() * 0.3,
          vx:    (Math.random() - 0.5) * 0.6,
          vy:    (Math.random() - 0.5) * 0.6 - 0.4,
          // Alternate gold and blue
          color: Math.random() > 0.6
            ? 'rgba(201,169,110,'
            : 'rgba(58,111,191,',
        });
      }
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter(p => p.alpha > 0.02);

      for (const p of particles.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();

        p.x      += p.vx;
        p.y      += p.vy;
        p.alpha  *= 0.88;
        p.size   *= 0.95;
      }

      rafId.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position:      'fixed',
        top:           0,
        left:          0,
        width:         '100%',
        height:        '100%',
        pointerEvents: 'none',
        zIndex:        9998,
      }}
    />
  );
}
