/**
 * AOF - HÀNH TRANG SINH VIÊN 2026
 * Pure Vanilla JavaScript (Theme Blue & Cyan)
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initStatsCounter();
  initAmbientCanvas();
  initNavigation();
  initFloatingToc();
  initMobileDrawer();
  initTabs();
  initDossierModal();
  initCopyButtons();
  initScrollAutoplayVideo();
});

/* ==========================================================================
   1. Scroll-Triggered Entrance Animations (.anim)
   ========================================================================== */
function initScrollAnimations() {
  const animElements = document.querySelectorAll('.anim');
  if (!animElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   2. Number Count-up Animation with easeOutCubic
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-num');
  if (!statNumbers.length) return;

  const easeOutCubic = t => (--t) * t * t + 1;

  function animateCount(el) {
    const target = parseFloat(el.getAttribute('data-target')) || 0;
    const decimals = parseInt(el.getAttribute('data-decimals'), 10) || 0;
    const duration = 2000;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const current = easedProgress * target;

      el.textContent = formatNumber(current, decimals);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = formatNumber(target, decimals);
      }
    }

    requestAnimationFrame(update);
  }

  function formatNumber(val, decimals) {
    if (decimals === 0) {
      return Math.floor(val).toLocaleString('vi-VN');
    }
    return val.toFixed(decimals).toLocaleString('vi-VN');
  }

  const statsFooter = document.querySelector('.stats-footer');
  if (statsFooter) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statNumbers.forEach(stat => animateCount(stat));
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(statsFooter);
  }
}

/* ==========================================================================
   3. Ambient Particle Canvas (Twinkling Starlight Particles)
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const isMobile = width < 768;
  const particleCount = isMobile ? 24 : 52;

  for (let i = 0; i < particleCount; i++) {
    const duration = 2.0 + Math.random() * 2.5;
    const speed = (Math.PI * 2) / (duration * 60);

    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.8, // 2-3px diameter
      baseAlpha: 0.55,
      twinkleSpeed: speed,
      twinklePhase: Math.random() * Math.PI * 2,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.dx;
      p.y += p.dy;
      p.twinklePhase += p.twinkleSpeed;
      
      const currentAlpha = p.baseAlpha + Math.sin(p.twinklePhase) * 0.35;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, ' + currentAlpha + ')';
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}

/* ==========================================================================
   4. Desktop Navigation & Active Link ScrollSpy
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], .page#top');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#' + currentId || (currentId === 'top' && href === '#thu-ngo')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   4.5. Floating Sticky TOC Dock (Thanh mục lục nổi xuyên suốt trang)
   ========================================================================== */
function initFloatingToc() {
  const floatingToc = document.getElementById('floating-toc');
  const toggleBtn = document.getElementById('toc-dock-toggle');
  const tocLinks = document.querySelectorAll('.toc-dock-link');
  const progressBar = document.getElementById('toc-progress-bar');
  const mobileFab = document.getElementById('mobile-toc-fab');
  const sections = document.querySelectorAll('section[id], .page#top, .sub-section-wrap#thanh-tuu');

  // Toggle Collapse / Expand
  if (toggleBtn && floatingToc) {
    toggleBtn.addEventListener('click', () => {
      floatingToc.classList.toggle('collapsed');
      const isCollapsed = floatingToc.classList.contains('collapsed');
      localStorage.setItem('aof_toc_collapsed', isCollapsed ? '1' : '0');
    });

    // Khôi phục trạng thái lưu trước đó nếu có
    if (localStorage.getItem('aof_toc_collapsed') === '1' && window.innerWidth > 1180) {
      floatingToc.classList.add('collapsed');
    }
  }

  // Mobile FAB click mở drawer
  if (mobileFab) {
    const burgerToggle = document.getElementById('burger-toggle');
    mobileFab.addEventListener('click', () => {
      if (burgerToggle) burgerToggle.click();
    });
  }

  // ScrollSpy & Progress Calculation
  function handleTocScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? Math.min(Math.max((scrollY / docHeight) * 100, 0), 100) : 0;

    if (progressBar) {
      progressBar.style.height = scrollPercent + '%';
    }

    let currentSectionId = 'top';
    const triggerPoint = scrollY + 240;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (triggerPoint >= top && triggerPoint < top + height) {
        currentSectionId = id;
      }
    });

    tocLinks.forEach(link => {
      const target = link.getAttribute('data-target');
      if (target === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', handleTocScroll, { passive: true });
  handleTocScroll();
}

/* ==========================================================================
   5. Mobile Drawer Menu
   ========================================================================== */
function initMobileDrawer() {
  const burgerToggle = document.getElementById('burger-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!burgerToggle || !mobileDrawer || !drawerOverlay) return;

  function openDrawer() {
    burgerToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    drawerOverlay.setAttribute('aria-hidden', 'false');
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    burgerToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    drawerOverlay.setAttribute('aria-hidden', 'true');
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  burgerToggle.addEventListener('click', () => {
    const isExpanded = burgerToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && mobileDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   6. Tab Controls (Options & Benefits Matrix)
   ========================================================================== */
function initTabs() {
  // Option Tabs (Phương án 1 & 2)
  const optionBtns = document.querySelectorAll('.tab-btn');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      optionBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
      const targetPane = document.getElementById(tabId + '-content');
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Benefit Stage Tabs (Giai đoạn 1, 2, 3)
  const stageBtns = document.querySelectorAll('.stage-tab-btn');
  stageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const stageId = btn.getAttribute('data-stage');
      stageBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      document.querySelectorAll('.stage-pane').forEach(pane => pane.classList.remove('active'));
      const targetStage = document.getElementById(stageId + '-content');
      if (targetStage) targetStage.classList.add('active');
    });
  });
}

/* ==========================================================================
   7. Dossier Download Modal
   ========================================================================== */
function initDossierModal() {
  const modal = document.getElementById('dossier-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const triggerBtns = [
    document.getElementById('header-dossier-btn'),
    document.getElementById('drawer-dossier-btn'),
    document.getElementById('footer-dossier-btn')
  ].filter(Boolean);

  if (!modal) return;

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggerBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  const confirmBtn = document.getElementById('confirm-download-btn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      showToast('Đang khởi tạo tải xuống bộ hồ sơ tài trợ...');
      setTimeout(closeModal, 600);
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   8. Copy to Clipboard with Toast Notification
   ========================================================================== */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Đã sao chép: ' + textToCopy);
      }).catch(() => {
        showToast('Đã sao chép: ' + textToCopy);
      });
    });
  });
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<i class="fa-solid fa-circle-check text-cyan"></i><span>' + message + '</span>';

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ==========================================================================
   9. Scroll-Triggered Autoplay Video with Sound Enabled
   ========================================================================== */
function initScrollAutoplayVideo() {
  const video = document.getElementById('champion-video');
  if (!video) return;

  let userExplicitlyMuted = false;
  let userManuallyPaused = false;

  const soundBtn = document.getElementById('videoSoundToggle');
  const prompt = document.getElementById('videoUnmutePrompt');

  function updateSoundBtn() {
    if (soundBtn) {
      if (video.muted || video.volume === 0) {
        soundBtn.classList.remove('unmuted');
        soundBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> <span>Bật âm thanh</span>';
      } else {
        soundBtn.classList.add('unmuted');
        soundBtn.innerHTML = '<i class="fa-solid fa-volume-high text-accent"></i> <span>Tắt âm thanh</span>';
      }
    }

    if (prompt) {
      if ((video.muted || video.volume === 0) && !video.paused) {
        prompt.style.display = 'inline-flex';
      } else {
        prompt.style.display = 'none';
      }
    }
  }

  function turnSoundOn() {
    video.muted = false;
    video.volume = 1;
    userExplicitlyMuted = false;
    updateSoundBtn();
  }

  function turnSoundOff() {
    video.muted = true;
    userExplicitlyMuted = true;
    updateSoundBtn();
  }

  // Toggle button click: direct and unambiguous!
  if (soundBtn) {
    soundBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (video.muted || video.volume === 0) {
        turnSoundOn();
        if (video.paused) {
          video.play().catch(() => {});
        }
      } else {
        turnSoundOff();
      }
    });

    video.addEventListener('volumechange', () => {
      updateSoundBtn();
    });

    updateSoundBtn();
  }

  if (prompt) {
    prompt.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      turnSoundOn();
    });
  }

  let isVideoPlaying = false;
  let hasInitializedTime = false;

  // Manual pause/play from controls
  video.addEventListener('playing', () => {
    isVideoPlaying = true;
  });

  video.addEventListener('pause', () => {
    if (isVideoPlaying) {
      userManuallyPaused = true;
    }
  });

  video.addEventListener('play', () => {
    userManuallyPaused = false;
    isVideoPlaying = true;
    if (!userExplicitlyMuted) {
      turnSoundOn();
    }
  });

  // Clicking the video ensures sound is unmuted
  video.addEventListener('click', () => {
    if (!userExplicitlyMuted) {
      turnSoundOn();
    }
  });

  // Any user interaction anywhere on the page guarantees audio turns ON
  const gestureEvents = ['pointerdown', 'mousedown', 'touchstart', 'click', 'keydown'];
  const onAnyUserGesture = () => {
    if (!userExplicitlyMuted) {
      turnSoundOn();
    }
  };
  gestureEvents.forEach(evt => window.addEventListener(evt, onAnyUserGesture, { capture: true, passive: true }));

  function startAutoplay() {
    if (userManuallyPaused) return;

    if (!hasInitializedTime && video.readyState >= 1 && video.currentTime < 0.8) {
      try {
        video.currentTime = 0.8;
      } catch (e) {}
      hasInitializedTime = true;
    }

    if (!userExplicitlyMuted) {
      video.muted = false;
      video.volume = 1;
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isVideoPlaying = true;
        updateSoundBtn();
      }).catch(() => {
        // If the browser blocks audio before first user gesture,
        // start playback so video rolls, and unmute on the very next user interaction
        video.muted = true;
        video.play().then(() => {
          isVideoPlaying = true;
        }).catch(() => {});
        updateSoundBtn();

        const forceUnmuteOnGesture = () => {
          if (!userExplicitlyMuted) {
            turnSoundOn();
          }
          gestureEvents.forEach(evt => window.removeEventListener(evt, forceUnmuteOnGesture, true));
        };
        gestureEvents.forEach(evt => window.addEventListener(evt, forceUnmuteOnGesture, { capture: true, once: true }));
      });
    }
  }

  // Trigger autoplay when scrolling into view (does not pause when scrolling away)
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !userManuallyPaused) {
        startAutoplay();
      }
    });
  }, {
    root: null,
    threshold: 0.15
  });

  videoObserver.observe(video);

  // Passive scroll fallback
  let scrollThrottle = null;
  window.addEventListener('scroll', () => {
    if (scrollThrottle || userManuallyPaused) return;
    scrollThrottle = setTimeout(() => {
      scrollThrottle = null;
      if (userManuallyPaused) return;
      const rect = video.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const inView = rect.top < vh * 0.85 && rect.bottom > vh * 0.15;
      if (inView && video.paused) {
        startAutoplay();
      }
    }, 100);
  }, { passive: true });
}
