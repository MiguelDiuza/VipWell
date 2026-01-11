function renderModalComponent() {
    return `
    <!-- MODAL CONTAINER (Hidden by default) -->
    <div id="product-modal" class="fixed inset-0 z-[80] hidden">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeModal()"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4 pt-20 pointer-events-none">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[85vh] overflow-y-auto pointer-events-auto flex flex-col md:flex-row relative animate-modal">
                <button onclick="closeModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-800 z-10"><i class="fas fa-times text-2xl"></i></button>
                <!-- Content injected by JS -->
                <div id="modal-content" class="w-full flex flex-col md:flex-row"></div>
            </div>
        </div>
    </div>
    `;
}

// Modal Logic
function openProductModal(pid) {
    const product = appData.products.find(p => p.id === pid);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const content = document.getElementById('modal-content');
    if (!modal || !content) return;

    // Generate Modal Content
    content.innerHTML = `
        <!-- Left: Media -->
                <div class="w-full md:w-1/2 bg-slate-900 p-6 text-white flex flex-col">
                    <h2 class="text-2xl font-bold mb-4 md:hidden">${product.name}</h2> <!-- Mobile Title -->
                    
                    <!-- Video Section -->
                    <div class="w-full aspect-video bg-black rounded-lg overflow-hidden mb-6 shadow-lg border border-slate-700 relative">
                        ${product.video ? `
                            <video 
                                class="w-full h-full object-cover" 
                                controls 
                                preload="none"
                                poster="${product.image}"
                            >
                                <source src="${product.video}" type="video/mp4">
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        ` : `
                            <img src="${product.image}" class="w-full h-full object-cover" alt="${product.name}">
                        `}
                    </div>

                    <!-- Toggle Section Header -->
                    <div class="flex items-center justify-between mb-3">
                        <h4 id="toggle-section-title" class="text-sm uppercase tracking-widest text-slate-400">Vista de Máquina</h4>
                        <button 
                            id="toggle-image-btn" 
                            onclick="toggleProductImage('${product.id}')"
                            class="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-full transition flex items-center gap-2"
                        >
                            <i class="fas fa-exchange-alt"></i>
                            <span id="toggle-btn-text">Ver Análisis</span>
                        </button>
                    </div>

                    <!-- Machine Image View (visible by default) -->
                    <div id="machine-image-view" class="w-full">
                        <div class="w-full aspect-video bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700">
                            <img 
                                src="${product.image}" 
                                class="w-full h-full object-cover"
                                alt="Vista de la máquina"
                            >
                        </div>
                    </div>

                    <!-- Performance Analysis View (hidden by default) -->
                    <div id="performance-chart-view" class="hidden w-full">
                        <div class="chart-container bg-slate-800 rounded-lg p-4 border border-slate-700" style="height: 350px;">
                            <canvas id="productRadarChart"></canvas>
                        </div>
                    </div>
                </div>

                <!-- Right: Info -->
    <div class="w-full md:w-1/2 p-8 bg-white overflow-y-auto">
        <h2 class="text-3xl font-bold text-slate-900 mb-1 hidden md:block">${product.name}</h2>
        <p class="text-orange-600 font-medium mb-2 uppercase text-sm tracking-wide">${product.tagline}</p>
        
        <!-- Model Info Grid -->
        <div class="grid grid-cols-2 gap-3 mb-6 text-xs">
            <div class="bg-slate-50 px-3 py-2 rounded border border-slate-200">
                <span class="text-slate-400 block">Modelo</span>
                <span class="font-bold text-slate-800">${product.model}</span>
            </div>
            <div class="bg-slate-50 px-3 py-2 rounded border border-slate-200">
                <span class="text-slate-400 block">Año</span>
                <span class="font-bold text-slate-800">${product.year}</span>
            </div>
        </div>

        <p class="text-slate-600 mb-8 leading-relaxed">${product.desc}</p>

        <!-- Tabs/Specs -->
        <div class="bg-slate-50 rounded-lg p-6 border border-slate-100 mb-8">
            <h4 class="font-bold text-slate-900 mb-4"><i class="fas fa-cogs mr-2 text-slate-400"></i>Especificaciones Técnicas</h4>
            <div class="grid grid-cols-2 gap-4 text-sm">
                ${Object.entries(product.specs).map(([key, value]) => `
                    <div class="border-b border-slate-200 pb-2">
                        <span class="block text-slate-400 text-xs uppercase">${formatSpecLabel(key)}</span>
                        <span class="font-bold text-slate-800">${value}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="flex flex-col space-y-3">
            <button class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded shadow transition" onclick="closeModal(); navigateTo('contact', '${product.id}')">
                SOLICITAR COTIZACIÓN
            </button>
        </div>
    </div>
    `;

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    // Reset toggle state
    isShowingPerformance = false;

    // Init Chart inside Modal (Calls function from charts.js which will be exported)
    if (window.initProductRadarChart) {
        window.initProductRadarChart(product);
    }
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// Toggle between machine image and performance image
let isShowingPerformance = false;
function toggleProductImage(productId) {
    const product = appData.products.find(p => p.id === productId);
    if (!product) return;

    const machineView = document.getElementById('machine-image-view');
    const performanceView = document.getElementById('performance-chart-view');
    const buttonText = document.getElementById('toggle-btn-text');
    const sectionTitle = document.getElementById('toggle-section-title');

    if (!machineView || !performanceView || !buttonText || !sectionTitle) return;

    isShowingPerformance = !isShowingPerformance;

    if (isShowingPerformance) {
        // Show performance analysis
        machineView.classList.add('hidden');
        performanceView.classList.remove('hidden');
        buttonText.textContent = 'Ver Máquina';
        sectionTitle.textContent = 'Análisis de Rendimiento';
    } else {
        // Show machine image
        machineView.classList.remove('hidden');
        performanceView.classList.add('hidden');
        buttonText.textContent = 'Ver Análisis';
        sectionTitle.textContent = 'Vista de Máquina';
    }
}

// Helper function to format spec labels
function formatSpecLabel(key) {
    const labels = {
        tonnage: 'Tonelaje / Carga',
        cycleTime: 'Ciclo Seco',
        power: 'Potencia Motor',
        weight: 'Peso Máquina',
        shotVolume: 'Volumen de Inyección',
        screwDiameter: 'Diámetro de Husillo',
        outputRate: 'Capacidad de Producción',
        pipeRange: 'Rango de Tubería',
        reach: 'Alcance',
        repeatability: 'Repetibilidad',
        profileWidth: 'Ancho de Perfil'
    };
    return labels[key] || key;
}
