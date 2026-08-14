/**
 * Hero Ambient Interactive Background Engine
 * High-End UI/UX Design System Aesthetic
 * Features:
 *  - Full-Page Fixed Precision Blueprint Dot-Grid & Micro-Crosshairs
 *  - Whisper-Subtle Cursor Radial Glow (Refined & Non-Intrusive)
 *  - Theme-Aware Dynamic Color Grading (Light / Dark)
 *  - Auto-Sleep & Performance Optimization (0% idle CPU)
 */

(function () {
  "use strict";

  class HeroAmbientSystem {
    constructor() {
      this.backdrop = document.getElementById("hero-backdrop");
      this.canvas = document.getElementById("hero-ambient-canvas");
      if (!this.backdrop || !this.canvas) return;

      this.ctx = this.canvas.getContext("2d", { alpha: true });
      if (!this.ctx) return;

      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.width = 0;
      this.height = 0;

      // Theme detection
      this.isDark = document.documentElement.getAttribute("data-theme") === "dark";

      // Grid settings
      this.gridSpacing = 28; // Distance between dots
      this.crosshairStep = 4; // Every 4 grid units, render a subtle crosshair (+)

      // Cursor & Spotlight state (Refined & subtle)
      this.mouse = {
        x: -9999,
        y: -9999,
        targetX: -9999,
        targetY: -9999,
        active: false,
        targetActive: false,
        intensity: 0,
        radius: 180 // Tight, refined radius
      };

      // Parallax state
      this.parallax = {
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0
      };

      // Animation & rendering flags
      this.animId = null;
      this.isVisible = true;
      this.idleFrames = 0;
      this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Bound methods
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.onResize = this.onResize.bind(this);
      this.loop = this.loop.bind(this);

      this.init();
    }

    init() {
      this.setupCanvas();
      this.bindEvents();
      this.setupThemeObserver();
      this.setupVisibilityObserver();
      this.render(); // Initial render
      this.wake();
    }

    setupCanvas() {
      this.width = Math.max(300, window.innerWidth);
      this.height = Math.max(200, window.innerHeight);

      this.canvas.width = Math.floor(this.width * this.dpr);
      this.canvas.height = Math.floor(this.height * this.dpr);
      this.canvas.style.width = `${this.width}px`;
      this.canvas.style.height = `${this.height}px`;

      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.scale(this.dpr, this.dpr);
    }

    bindEvents() {
      window.addEventListener("resize", this.onResize, { passive: true });

      // 全页面全屏追踪鼠标交互
      window.addEventListener("mousemove", this.onMouseMove, { passive: true });
      document.addEventListener("mouseleave", this.onMouseLeave, { passive: true });
      window.addEventListener("mouseenter", this.onMouseEnter, { passive: true });
    }

    setupThemeObserver() {
      const observer = new MutationObserver(() => {
        const dark = document.documentElement.getAttribute("data-theme") === "dark";
        if (dark !== this.isDark) {
          this.isDark = dark;
          this.wake();
        }
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"]
      });
    }

    setupVisibilityObserver() {
      document.addEventListener("visibilitychange", () => {
        this.isVisible = !document.hidden;
        if (this.isVisible) {
          this.wake();
        } else {
          this.sleep();
        }
      });
    }

    onResize() {
      this.setupCanvas();
      this.wake();
    }

    onMouseMove(e) {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;
      this.mouse.targetActive = true;

      // Parallax target (-1 to +1 normalized)
      const normX = (this.mouse.targetX / this.width) * 2 - 1;
      const normY = (this.mouse.targetY / this.height) * 2 - 1;
      this.parallax.targetX = normX * 6;
      this.parallax.targetY = normY * 4;

      this.wake();
    }

    onMouseEnter(e) {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;
      if (this.mouse.x < 0) {
        this.mouse.x = this.mouse.targetX;
        this.mouse.y = this.mouse.targetY;
      }
      this.mouse.targetActive = true;
      this.wake();
    }

    onMouseLeave() {
      this.mouse.targetActive = false;
      this.parallax.targetX = 0;
      this.parallax.targetY = 0;
      this.wake();
    }

    wake() {
      if (!this.isVisible) return;
      if (!this.animId) {
        this.animId = requestAnimationFrame(this.loop);
      }
      this.idleFrames = 0;
    }

    sleep() {
      if (this.animId) {
        cancelAnimationFrame(this.animId);
        this.animId = null;
      }
    }

    loop() {
      this.animId = null;
      if (!this.isVisible) return;

      const stillMoving = this.update();
      this.render();

      if (stillMoving || this.mouse.active || this.idleFrames < 30) {
        this.animId = requestAnimationFrame(this.loop);
        if (!stillMoving) {
          this.idleFrames++;
        } else {
          this.idleFrames = 0;
        }
      }
    }

    update() {
      let isMoving = false;

      // Lerp mouse coordinates
      if (this.mouse.targetActive) {
        const dx = this.mouse.targetX - this.mouse.x;
        const dy = this.mouse.targetY - this.mouse.y;
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          this.mouse.x += dx * 0.14;
          this.mouse.y += dy * 0.14;
          isMoving = true;
        } else {
          this.mouse.x = this.mouse.targetX;
          this.mouse.y = this.mouse.targetY;
        }

        // Ramp up intensity
        if (this.mouse.intensity < 1) {
          this.mouse.intensity += (1 - this.mouse.intensity) * 0.10;
          isMoving = true;
        }
      } else {
        // Ramp down intensity
        if (this.mouse.intensity > 0.005) {
          this.mouse.intensity += (0 - this.mouse.intensity) * 0.06;
          isMoving = true;
        } else {
          this.mouse.intensity = 0;
        }
      }
      this.mouse.active = this.mouse.intensity > 0.01;

      // Lerp parallax
      const pdx = this.parallax.targetX - this.parallax.x;
      const pdy = this.parallax.targetY - this.parallax.y;
      if (Math.abs(pdx) > 0.05 || Math.abs(pdy) > 0.05) {
        this.parallax.x += pdx * 0.08;
        this.parallax.y += pdy * 0.08;
        isMoving = true;
      }

      return isMoving;
    }

    render() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      const isDark = this.isDark;
      const spacing = this.gridSpacing;
      const mouse = this.mouse;
      const mouseRadiusSq = mouse.radius * mouse.radius;

      // Pure, elegant, monochrome palette (subtle, non-jarring)
      const baseDotAlpha = isDark ? 0.07 : 0.055;
      const baseCrossAlpha = isDark ? 0.13 : 0.095;
      const dotColor = isDark ? "255, 255, 255" : "26, 25, 29";

      // Apply subtle parallax offset to grid
      const offsetX = (this.parallax.x % spacing);
      const offsetY = (this.parallax.y % spacing);

      const cols = Math.ceil(this.width / spacing) + 2;
      const rows = Math.ceil(this.height / spacing) + 2;

      // Start coordinate calculation
      const startX = -spacing + offsetX;
      const startY = -spacing + offsetY;

      // 1. Render ultra-subtle, airy spotlight mist (whisper-soft)
      if (mouse.active && mouse.intensity > 0.02) {
        const grad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        const glowAlpha = isDark ? 0.025 * mouse.intensity : 0.016 * mouse.intensity;
        grad.addColorStop(0, `rgba(${dotColor}, ${glowAlpha})`);
        grad.addColorStop(1, `rgba(${dotColor}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render precision dots and crosshairs
      for (let r = 0; r < rows; r++) {
        const gy = startY + r * spacing;
        if (gy < -10 || gy > this.height + 10) continue;

        for (let c = 0; c < cols; c++) {
          const gx = startX + c * spacing;
          if (gx < -10 || gx > this.width + 10) continue;

          let dotX = gx;
          let dotY = gy;
          let alpha = baseDotAlpha;
          let radius = 1.0;

          // Check interaction with mouse spotlight (gentle, elegant illumination)
          if (mouse.active) {
            const dx = dotX - mouse.x;
            const dy = dotY - mouse.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < mouseRadiusSq) {
              const dist = Math.sqrt(distSq);
              const factor = 1 - dist / mouse.radius; // 0 to 1
              const easeFactor = factor * factor; // smooth quadratic falloff

              // Micro displacement (delicate, sub-pixel feel)
              const push = easeFactor * 0.7;
              if (dist > 0.001) {
                dotX += (dx / dist) * push;
                dotY += (dy / dist) * push;
              }

              // Gentle opacity and micro-size increase
              alpha = baseDotAlpha + (isDark ? 0.12 : 0.08) * easeFactor * mouse.intensity;
              radius = 1.0 + 0.35 * easeFactor * mouse.intensity;
            }
          }

          // Check if this is a crosshair milestone
          const isCross = (c % this.crosshairStep === 0) && (r % this.crosshairStep === 0);

          if (isCross) {
            // Render Blueprint Crosshair (+)
            const crossAlpha = Math.max(alpha * 1.35, baseCrossAlpha);
            const crossSize = 3.2 + (radius - 1.0) * 0.6;
            ctx.strokeStyle = `rgba(${dotColor}, ${crossAlpha})`;
            ctx.lineWidth = 1;

            ctx.beginPath();
            // Horizontal bar
            ctx.moveTo(dotX - crossSize, dotY);
            ctx.lineTo(dotX + crossSize, dotY);
            // Vertical bar
            ctx.moveTo(dotX, dotY - crossSize);
            ctx.lineTo(dotX, dotY + crossSize);
            ctx.stroke();
          } else {
            // Render Standard Grid Dot
            ctx.fillStyle = `rgba(${dotColor}, ${alpha})`;

            ctx.beginPath();
            ctx.arc(dotX, dotY, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      window.heroAmbient = new HeroAmbientSystem();
    });
  } else {
    window.heroAmbient = new HeroAmbientSystem();
  }
})();
