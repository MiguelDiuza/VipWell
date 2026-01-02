function renderHeroComponent() {
    return `
    <!-- HERO SECTION (Updated) -->
    <section class="relative bg-slate-900 text-white min-h-screen flex items-center overflow-hidden">
        <!-- Parallax Background -->
        <div class="parallax-layer absolute inset-0 z-0 scale-110" data-speed="0.2">
            <img src="recursos/bg.png" alt="Background" class="w-full h-full object-cover opacity-60">
        </div>

        <!-- Parallax Machine (Foreground) -->
        <!-- *** USER: ADJUST POSITION HERE *** 
             - 'right': Distance from right edge (e.g. -10% moves it further right)
             - 'top': Distance from top edge 
             - 'width': Size relative to screen width 
        -->
        <div class="parallax-layer absolute z-10 hidden lg:block pointer-events-none" 
             data-speed="-0.1" 
             style="right: 5%; top: 15%; width: 55%; transform: translateX(0);">
             <img src="recursos/machine.png" alt="Machine" class="w-full h-full object-contain drop-shadow-2xl brightness-110">
        </div>
        
        <!-- Empresa Logo (SVG) placed behind content with low opacity (moved to right) -->
        <div class="parallax-layer absolute hidden lg:block pointer-events-none" data-speed="0.05" style="right: 14%; top: 15%; z-index:8;">
            <img src="recursos/logo.svg" alt="Empresa Logo" class="hero-bg-logo">
        </div>
        <div class="container mx-auto px-4 z-20 relative grid grid-cols-1 lg:grid-cols-2 items-center h-full">
            <!-- Left Content -->
            <div class="text-left pt-20 pb-20 lg:pt-0 lg:pl-8">
                <div class="inline-block px-3 py-1 mb-6 border border-orange-500 rounded-full text-orange-400 text-xs tracking-widest uppercase font-bold bg-slate-900/80 backdrop-blur-sm shadow-lg">
                    Hub Logístico en Europa — Alcance Global
                </div>
                <h1 class="text-5xl md:text-7xl font-black mb-8 leading-tight drop-shadow-lg">
                    Soluciones Integrales en <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Maquinaria y Plástico</span>
                </h1>
                <div class="pl-6 border-l-4 border-orange-500 mb-10 bg-slate-900/40 p-4 rounded-r-lg max-w-xl backdrop-blur-sm">
                    <p class="text-lg md:text-xl text-slate-100 font-medium leading-relaxed">
                        20 años gestionando venta, importación de maquinaria y servicios de producción desde nuestra planta en Europa.
                    </p>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4">
                    <button onclick="navigateTo('catalog')" class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded font-bold text-lg transition-all shadow-xl hover:shadow-orange-500/30 flex items-center justify-center gap-3">
                        <i class="fas fa-search"></i> Ver Maquinaria
                    </button>
                    <button onclick="navigateTo('services')" class="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center gap-3">
                        Servicios y Gestión <i class="fas fa-arrow-right text-sm"></i>
                    </button>
                </div>
            </div>
            <!-- Right Space (Reserved for Image) -->
            <div></div> 
        </div>
    </section>
    `;
}

// Parallax Initialization
let parallaxInstance = null;
function initParallax() {
    // Remove previous listener if exists (simple cleanup)
    if (parallaxInstance) {
        window.removeEventListener('scroll', parallaxInstance);
    }

    parallaxInstance = function () {
        const scrolled = window.scrollY;
        const layers = document.querySelectorAll('.parallax-layer');

        layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed'));
            layer.style.transform = `translateY(${scrolled * speed}px)`;
        });
    };

    window.addEventListener('scroll', parallaxInstance);
}
