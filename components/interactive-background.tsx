'use client';

import { useEffect, useRef } from 'react';

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; size: number; alpha: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      // DEĞİŞİKLİK 1: Çizgi ağını zenginleştirmek için parçacık sayısını 25'ten 45'e çıkardık
      const particleCount = 45;
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 2 + 0.8, // Parçacık boyutlarını da hafifçe belirginleştirdik
          alpha: Math.random() * 0.3 + 0.05,
        });
      }
    };
    initParticles();

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent dark blue to create trail effect
      ctx.fillStyle = 'rgba(15, 30, 43, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Draw and update particles
      particles.forEach((particle, index) => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Attraction to mouse
        const dx = mousePos.current.x - particle.x;
        const dy = mousePos.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 170; // Fare çekim alanını hafifçe genişlettik (150 -> 170)

        if (distance < maxDistance) {
          const angle = Math.atan2(dy, dx);
          const force = (1 - distance / maxDistance) * 0.12; // Çekim kuvvetini azıcık artırdık
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;

          // Limit speed
          const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
          if (speed > 1.2) {
            particle.vx = (particle.vx / speed) * 1.2;
            particle.vy = (particle.vy / speed) * 1.2;
          }

          // Increase alpha when near mouse
          particle.alpha = Math.min(0.5, particle.alpha + 0.05);
        } else {
          // Fade out when far from mouse
          particle.alpha = Math.max(0.05, particle.alpha - 0.01);
        }

        // Draw particle
        ctx.fillStyle = `rgba(124, 255, 146, ${particle.alpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections between nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const otherParticle = particles[j];
          const dx = otherParticle.x - particle.x;
          const dy = otherParticle.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // DEĞİŞİKLİK 2: Birbirine bağlanma mesafesini 120'den 150'ye çıkardık (Daha çok çizgi tetiklenir)
          if (distance < 150) {
            // Çizgiler kalınlaşınca parlamaması için opaklığı /8 yerine /6 ile hafifçe dengeledik
            ctx.strokeStyle = `rgba(124, 255, 146, ${(particle.alpha + otherParticle.alpha) / 6})`;

            // DEĞİŞİKLİK 3: Çizgi kalınlığını 0.3'ten 1.0'a çıkardık (İstiyorsan 1.5 de yapabilirsin)
            ctx.lineWidth = 1.0;

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });

      // Draw subtle grid pattern
      ctx.strokeStyle = 'rgba(124, 255, 146, 0.008)';
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, rgba(15, 30, 43, 0.9) 0%, rgba(15, 30, 43, 0.95) 100%)' }}
    />
  );
}