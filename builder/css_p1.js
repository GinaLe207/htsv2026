module.exports = function getCssP1() {
  return `/* ==========================================================================
   THEME AURORA: DYNAMIC MESH GRADIENT, ETHEREAL GLASSMORPHISM & PIXEL HEADLINE
   ========================================================================== */
@font-face {
  font-family: "GeistPixel-Circle";
  src: url("fonts/GeistPixel-Circle.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "DeArPix";
  src: url("fonts/dearpix.woff2") format("woff2"),
       url("fonts/dearpix.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Coder's Crux";
  src: url("fonts/coders_crux.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SVN-Coder's Crux";
  src: url("fonts/SVN-Coders-Crux.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

:root {
  --bg-grad: linear-gradient(135deg, #5be7d9 0%, #3fa9dd 35%, #4a6fd1 60%, #6b4fc7 85%, #8b4fd6 100%);
  --bg-solid-fallback: #3a6fc4;
  --text: #ffffff;
  --text-glow: 0 0 8px rgba(255,255,255,0.9), 0 0 22px rgba(255,255,255,0.5), 0 0 44px rgba(180,200,255,0.3);
  --muted: #e6e9ff;
  --accent-purple: #7a4fd1;
  --accent-purple-solid: #6a3fc9;
  --badge-bg: rgba(106, 63, 201, 0.92);
  --badge-bg-soft: rgba(122, 79, 209, 0.45);
  --pill-light: rgba(255, 255, 255, 0.14);
  --pill-light-border: rgba(255, 255, 255, 0.35);
  --nav-shadow: 0 4px 20px rgba(60, 40, 120, 0.25);
  --star-color: #ffffff;
  --star-glow: 0 0 6px rgba(255,255,255,0.9);
  --orb-blur-purple: radial-gradient(circle, rgba(155,110,230,0.55), transparent 70%);
  --orb-blur-yellow: radial-gradient(circle, rgba(255,235,150,0.35), transparent 70%);

  /* Frosted Glass Cards */
  --card-bg: rgba(255, 255, 255, 0.18);
  --card-bg-hover: rgba(255, 255, 255, 0.22);
  --card-border: rgba(255, 255, 255, 0.38);
  --card-border-hover: rgba(255, 255, 255, 0.6);
  --card-radius: 20px;

  --cyan: #5be7d9;
  --accent: #ffd166;
  --gold: #ffd166;

  --trust-bg: rgba(255, 255, 255, 0.14);
  --trust-border: rgba(255, 255, 255, 0.35);
  --trust-text: #ffffff;

  --font-sans: "Be Vietnam Pro", "Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-serif: "Cormorant Garamond", "Playfair Display", "Georgia", serif;
  --font-serif-display: var(--font-serif);
  --font-heading-secondary: "Playfair Display", "Merriweather", "Georgia", serif;
  --font-display: var(--font-serif);
  --font-numbers: "Playfair Display", "Cormorant Garamond", "Georgia", serif;

  --max-w: 1200px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Reset & Box Sizing */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  color-scheme: dark;
}

body {
  background-color: var(--bg-solid-fallback);
  background: var(--bg-grad);
  background-size: 200% 200%;
  animation: gradientShift 18s ease-in-out infinite alternate;
  background-attachment: fixed;
  color: var(--text);
  font-family: var(--font-sans);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  min-height: 100vh;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 100%;
  }
}

/* Typography Utility */
.font-pixel {
  font-family: var(--font-pixel);
  letter-spacing: 0.03em;
}

.text-glow-heading {
  color: var(--text) !important;
  text-shadow: var(--text-glow);
}

.text-accent {
  color: var(--accent) !important;
}

.text-cyan {
  color: var(--cyan) !important;
}

.text-accent-glow {
  color: #ffd166 !important;
  text-shadow: 0 0 10px rgba(255, 209, 102, 0.8);
}

.text-muted {
  color: var(--muted) !important;
}

/* ==========================================================================
   PHẦN A — HERO (Nền Động Aurora Gradient Mesh & Orbs)
   ========================================================================== */
.page {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  z-index: 1;
}

.bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.bg-gradient-mesh {
  position: absolute;
  inset: 0;
  background: var(--bg-grad);
  background-size: 200% 200%;
  animation: gradientShift 18s ease-in-out infinite alternate;
  z-index: 0;
}

/* Quầng sáng mờ (Blur Orbs) */
.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  z-index: 1;
}

.bg-orb-purple {
  width: 520px;
  height: 520px;
  bottom: 4%;
  right: -80px;
  background: var(--orb-blur-purple);
}

.bg-orb-yellow {
  width: 380px;
  height: 380px;
  top: 15%;
  left: 20%;
  background: var(--orb-blur-yellow);
}

.bg-orb-cyan {
  width: 480px;
  height: 480px;
  top: -100px;
  left: -100px;
  background: radial-gradient(circle, rgba(91, 231, 217, 0.45) 0%, transparent 70%);
}

/* Vòng tròn quỹ đạo mảnh mờ (Orbital rings) */
.bg-orbital-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.22);
  pointer-events: none;
  z-index: 1;
}

.ring-1 {
  width: 720px;
  height: 720px;
  top: -200px;
  left: -200px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.ring-2 {
  width: 860px;
  height: 860px;
  bottom: -320px;
  right: -260px;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.08);
}

/* Ngôi sao 4 cánh lấp lánh (Sparkle Stars) */
.sparkle-star {
  position: absolute;
  width: 24px;
  height: 24px;
  fill: #ffffff;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.95));
  z-index: 2;
  animation: sparkleShimmer 6s ease-in-out infinite alternate;
}

.spark-1 {
  top: 22%;
  left: 14%;
  animation-delay: 0.5s;
}

.spark-2 {
  top: 35%;
  right: 18%;
  width: 20px;
  height: 20px;
  animation-delay: 2.2s;
}

.spark-3 {
  bottom: 25%;
  left: 22%;
  width: 22px;
  height: 22px;
  animation-delay: 4.1s;
}

@keyframes sparkleShimmer {
  0% {
    opacity: 0.35;
    transform: scale(0.8) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.2) rotate(15deg);
    filter: drop-shadow(0 0 14px rgba(255, 255, 255, 1));
  }
  100% {
    opacity: 0.45;
    transform: scale(0.85) rotate(0deg);
  }
}

.bg-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

/* 1. Header (Desktop & Mobile) */
.header {
  position: relative;
  z-index: 20;
  padding: clamp(14px, 2.5vw, 24px) clamp(16px, 3.5vw, 40px);
}

.header-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

/* Logo Button */
.logo-btn {
  width: clamp(44px, 4.8vw, 52px);
  height: clamp(44px, 4.8vw, 52px);
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(60, 40, 120, 0.3), 0 0 16px rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.8);
  transition: transform 0.25s var(--ease-out), box-shadow 0.25s ease;
  flex-shrink: 0;
  text-decoration: none;
  padding: 4px;
}

.logo-btn:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 30px rgba(122, 79, 209, 0.5), 0 0 24px rgba(255, 255, 255, 0.9);
}

.logo-img {
  width: 86%;
  height: 86%;
  object-fit: contain;
}

/* Nav Pill (Frosted Glassmorphism) */
.nav-pill {
  background: var(--pill-light);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 9999px;
  padding: 5px 12px;
  box-shadow: var(--nav-shadow), 0 0 15px rgba(255, 255, 255, 0.15);
  border: 1px solid var(--pill-light-border);
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
}

.nav-link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 14px;
  font-size: 13.5px;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s ease, text-shadow 0.2s ease;
  border-radius: 9999px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.nav-link:hover {
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.9);
}

.nav-link.active {
  color: #ffffff;
  font-weight: 800;
  text-shadow: 0 0 14px rgba(255, 255, 255, 1);
}

.nav-indicator {
  display: flex;
  align-items: center;
  gap: 3px;
  position: absolute;
  bottom: 2px;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform: translateY(2px);
}

.nav-indicator i {
  width: 3.5px;
  height: 3.5px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 6px #ffffff;
  display: inline-block;
}

.nav-link.active .nav-indicator {
  opacity: 1;
  transform: translateY(0);
}

/* CTA Header */
.header-action {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cta-header-btn {
  background: var(--badge-bg);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 9999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 20px rgba(122, 79, 209, 0.4), 0 0 12px rgba(255, 255, 255, 0.2);
  transition: all 0.25s ease;
}

.cta-header-btn:hover {
  background: var(--accent-purple-solid);
  border-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 26px rgba(122, 79, 209, 0.7), 0 0 20px rgba(255, 255, 255, 0.6);
}

/* Mobile Burger Toggle */
.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--badge-bg);
  border: 1px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
  padding: 10px;
  z-index: 30;
  box-shadow: 0 4px 15px rgba(60, 40, 120, 0.3);
}

.burger-line {
  width: 100%;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Mobile Drawer */
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(35, 15, 65, 0.7);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}

.drawer-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(340px, 85vw);
  background: linear-gradient(180deg, #4a3fa8 0%, #2b1754 100%);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 101;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.4s var(--ease-out);
  box-shadow: -10px 0 30px rgba(25, 10, 50, 0.6);
}

.mobile-drawer.active {
  transform: translateX(0);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  margin-bottom: 20px;
}

.drawer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.drawer-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  padding: 3px;
}

.drawer-brand-text strong {
  display: block;
  font-size: 14px;
  color: #ffffff;
}

.drawer-brand-text small {
  font-size: 11px;
  color: var(--cyan);
}

.drawer-close-btn {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.drawer-nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.drawer-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 16px;
  color: #ffffff;
  text-decoration: none;
  font-size: 14.5px;
  font-weight: 500;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.drawer-link:hover, .drawer-link.highlight {
  background: rgba(255, 255, 255, 0.18);
  color: var(--cyan);
}

.drawer-link i {
  color: var(--cyan);
  width: 20px;
}

.drawer-footer {
  margin-top: auto;
  padding-top: 20px;
}

/* 2. Hero Center Content */
.hero-center {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: clamp(20px, 4vh, 60px) clamp(16px, 3.5vw, 32px);
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Trust Row */
.trust-row {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--trust-bg);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--trust-border);
  border-radius: 9999px;
  padding: 6px 18px 6px 8px;
  box-shadow: 0 8px 24px rgba(60, 40, 120, 0.2), 0 0 15px rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
}

.avatar-stack {
  display: flex;
  align-items: center;
}

.avatar-ring {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.6);
  margin-left: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.avatar-ring:first-child {
  margin-left: 0;
}

.avatar-ring img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.trust-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--trust-text);
  letter-spacing: 0.2px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.trust-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 10px #ffffff;
  animation: pulseWhite 2s infinite ease-in-out;
}

@keyframes pulseWhite {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.35);
    opacity: 0.6;
  }
}

/* Badge "AOF • 2026" */
.hero-badge-group {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

/* Badge Năm "2026": Hình chữ nhật bo góc vừa (14px), nền tím đặc #6a3fc9 (rgba(106, 63, 201, 0.92)), chữ trắng đậm sans-serif (Inter 700) */
.hero-year-badge-rect {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(106, 63, 201, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 14px;
  padding: 6px 20px;
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(106, 63, 201, 0.6), 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Pill Phụ đề "AOF • HÀNH TRANG SINH VIÊN": Dạng pill bo góc lớn (26px), nền gradient tím-hồng trong suốt viền trắng mờ, chữ trắng serif phát sáng */
.hero-subtitle-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(122, 79, 209, 0.55) 0%, rgba(217, 70, 239, 0.35) 100%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 26px;
  padding: 7px 22px;
  font-family: var(--font-serif);
  font-size: 14.5px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 20px rgba(122, 79, 209, 0.4);
}

.hero-year-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--badge-bg);
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 14px;
  padding: 6px 24px;
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 2px;
  box-shadow: 0 0 24px rgba(106, 63, 201, 0.6), 0 0 12px rgba(255, 255, 255, 0.4);
  margin-bottom: 22px;
}

/* Headline: Serif Cao Cấp (Cormorant Garamond & Playfair Display) với Text Bloom Glow */

/* Calligraphy Pretitle: "Hồ Sơ Tài Trợ" - Center Alignment with -2deg tilt */
.hero-headline-wrap {
  display: inline-flex;
  flex-direction: column;
  align-items: center; /* CHÍNH GIỮA HOÀN HẢO */
  max-width: 100%;
  margin: 10px auto 20px auto;
  position: relative;
  text-align: center;
}

.hero-calligraphy-script {
  font-family: "Alex Brush", "Dancing Script", cursive, serif;
  font-size: clamp(36px, 5.5vw, 56px);
  font-weight: 700;
  line-height: 1.15;
  background: linear-gradient(180deg, #ffffff 0%, #fff2be 30%, #ffd166 70%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 3px 6px rgba(20, 10, 50, 0.45)) drop-shadow(0 0 16px rgba(255, 209, 102, 0.7));
  align-self: center;
  text-align: center;
  margin-bottom: -4px;
  user-select: none;
  letter-spacing: 1px;
  transform: rotate(-2deg); /* Nghiêng nhẹ -2 độ nghệ thuật */
  display: inline-block;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.hero-calligraphy-script:hover {
  transform: rotate(-2deg) scale(1.04);
  filter: drop-shadow(0 4px 8px rgba(20, 10, 50, 0.55)) drop-shadow(0 0 22px rgba(255, 209, 102, 0.9));
}

.hero-headline {
  font-family: "SVN-Coder's Crux", "Coder's Crux", monospace;
  font-size: clamp(68px, 12vw, 124px);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 24px;
  display: inline-block;
  text-shadow: none !important;
}

.headline-line {
  display: block;
  color: #ffffff;
  text-shadow: none !important;
}

.headline-line-1,
.headline-line-2 {
  color: #ffffff;
  text-shadow: none !important;
}

/* Subhead */
.hero-subhead {
  font-size: clamp(15px, 2vw, 18px);
  color: var(--muted);
  max-width: 680px;
  margin-bottom: 32px;
  line-height: 1.65;
  font-weight: 500;
  text-shadow: 0 2px 8px rgba(30, 20, 70, 0.4);
  opacity: 0.95;
}

/* Primary CTA Button (Gradient Purple-Blue with Glow) */
.cta-primary-btn {
  background: linear-gradient(90deg, var(--accent-purple) 0%, #4a6fd1 100%);
  color: #ffffff;
  font-family: var(--font-sans);
  font-size: 15.5px;
  font-weight: 700;
  padding: 15px 36px;
  border-radius: 9999px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 30px rgba(122, 79, 209, 0.5), 0 0 20px rgba(255, 255, 255, 0.4);
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  transition: all 0.25s var(--ease-out);
  cursor: pointer;
}

.cta-primary-btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 14px 40px rgba(122, 79, 209, 0.75), 0 0 30px rgba(255, 255, 255, 0.8);
  background: linear-gradient(90deg, #8b5fe0 0%, #5b7fe2 100%);
  color: #ffffff;
}

.cta-outline-btn {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border: 1.5px solid rgba(255, 255, 255, 0.45);
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  padding: 14px 30px;
  border-radius: 9999px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 20px rgba(60, 40, 120, 0.2);
  transition: all 0.25s ease;
}

.cta-outline-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: #ffffff;
  color: #ffffff;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.4);
}

/* 3. Stats Footer (4 Metrics with Frosted Glassmorphism & Glowing Numbers) */
.stats-footer {
  position: relative;
  z-index: 10;
  padding: clamp(20px, 3vh, 32px) clamp(16px, 3vw, 32px);
  border-top: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.stats-grid {
  max-width: var(--max-w);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.16) 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 8px 24px rgba(45, 25, 90, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.6);
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}

.stat-item:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.22) 100%);
  border-color: rgba(255, 255, 255, 0.7);
  transform: translateY(-2px);
}

.stat-icon {
  font-family: var(--font-serif);
  font-size: 22px;
  color: #ffffff;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--badge-bg);
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 0 14px rgba(106, 63, 201, 0.5);
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-value-wrap {
  display: flex;
  align-items: baseline;
  font-family: var(--font-numbers);
  font-size: clamp(26px, 3.2vw, 36px);
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  color: #ffffff;
  line-height: 1.1;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 22px rgba(180, 200, 255, 0.4);
}

.stat-suffix {
  color: var(--accent);
  margin-left: 2px;
  font-size: 20px;
}

.stat-label {
  font-size: 12.5px;
  color: var(--muted);
  font-weight: 600;
  margin-top: 2px;
}
`;
};
