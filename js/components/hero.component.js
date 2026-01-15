function renderHeroComponent() {
  // Declare parallaxInstance
  var parallaxInstance;
  return `
    <!-- HERO SECTION (Nuevo Diseño) -->
    <section class="relative bg-slate-900 text-white flex items-center overflow-hidden hero-section-height">
      <!-- Background Image -->
      <div class="parallax-layer absolute inset-0 z-0" data-speed="0.05">
        <img src="recursos/bg.jpeg" alt="Background" class="w-full h-full object-cover hero-bg-position">
      </div>

      <!-- Shadow Overlay (creates contrast for buttons over machines) -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/60 z-0"></div>

      <!-- Logo Background (Behind machines, low opacity) -->
      <div class="hero-logo-bg pointer-events-none">
          <img src="recursos/logo.svg" alt="VipWell Logo Background" class="w-full h-auto">
      </div>

      <!-- Container Principal -->
      <div class="container mx-auto px-4 z-10 relative h-full flex flex-col justify-between hero-padding-top pb-0">
        
        <!-- Top Section: Glass Cards and Titles -->
        <div class="w-full flex flex-col items-center relative z-20">
          
          <!-- Wrapper for Cards and Badge -->
          <div class="w-full flex flex-col md:flex-row justify-between items-start mb-4">
            
            <!-- Left Card Group -->
            <div class="hidden lg:flex flex-col items-start">
              <div class="hero-glass-card">
                <h4>+20 AÑOS</h4>
                <p>gestionando venta, importación de maquinaria y servicios de producción desde nuestra planta en Europa.</p>
                <div class="seal-icon">
                  <i class="fas fa-award"></i>
                </div>
              </div>
              
              <!-- Slogan below left card -->
              <div class="hero-slogan mt-4 ml-2">
                <i class="fas fa-check-circle"></i>
                Liderazgo Industrial Europeo
              </div>
            </div>

            <!-- Central Titles -->
            <div class="flex-1 text-center mt-4">
              <!-- Top Badge (Solo texto blanco) -->
              <div class="hero-badge text-white text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold mb-2 opacity-80">
                SEDE EN EUROPA - ALCANCE GLOBAL
              </div>
              <!-- Main Title -->
              <h1 class="text-5xl md:text-7xl font-black mb-1 leading-tight drop-shadow-2xl hero-title">
                VIPWELL EUROPE
              </h1>
              <h2 class="hero-subtitle text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Maquinaria y Plástico
              </h2>
            </div>

            <!-- Right Info Group -->
            <div class="hidden lg:flex flex-col items-end text-right">
              <p class="text-xs text-white/90 font-medium max-w-[200px] mb-4 leading-relaxed">
                Gestión global de equipos y servicios de inyección extrusión y más desde Europa
              </p>
              <div class="hero-glass-card">
                <p>"Equipamos su planta con tecnología global o producimos por usted en Europa: La flexibilidad que su industria del plástico necesita."</p>
              </div>
              
              <!-- Seals -->
              <div class="hero-stamp-block">
                <div class="hero-stamp-icon"><i class="fas fa-certificate"></i></div>
                <div class="hero-stamp-icon"><i class="fas fa-globe-europe"></i></div>
              </div>
            </div>

          </div>
        </div>

        <!-- Middle Section: Machines (Wider & Huge) -->
        <!-- Layering: Machines (z-10) -> Shadow (z-20) -> Buttons (z-30) -->
        <div class="relative hero-content-constraint grid grid-cols-1 md:grid-cols-3 gap-12 mt-auto items-end z-10">
            <!-- Left Machine (L) -->
            <div class="flex items-end justify-center parallax-layer" data-speed="-0.08">
              <img src="recursos/L.png" alt="Máquina Izquierda" class="w-full h-auto object-contain drop-shadow-2xl hero-machine-left">
            </div>
            
            <!-- Center Machine (C) -->
            <div class="flex items-end justify-center parallax-layer z-20" data-speed="-0.02">
              <img src="recursos/C.png" alt="Máquina Centro" class="w-full h-auto object-contain drop-shadow-2xl relative z-20 hero-machine-center">
            </div>
            
            <!-- Right Machine (R) -->
            <div class="flex items-end justify-center parallax-layer" data-speed="-0.12">
              <img src="recursos/R.png" alt="Máquina Derecha" class="w-full h-auto object-contain drop-shadow-2xl hero-machine-right">
            </div>
        </div>

        <!-- Strong Bottom Shadow Gradient (Full screen width, positioned inside relative container to manage Z-index) -->
        <!-- Z-Index Strategy: Machines (z-10) -> Shadow (z-20) -> Buttons (z-30) -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

        <!-- Bottom Section: Buttons (Overlapping, Higher Z-Index) -->
        <div class="w-full flex justify-center relative z-30 -mt-48 md:-mt-56 mb-8">
          <div class="flex flex-col sm:flex-row gap-6">
            <button onclick="navigateTo('catalog')" 
                    class="hero-btn bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all shadow-2xl hover:shadow-orange-500/50 hover:scale-105 flex items-center justify-center gap-3">
              <i class="fas fa-search"></i>
              Ver Maquinaria
            </button>
            <button onclick="navigateTo('services')" 
                    class="hero-btn bg-slate-800/90 hover:bg-slate-700/90 border border-slate-500/50 text-white font-bold transition-all backdrop-blur-md hover:scale-105 flex items-center justify-center gap-3">
              Servicios y Gestión
              <i class="fas fa-arrow-right text-sm"></i>
            </button>
          </div>
        </div>

      </div>

      <!-- (Removed External Shadow div) -->

    </section>
  `;
}

// Parallax Initialization
function initParallax() {
  if (window.innerWidth < 768) return; // ⛔ Mobile: NO parallax

  if (parallaxInstance) {
    window.removeEventListener('scroll', parallaxInstance);
  }

  parallaxInstance = function () {
    const scrolled = window.scrollY;
    document.querySelectorAll('.parallax-layer').forEach(layer => {
      const speed = parseFloat(layer.dataset.speed) || 0;
      layer.style.transform = `translateY(${scrolled * speed}px)`;
    });
  };

  window.addEventListener('scroll', parallaxInstance);
}

// Entry Animations for Hero
function initHeroAnimations() {
  if (typeof gsap === 'undefined') return;

  const tl = gsap.timeline();

  // Initial state (hidden)
  gsap.set('.hero-title', { y: 30, opacity: 0 });
  gsap.set('.hero-glass-card', { x: -20, opacity: 0 });
  gsap.set(['.hero-badge', '.hero-subtitle', '.hero-slogan', '.hero-stamp-block'], { opacity: 0 });

  // Animation sequence
  tl.to('.hero-title', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "back.out(1.7)"
  })
    .to(['.hero-badge', '.hero-subtitle'], {
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.8")
    .to('.hero-glass-card', {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.6")
    .to(['.hero-slogan', '.hero-stamp-block'], {
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.4");
}

window.initHeroAnimations = initHeroAnimations;