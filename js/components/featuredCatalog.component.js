function renderFeaturedCatalogComponent() {
    const featuredProducts = appData.products.slice(0, 5);

    const cardsHTML = featuredProducts.map(product => `
        <div class="min-w-[280px] md:min-w-[350px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 overflow-hidden group">
            
            <div class="h-48 overflow-hidden relative">
                <img 
                    src="${product.image}" 
                    alt="${product.name}" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div class="p-6 text-left">
                <h3 class="text-xl font-bold text-slate-800 mb-2">
                    ${product.name}
                </h3>

                <p class="text-slate-500 text-sm mb-4">
                    ${product.tagline}
                </p>

                <button 
                    onclick="navigateTo('catalog', '${product.id}')"
                    class="text-orange-600 font-bold text-sm hover:underline"
                >
                    Ver Ficha Técnica
                </button>
            </div>
        </div>
    `).join('');

    return `
    <!-- FEATURED CATALOG PREVIEW -->
    <section class="py-12 bg-white">

        <div class="container mx-auto px-4 text-center mb-8">
            <h2 class="text-3xl font-bold text-slate-900 mb-4">
                Maquinaria de Alto Rendimiento
            </h2>
            <p class="text-slate-500 max-w-2xl mx-auto">
                Venta directa y gestión de importación bajo pedido.
            </p>
        </div>

        <div class="container mx-auto px-4 relative group">

            <!-- Carousel Buttons -->
            <button 
                onclick="scrollCarousel(-1)" 
                class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-slate-800 ml-2 md:-ml-4 transition-all opacity-0 group-hover:opacity-100 border border-slate-200"
            >
                <i class="fas fa-chevron-left text-xl"></i>
            </button>

            <button 
                onclick="scrollCarousel(1)" 
                class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-slate-800 mr-2 md:-mr-4 transition-all opacity-0 group-hover:opacity-100 border border-slate-200"
            >
                <i class="fas fa-chevron-right text-xl"></i>
            </button>

            <!-- Carousel -->
            <div 
                id="home-carousel" 
                class="flex overflow-x-auto gap-8 no-scrollbar scroll-smooth px-2 py-4"
            >
                ${cardsHTML}
            </div>

            <!-- View All -->
            <div class="mt-8 text-center">
                <button 
                    onclick="navigateTo('catalog')" 
                    class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-bold transition shadow-lg"
                >
                    VER TODO EL CATÁLOGO <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>

        <!-- SOURCING CTA -->
        <div class="container mx-auto px-4 mt-12">
            <div class="bg-slate-50 p-10 rounded-2xl border border-dashed border-slate-300 text-center">
                <div class="max-w-2xl mx-auto">
                    <span class="bg-orange-100 text-orange-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-tighter mb-4 inline-block">
                        Sourcing Global
                    </span>
                    <h3 class="text-2xl font-bold text-slate-800 mb-4">
                        ¿Busca maquinaria fuera de catálogo?
                    </h3>
                    <p class="text-slate-500 mb-8 leading-relaxed">
                        Gestionamos la búsqueda e importación de máquinas específicas desde cualquier país.
                    </p>
                    <button 
                        onclick="navigateTo('services')" 
                        class="bg-slate-800 text-white px-8 py-3 rounded hover:bg-slate-700 transition font-bold shadow-md"
                    >
                        Servicios de Sourcing & Importación
                    </button>
                </div>
            </div>
        </div>

    </section>
    `;
}
