"use client";

import { useEffect, useRef } from "react";

export default function TerrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let offset = 0;
    let animationFrameId: number;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const drawTerrain = () => {
      if (!ctx) return;

      ctx.fillStyle = "#030303";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(204, 255, 0, 0.15)";
      ctx.lineWidth = 1;

      const perspective = 300;
      const horizon = height * 0.4;
      const gridSpacing = 60;

      offset += 0.5;
      if (offset > gridSpacing) offset = 0;

      ctx.beginPath();

      // Vertical lines (radiating)
      for (let x = -width; x < width * 2; x += gridSpacing) {
        const x1 = (x - width / 2) * (perspective / perspective) + width / 2;
        const y1 = height;

        const x2 =
          (x - width / 2) * (perspective / (perspective + 500)) + width / 2;
        const y2 = horizon;

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }

      // Horizontal lines (moving down)
      for (let z = 0; z < 500; z += 40) {
        let currentZ = z - offset;
        if (currentZ < 0) currentZ += 500;

        const scale = perspective / (perspective + currentZ);
        const y = horizon + currentZ * 0.8;

        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }

      ctx.stroke();

      // Retro Sun or Glow
      const gradient = ctx.createRadialGradient(
        width / 2,
        horizon,
        10,
        width / 2,
        horizon,
        300
      );
      gradient.addColorStop(0, "rgba(204, 255, 0, 0.1)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(drawTerrain);
    };

    resize();
    window.addEventListener("resize", resize);
    drawTerrain();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      id="terrain-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 opacity-60"
    />
  );
}

