function renderTrustBarComponent() {
    return `
    <!-- TRUST BAR -->
    <section class="bg-white py-6 border-b border-gray-100 relative z-20 shadow-lg">
        <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div class="p-4 group hover:-translate-y-1 transition duration-300">
                <i class="fas fa-map-marked-alt text-4xl text-slate-700 mb-3 group-hover:text-orange-500 transition"></i>
                <h3 class="font-bold text-slate-900">Hub Europeo</h3>
                <p class="text-sm text-slate-500">Gestión Centralizada</p>
            </div>
            <div class="p-4 group hover:-translate-y-1 transition duration-300">
                <i class="fas fa-dolly text-4xl text-slate-700 mb-3 group-hover:text-orange-500 transition"></i>
                <h3 class="font-bold text-slate-900">Logística Global</h3>
                <p class="text-sm text-slate-500">Traemos su máquina</p>
            </div>
            <div class="p-4 group hover:-translate-y-1 transition duration-300">
                <i class="fas fa-industry text-4xl text-slate-700 mb-3 group-hover:text-orange-500 transition"></i>
                <h3 class="font-bold text-slate-900">Maquila Propia</h3>
                <p class="text-sm text-slate-500">Producimos por usted</p>
            </div>
            <div class="p-4 group hover:-translate-y-1 transition duration-300">
                <i class="fas fa-history text-4xl text-slate-700 mb-3 group-hover:text-orange-500 transition"></i>
                <h3 class="font-bold text-slate-900">+20 Años</h3>
                <p class="text-sm text-slate-500">Experiencia Real</p>
            </div>
        </div>
    </section>
    `;
}
