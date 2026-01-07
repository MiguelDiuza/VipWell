function renderServices() {
    mainContent.innerHTML = `
    <section class="bg-slate-900 text-white pt-32 pb-16">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold mb-4">Gestión Integral y Servicios</h1>
            <p class="text-slate-400 max-w-2xl mx-auto">
                En VIPWELL, somos su departamento externo de ingeniería y logística. No solo vendemos; localizamos, importamos y producimos.
            </p>
        </div>
    </section>

    <!-- 3 PILLARS OF SERVICE -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <!-- Pillar 1: Sourcing -->
                <div class="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-orange-500 transition group">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:bg-orange-100 transition">
                        <i class="fas fa-globe-americas text-3xl text-slate-700 group-hover:text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-800 mb-4">Gestión de Importación</h3>
                    <p class="text-slate-600 mb-4">
                        No nos limitamos a Europa. Si la máquina que necesita está en Asia o América, nosotros la localizamos, negociamos y gestionamos su <strong>importación y transporte</strong> hasta su puerta.
                    </p>
                    <ul class="text-sm text-slate-500 space-y-2">
                        <li><i class="fas fa-check text-orange-500 mr-2"></i> Trámites Aduaneros</li>
                        <li><i class="fas fa-check text-orange-500 mr-2"></i> Logística Internacional</li>
                        <li><i class="fas fa-check text-orange-500 mr-2"></i> Inspección Técnica en Origen</li>
                    </ul>
                </div>

                <!-- Pillar 2: Maquila Services -->
                <div class="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-orange-500 transition group">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:bg-orange-100 transition">
                        <i class="fas fa-industry text-3xl text-slate-700 group-hover:text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-800 mb-4">Servicio de Maquila</h3>
                    <p class="text-slate-600 mb-4">
                        ¿Necesita producción inmediata sin invertir en activos? Ponemos a su disposición nuestras <strong>máquinas funcionales en Europa</strong> para inyectar o extruir sus productos.
                    </p>
                    <ul class="text-sm text-slate-500 space-y-2">
                        <li><i class="fas fa-check text-orange-500 mr-2"></i> Inyección de Plásticos</li>
                        <li><i class="fas fa-check text-orange-500 mr-2"></i> Moldes Personalizados</li>
                        <li><i class="fas fa-check text-orange-500 mr-2"></i> Entrega de Producto Terminado</li>
                    </ul>
                </div>

                <!-- Pillar 3: Engineering -->
                <div class="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-orange-500 transition group">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:bg-orange-100 transition">
                        <i class="fas fa-drafting-compass text-3xl text-slate-700 group-hover:text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-800 mb-4">Diseño a Medida</h3>
                    <p class="text-slate-600 mb-4">
                        Nuestro equipo de ingeniería diseña maquinaria con especificaciones únicas. Adaptamos software, dimensiones y potencia a sus requerimientos.
                    </p>
                    <ul class="text-sm text-slate-500 space-y-2">
                        <li><i class="fas fa-check text-orange-500 mr-2"></i> Automatización Robótica</li>
                        <li><i class="fas fa-check text-orange-500 mr-2"></i> Software PLC Custom</li>
                    </ul>
                </div>
            </div>

            ${renderEstimatorComponent()}
        </div>
    </section>
    `;
    setTimeout(updateEstimator, 100); // Init
}
