module.exports = function getHeadAndHero() {
  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>AOF - Hành Trang Sinh Viên 2026 | Ban Văn Phòng ĐTN</title>
  
  <!-- Meta description & OpenGraph -->
  <meta name="description" content="Chương trình định hướng, đồng hành cùng hơn 8.500 tân sinh viên Học viện Tài chính (AOF) Khóa 64 - Ban Văn phòng Đoàn Thanh niên HVTC." />
  <meta name="keywords" content="AOF, Hành Trang Sinh Viên 2026, Học viện Tài chính, Đoàn Thanh niên, Ban Văn phòng, BVP ĐTN, Tài trợ sự kiện, Sinh viên AOF" />
  <meta property="og:title" content="AOF - Hành Trang Sinh Viên 2026" />
  <meta property="og:description" content="Hồ sơ mời tài trợ và giới thiệu chương trình Hành Trang Sinh Viên 2026 - Ban Văn phòng Đoàn Thanh niên HVTC." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="assets/logo.png" />
  <link rel="icon" type="image/png" href="assets/logo.png" />

  <!-- Google Fonts: Be Vietnam Pro, Cormorant Garamond, Playfair Display, Merriweather, Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&family=Merriweather:ital,wght@1,600;1,700&family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Alex+Brush&family=Dancing+Script:wght@600;700&family=Charm:wght@400;700&family=Charmonman:wght@400;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet" />

  <!-- Font Awesome 6.5.2 CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />

  <!-- Stylesheet -->
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="theme-aurora">

  <!-- ================================================================= -->
  <!-- THANH MỤC LỤC NỔI XUYÊN SUỐT TOÀN TRANG (STICKY FLOATING TOC DOCK) -->
  <!-- ================================================================= -->
  <aside class="floating-toc-dock" id="floating-toc" aria-label="Mục lục">
    <div class="toc-dock-header">
      <div class="toc-dock-title">
        <i class="fa-solid fa-sparkles text-accent-glow"></i>
        <span>MỤC LỤC</span>
      </div>
      <button class="toc-dock-toggle-btn" id="toc-dock-toggle" type="button" aria-label="Thu gọn hoặc mở rộng mục lục" title="Thu gọn/Mở rộng">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    </div>

    <nav class="toc-dock-nav">
      <div class="toc-dock-line">
        <div class="toc-dock-progress" id="toc-progress-bar"></div>
      </div>
      <ul class="toc-dock-list">
        <li>
          <a href="#top" class="toc-dock-link active" data-target="top">
            <span class="toc-dot"></span>
            <span class="toc-tag">00</span>
            <span class="toc-text">Trang đầu</span>
          </a>
        </li>
        <li>
          <a href="#thu-ngo" class="toc-dock-link" data-target="thu-ngo">
            <span class="toc-dot"></span>
            <span class="toc-tag">✉</span>
            <span class="toc-text">Thư ngỏ</span>
          </a>
        </li>
        <li>
          <a href="#gioi-thieu" class="toc-dock-link" data-target="gioi-thieu">
            <span class="toc-dot"></span>
            <span class="toc-tag">I</span>
            <span class="toc-text">Giới thiệu đơn vị</span>
          </a>
        </li>
        <li>
          <a href="#thanh-tuu" class="toc-dock-link" data-target="thanh-tuu">
            <span class="toc-dot"></span>
            <span class="toc-tag">★</span>
            <span class="toc-text">Thành tựu 2025</span>
          </a>
        </li>
        <li>
          <a href="#ke-hoach" class="toc-dock-link" data-target="ke-hoach">
            <span class="toc-dot"></span>
            <span class="toc-tag">II</span>
            <span class="toc-text">Kế hoạch tổ chức</span>
          </a>
        </li>
        <li>
          <a href="#giai-thuong" class="toc-dock-link" data-target="giai-thuong">
            <span class="toc-dot"></span>
            <span class="toc-tag">🏆</span>
            <span class="toc-text">Cơ cấu giải thưởng</span>
          </a>
        </li>
        <li>
          <a href="#truyen-thong" class="toc-dock-link" data-target="truyen-thong">
            <span class="toc-dot"></span>
            <span class="toc-tag">III</span>
            <span class="toc-text">Kế hoạch truyền thông</span>
          </a>
        </li>
        <li>
          <a href="#tai-tro" class="toc-dock-link" data-target="tai-tro">
            <span class="toc-dot"></span>
            <span class="toc-tag">IV</span>
            <span class="toc-text">Hồ sơ tài chính</span>
          </a>
        </li>
        <li>
          <a href="#quyen-loi" class="toc-dock-link" data-target="quyen-loi">
            <span class="toc-dot"></span>
            <span class="toc-tag">💎</span>
            <span class="toc-text">Quyền lợi danh vị</span>
          </a>
        </li>
        <li>
          <a href="#lien-he" class="toc-dock-link" data-target="lien-he">
            <span class="toc-dot"></span>
            <span class="toc-tag">📞</span>
            <span class="toc-text">Cảm ơn & Liên hệ</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>

  <!-- Nút mở nhanh Mục lục trên Mobile / Tablet -->
  <button class="mobile-toc-fab" id="mobile-toc-fab" type="button" aria-label="Mở mục lục điều hướng" title="Mục lục">
    <i class="fa-solid fa-bars-staggered"></i>
    <span>Mục lục</span>
  </button>

  <!-- ================================================================= -->
  <!-- PHẦN A — HERO (NỀN GRADIENT ĐỘNG AURORA, HẠT SAO & DOT-MATRIX)    -->
  <!-- ================================================================= -->
  <div class="page" id="top">
    <!-- Nền Động Aurora Gradient Mesh + Orbs + Vòng Quỹ Đạo + Hạt Sao Canvas -->
    <div class="bg" aria-hidden="true">
      <div class="bg-gradient-mesh"></div>
      
      <!-- Quầng sáng mờ (Blur Orbs) -->
      <div class="bg-orb bg-orb-purple"></div>
      <div class="bg-orb bg-orb-yellow"></div>
      <div class="bg-orb bg-orb-cyan"></div>

      <!-- Vòng tròn quỹ đạo mảnh mờ (Orbital rings) -->
      <div class="bg-orbital-ring ring-1"></div>
      <div class="bg-orbital-ring ring-2"></div>

      <!-- Ngôi sao 4 cánh lấp lánh (Sparkle Stars SVG) -->
      <svg class="sparkle-star spark-1" viewBox="0 0 24 24"><path d="M12 0L14 9.5L24 12L14 14.5L12 24L10 14.5L0 12L10 9.5Z" fill="#ffffff"/></svg>
      <svg class="sparkle-star spark-2" viewBox="0 0 24 24"><path d="M12 0L14 9.5L24 12L14 14.5L12 24L10 14.5L0 12L10 9.5Z" fill="#ffffff"/></svg>
      <svg class="sparkle-star spark-3" viewBox="0 0 24 24"><path d="M12 0L14 9.5L24 12L14 14.5L12 24L10 14.5L0 12L10 9.5Z" fill="#ffffff"/></svg>

      <!-- Canvas hạt sao nhấp nháy lấp lánh (Canvas Particle Layer) -->
      <canvas id="ambient-canvas" class="bg-canvas"></canvas>
    </div>

    <!-- 1. Header (Desktop & Mobile) -->
    <header class="header">
      <div class="header-inner">
        <!-- Logo Ban Văn Phòng ĐTN HVTC -->
        <a href="#top" class="logo-btn" aria-label="AOF - Hành Trang Sinh Viên 2026">
          <img src="assets/logo.png" alt="Logo Ban Văn phòng Đoàn Thanh niên HVTC" class="logo-img" />
        </a>

        <!-- Desktop Navigation Pill (Frosted Glassmorphism) -->
        <nav class="nav-pill" aria-label="Main Navigation">
          <ul class="nav-list">
            <li>
              <a href="#thu-ngo" class="nav-link">
                <span>Thư ngỏ</span>
                <span class="nav-indicator" aria-hidden="true"><i></i><i></i><i></i></span>
              </a>
            </li>
            <li>
              <a href="#gioi-thieu" class="nav-link">
                <span>Giới thiệu</span>
                <span class="nav-indicator" aria-hidden="true"><i></i><i></i><i></i></span>
              </a>
            </li>
            <li>
              <a href="#ke-hoach" class="nav-link">
                <span>Kế hoạch</span>
                <span class="nav-indicator" aria-hidden="true"><i></i><i></i><i></i></span>
              </a>
            </li>
            <li>
              <a href="#truyen-thong" class="nav-link">
                <span>Truyền thông</span>
                <span class="nav-indicator" aria-hidden="true"><i></i><i></i><i></i></span>
              </a>
            </li>
            <li>
              <a href="#giai-thuong" class="nav-link">
                <span>Giải thưởng</span>
                <span class="nav-indicator" aria-hidden="true"><i></i><i></i><i></i></span>
              </a>
            </li>
            <li>
              <a href="#tai-tro" class="nav-link">
                <span>Gói tài trợ</span>
                <span class="nav-indicator" aria-hidden="true"><i></i><i></i><i></i></span>
              </a>
            </li>
            <li>
              <a href="#quyen-loi" class="nav-link">
                <span>Quyền lợi</span>
                <span class="nav-indicator" aria-hidden="true"><i></i><i></i><i></i></span>
              </a>
            </li>
            <li>
              <a href="#lien-he" class="nav-link">
                <span>Liên hệ</span>
                <span class="nav-indicator" aria-hidden="true"><i></i><i></i><i></i></span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Header Action (Mobile Burger Toggle) -->
        <div class="header-action">
          <!-- Mobile Burger Toggle Button -->
          <button class="burger-btn" id="burger-toggle" type="button" aria-label="Mở menu điều hướng" aria-expanded="false" aria-controls="mobile-drawer">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Overlay & Sheet -->
    <div class="drawer-overlay" id="drawer-overlay" aria-hidden="true"></div>
    <aside class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      <div class="drawer-header">
        <div class="drawer-brand">
          <img src="assets/logo.png" alt="Logo BVP" class="drawer-logo" />
          <div class="drawer-brand-text">
            <strong>Hành Trang Sinh Viên</strong>
            <small>Ban Văn phòng ĐTN HVTC</small>
          </div>
        </div>
        <button class="drawer-close-btn" id="drawer-close" aria-label="Đóng menu">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <nav class="drawer-nav">
        <ul>
          <li><a href="#thu-ngo" class="drawer-link"><i class="fa-solid fa-envelope-open-text"></i> Thư ngỏ</a></li>
          <li><a href="#gioi-thieu" class="drawer-link"><i class="fa-solid fa-compass"></i> Giới thiệu</a></li>
          <li><a href="#thanh-tuu" class="drawer-link"><i class="fa-solid fa-chart-simple"></i> Thành tựu 2025</a></li>
          <li><a href="#ke-hoach" class="drawer-link"><i class="fa-solid fa-calendar-days"></i> Kế hoạch tổ chức</a></li>
          <li><a href="#truyen-thong" class="drawer-link"><i class="fa-solid fa-bullhorn"></i> Kế hoạch truyền thông</a></li>
          <li><a href="#giai-thuong" class="drawer-link"><i class="fa-solid fa-trophy"></i> Cơ cấu giải thưởng</a></li>
          <li><a href="#tai-tro" class="drawer-link highlight"><i class="fa-solid fa-gem"></i> Gói tài trợ</a></li>
          <li><a href="#quyen-loi" class="drawer-link"><i class="fa-solid fa-award"></i> Quyền lợi NTT</a></li>
          <li><a href="#lien-he" class="drawer-link"><i class="fa-solid fa-headset"></i> Liên hệ</a></li>
        </ul>
      </nav>
      <div class="drawer-footer">
        <button class="cta-primary-btn w-full" id="drawer-dossier-btn" type="button">
          <i class="fa-solid fa-file-pdf"></i> Tải hồ sơ tài trợ
        </button>
      </div>
    </aside>

    <!-- ================================================================= -->
    <!-- 2. Hero Center Content (Đúng Theo Ảnh Tham Chiếu Giao Diện Động)   -->
    <!-- ================================================================= -->
    <main class="hero-center">
      <!-- Trust row: Sponsor badges + overlap pill -->
      <div class="trust-row anim anim-fade-up">
        <div class="avatar-stack">
          <div class="avatar-ring" title="Petrolimex">
            <img src="assets/sponsors/petrolimex.png" alt="Petrolimex" />
          </div>
          <div class="avatar-ring" title="MobiFone">
            <img src="assets/sponsors/mobifone.png" alt="MobiFone" />
          </div>
          <div class="avatar-ring" title="AMACCAO Group">
            <img src="assets/sponsors/amaccao.png" alt="AMACCAO" />
          </div>
          <div class="avatar-ring" title="VNSteel Thăng Long">
            <img src="assets/sponsors/vnsteel.png" alt="VNSteel" />
          </div>
        </div>
        <div class="trust-pill">
          <span class="trust-pulse"></span>
          <span>Đồng hành cùng các Nhà Tài Trợ AOF</span>
        </div>
      </div>

      

      

      <!-- Headline: Serif Cao Cấp (Cormorant Garamond & Playfair Display) với Text Bloom Glow -->
      <h1 class="hero-headline anim anim-fade-up">
        <span class="headline-line headline-line-1">HÀNH TRANG</span>
        <span class="headline-line headline-line-2">SINH VIÊN 2026</span>
      </h1>

      <!-- Subhead -->
      <p class="hero-subhead anim anim-fade-up">
        Chương trình định hướng, đồng hành cùng hơn 8.500 tân sinh viên AOF trong những bước đi đầu tiên tại giảng đường đại học.
      </p>

      <!-- Primary CTA button (Gradient Purple-Blue with Glow) -->
      <div class="hero-cta-wrap anim anim-pulse">
        <a href="#tai-tro" class="cta-primary-btn">
          <span>Trở Thành Nhà Tài Trợ</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </main>

    <!-- 3. Stats Footer (4 Metrics with Frosted Glassmorphism & Glowing Numbers) -->
    <footer class="stats-footer">
      <div class="stats-grid">
        <!-- Stat 1 -->
        <div class="stat-item anim">
          <div class="stat-icon font-pixel" aria-hidden="true">#</div>
          <div class="stat-content">
            <div class="stat-value-wrap font-pixel">
              <span class="stat-num" data-target="8500" data-decimals="0">0</span>
              <span class="stat-suffix">+</span>
            </div>
            <div class="stat-label">Tân Sinh Viên Tham Gia</div>
          </div>
        </div>

        <!-- Stat 2 -->
        <div class="stat-item anim">
          <div class="stat-icon font-pixel" aria-hidden="true">*</div>
          <div class="stat-content">
            <div class="stat-value-wrap font-pixel">
              <span class="stat-num" data-target="4500" data-decimals="0">0</span>
              <span class="stat-suffix">+</span>
            </div>
            <div class="stat-label">Bài Dự Thi (Mùa 2025)</div>
          </div>
        </div>

        <!-- Stat 3 -->
        <div class="stat-item anim">
          <div class="stat-icon font-pixel" aria-hidden="true">%</div>
          <div class="stat-content">
            <div class="stat-value-wrap font-pixel">
              <span class="stat-num" data-target="20000" data-decimals="0">0</span>
              <span class="stat-suffix">+</span>
            </div>
            <div class="stat-label">Lượt Tiếp Cận Sự Kiện</div>
          </div>
        </div>

        <!-- Stat 4 -->
        <div class="stat-item anim">
          <div class="stat-icon font-pixel" aria-hidden="true">&lt;</div>
          <div class="stat-content">
            <div class="stat-value-wrap font-pixel">
              <span class="stat-num" data-target="13000" data-decimals="0">0</span>
              <span class="stat-suffix">+</span>
            </div>
            <div class="stat-label">Followers Fanpage</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
`;
};
