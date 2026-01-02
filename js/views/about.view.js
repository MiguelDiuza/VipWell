function renderAbout() {
    mainContent.innerHTML = `
    <section class="bg-white py-16">
        <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-12">
                <span class="text-orange-500 font-bold tracking-widest text-sm">NUESTRA HISTORIA</span>
                <h1 class="text-4xl font-bold text-slate-900 mt-2">20 Años Conectando la Industria</h1>
            </div>

            <div class="prose prose-lg text-slate-600 mx-auto">
                <p>
                    Fundada en el corazón industrial de Europa, <strong>VIPWELL EUROPE</strong> nació con una visión clara: ser el puente entre la mejor tecnología global y las plantas de producción locales. No solo fabricamos; somos expertos en <strong>gestión de maquinaria</strong>.
                </p>
                <p>
                    Nuestra sede en Madrid actúa como un Hub estratégico. Desde aquí, coordinamos la fabricación, pero también la <strong>búsqueda e importación</strong> de equipos de otros continentes, asegurando que nuestros clientes obtengan la mejor relación calidad-precio sin lidiar con la logística compleja.
                </p>
                <p>
                    Además, somos productores. Nuestras instalaciones cuentan con maquinaria activa ofreciendo <strong>servicios de maquila</strong> para clientes que prefieren externalizar su producción de plásticos.
                </p>
            </div>

            <!-- Global Impact Chart Container -->
            <div class="mt-16 mb-12">
                <h3 class="text-center text-xl font-bold mb-6">Operaciones Globales (2024)</h3>
                <div class="chart-container">
                    <canvas id="globalChart"></canvas>
                </div>
                <p class="text-center text-sm text-slate-400 mt-2">Distribución de nuestras actividades por tipo</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mt-16">
                <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 class="font-bold text-slate-900 text-lg mb-2">Gestión Sin Fronteras</h4>
                    <p class="text-sm">Si la máquina existe, la traemos. Si no existe, la fabricamos. Nos encargamos del transporte internacional y la nacionalización.</p>
                </div>
                <div class="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 class="font-bold text-slate-900 text-lg mb-2">Respaldo Productivo</h4>
                    <p class="text-sm">No somos solo intermediarios. Somos industriales. Tenemos máquinas funcionando y produciendo todos los días en nuestra sede.</p>
                </div>
            </div>
        </div>
    </section>
    `;
}
