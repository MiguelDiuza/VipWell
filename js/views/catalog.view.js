function renderCatalog() {
    mainContent.innerHTML = `
    <section class="bg-slate-900 text-white py-16">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold mb-4">Catálogo de Maquinaria</h1>
            <p class="text-slate-400 max-w-2xl mx-auto">Explore nuestras soluciones técnicas. Utilice los filtros para encontrar la máquina exacta para su línea de producción.</p>
        </div>
    </section>

    <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
            <!-- Filters -->
            <div class="flex flex-wrap justify-center gap-4 mb-12">
                <button onclick="filterCatalog('all')" class="filter-btn px-6 py-2 rounded-full border border-slate-300 hover:border-orange-500 hover:text-orange-500 transition active-filter text-sm font-bold bg-slate-100" data-filter="all">TODOS</button>
                <button onclick="filterCatalog('inyeccion')" class="filter-btn px-6 py-2 rounded-full border border-slate-300 hover:border-orange-500 hover:text-orange-500 transition text-sm font-bold" data-filter="inyeccion">INYECCIÓN</button>
                <button onclick="filterCatalog('extrusion')" class="filter-btn px-6 py-2 rounded-full border border-slate-300 hover:border-orange-500 hover:text-orange-500 transition text-sm font-bold" data-filter="extrusion">EXTRUSIÓN</button>
                <button onclick="filterCatalog('robotica')" class="filter-btn px-6 py-2 rounded-full border border-slate-300 hover:border-orange-500 hover:text-orange-500 transition text-sm font-bold" data-filter="robotica">ROBÓTICA</button>
            </div>

            <!-- Grid -->
            <div id="catalog-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- JS Generated Items -->
            </div>
            
            <div class="mt-16 text-center bg-slate-50 p-8 rounded-xl border border-dashed border-slate-300">
                <h3 class="text-xl font-bold text-slate-800 mb-2">¿Busca maquinaria fuera de catálogo?</h3>
                <p class="text-slate-500 mb-6">Gestionamos la búsqueda e importación de máquinas específicas desde cualquier país.</p>
                <button onclick="navigateTo('services')" class="bg-slate-800 text-white px-6 py-3 rounded hover:bg-slate-700 transition">Ver Servicios de Sourcing</button>
            </div>
        </div>
    </section>
    
    ${renderModalComponent()}
    `;

    filterCatalog('all');
}

// Catalog Logic
function filterCatalog(category) {
    if (typeof currentState !== 'undefined') {
        currentState.productFilter = category;
    }

    // Update buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('bg-slate-800', 'text-white', 'border-transparent');
            btn.classList.remove('bg-slate-100', 'text-slate-600');
        } else {
            btn.classList.remove('bg-slate-800', 'text-white', 'border-transparent');
            btn.classList.add('bg-slate-100', 'text-slate-600');
        }
    });

    const grid = document.getElementById('catalog-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const products = (typeof appData !== 'undefined') ? appData.products : [];

    const filtered = category === 'all'
        ? products
        : products.filter(p => p.category === category);

    // Use the component function to generate HTML
    grid.innerHTML = filtered.map(product => renderProductCardComponent(product)).join('');
}
