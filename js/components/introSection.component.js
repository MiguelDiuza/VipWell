function renderIntroSectionComponent() {
    return `
    <!-- INTRO SECTION -->
    <section class="py-12 bg-slate-50">
        <div class="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl font-bold text-slate-900 mb-6">Más que vendedores, somos sus socios operativos.</h2>
                <p class="text-slate-600 mb-6 leading-relaxed">
                    En <span class="font-bold text-slate-800">VIPWELL EUROPE</span> entendemos que cada proyecto es diferente. A veces necesita la máquina, a veces necesita que la gestionemos desde otro continente, y a veces solo necesita el producto final.
                </p>
                <p class="text-slate-600 mb-8 leading-relaxed">
                    No nos limitamos a nuestro stock. <strong>Gestionamos la importación y exportación</strong> de maquinaria desde cualquier parte del mundo hacia su planta, y ofrecemos <strong>servicios de producción de plásticos</strong> en nuestras propias instalaciones en Europa.
                </p>
                <button onclick="navigateTo('services')" class="text-orange-600 font-bold hover:text-orange-700 flex items-center">
                    Descubra nuestros servicios de gestión <i class="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
            <div class="bg-slate-200 rounded-lg h-80 overflow-hidden relative shadow-xl group">
                <!-- Image Placeholder: Logistics/Factory -->
                 <img src="recursos/per.jpeg" alt="Logistica" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                 <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                    <p class="text-white font-medium"><i class="fas fa-shipping-fast text-orange-500 mr-2"></i> Gestión Global desde Madrid</p>
                 </div>
            </div>
        </div>
    </section>
    `;
}
