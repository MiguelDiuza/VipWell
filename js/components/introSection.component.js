function renderIntroSectionComponent() {
    return `
    <!-- INTRO SECTION -->
    <section class="py-16 bg-slate-50">
        <div class="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

            <!-- Text Content -->
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Más que vendedores,<br>
                    somos sus socios operativos.
                </h2>

                <p class="text-slate-600 mb-5 leading-relaxed">
                    En <span class="font-bold text-slate-800">VIPWELL EUROPE</span> entendemos que cada proyecto industrial es único.
                    A veces necesita la máquina adecuada; otras, una gestión completa desde otro continente.
                </p>

                <p class="text-slate-600 mb-8 leading-relaxed">
                    No nos limitamos a nuestro stock.
                    <strong>Gestionamos importación y exportación de maquinaria</strong> a nivel global
                    y ofrecemos <strong>servicios de producción de plásticos</strong> en nuestras propias
                    instalaciones en Europa.
                </p>

                <button 
                    onclick="navigateTo('services')" 
                    class="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition"
                >
                    Descubra nuestros servicios de gestión
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>

            <!-- Image Content -->
            <div class="bg-slate-200 rounded-xl h-80 overflow-hidden relative shadow-xl group">
                <img 
                    src="recursos/per.jpeg" 
                    alt="Logística y gestión industrial"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                    <p class="text-white font-medium flex items-center">
                        <i class="fas fa-shipping-fast text-orange-500 mr-2"></i>
                        Gestión Global desde Madrid
                    </p>
                </div>
            </div>

        </div>
    </section>
    `;
}
