"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Interactive animated grid background for the hero section.
 * Uses Canvas 2D for performance — renders a subtle grid with
 * a mouse-following glow effect and gentle drift animation.
 */
export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  const draw = useCallback((ctx: CanvasRenderingContext2D, time: number) => {
    const { width, height } = ctx.canvas;
    const dpr = window.devicePixelRatio || 1;
    const w = width / dpr;
    const h = height / dpr;

    ctx.clearRect(0, 0, width, height);

    // Background gradient
    const grd = ctx.createRadialGradient(
      w * 0.5 + Math.sin(time * 0.0002) * w * 0.2,
      h * 0.5 + Math.cos(time * 0.0003) * h * 0.2,
      0,
      w * 0.5,
      h * 0.5,
      Math.max(w, h) * 0.8
    );
    grd.addColorStop(0, "rgba(30, 30, 45, 0.4)");
    grd.addColorStop(1, "rgba(19, 19, 23, 0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, w, h);

    // Grid lines
    const spacing = 48;
    const drift = time * 0.008;
    const offsetX = drift % spacing;
    const offsetY = (drift * 0.7) % spacing;

    ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
    ctx.lineWidth = 0.5;

    // Vertical lines
    for (let x = -spacing + offsetX; x < w + spacing; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    // Horizontal lines
    for (let y = -spacing + offsetY; y < h + spacing; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Grid intersection dots
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    for (let x = -spacing + offsetX; x < w + spacing; x += spacing) {
      for (let y = -spacing + offsetY; y < h + spacing; y += spacing) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Mouse glow
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    if (mx > 0 && my > 0) {
      const glowRadius = 250;
      const glow = ctx.createRadialGradient(mx, my, 0, mx, my, glowRadius);
      glow.addColorStop(0, "rgba(77, 142, 255, 0.08)");
      glow.addColorStop(0.5, "rgba(77, 142, 255, 0.03)");
      glow.addColorStop(1, "rgba(77, 142, 255, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(
        mx - glowRadius,
        my - glowRadius,
        glowRadius * 2,
        glowRadius * 2
      );

      // Brighter grid lines near mouse
      ctx.strokeStyle = "rgba(173, 198, 255, 0.08)";
      ctx.lineWidth = 0.5;
      for (let x = -spacing + offsetX; x < w + spacing; x += spacing) {
        const dist = Math.abs(x - mx);
        if (dist < glowRadius) {
          const alpha = (1 - dist / glowRadius) * 0.12;
          ctx.strokeStyle = `rgba(173, 198, 255, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(x, Math.max(0, my - glowRadius));
          ctx.lineTo(x, Math.min(h, my + glowRadius));
          ctx.stroke();
        }
      }
      for (let y = -spacing + offsetY; y < h + spacing; y += spacing) {
        const dist = Math.abs(y - my);
        if (dist < glowRadius) {
          const alpha = (1 - dist / glowRadius) * 0.12;
          ctx.strokeStyle = `rgba(173, 198, 255, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(Math.max(0, mx - glowRadius), y);
          ctx.lineTo(Math.min(w, mx + glowRadius), y);
          ctx.stroke();
        }
      }
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = (time: number) => {
      draw(ctx, time);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  );
}
