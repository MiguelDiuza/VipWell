function renderModalComponent() {
    return `
    <!-- MODAL CONTAINER (Hidden by default) -->
    <div id="product-modal" class="fixed inset-0 z-[60] hidden">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeModal()"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto pointer-events-auto flex flex-col md:flex-row relative animate-modal">
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
                    <h2 class="text-2xl font-bold mb-2 md:hidden">${product.name}</h2> <!-- Mobile Title -->
                    
                    <!-- Video Placeholder -->
                    <div class="w-full aspect-video bg-black rounded-lg overflow-hidden mb-4 shadow-lg border border-slate-700 relative group">
                        <img src="${product.video}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-16 h-16 bg-orange-500/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition cursor-pointer">
                                <i class="fas fa-play text-white text-xl ml-1"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Tech Specs Radar Chart -->
                    <div class="flex-grow flex flex-col justify-end">
                        <h4 class="text-sm uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-700 pb-2">Análisis de Rendimiento</h4>
                        <div class="chart-container" style="height: 250px;">
                            <canvas id="productRadarChart"></canvas>
                        </div>
                    </div>
                </div>

                <!-- Right: Info -->
    <div class="w-full md:w-1/2 p-8 bg-white overflow-y-auto">
        <h2 class="text-3xl font-bold text-slate-900 mb-1 hidden md:block">${product.name}</h2>
        <p class="text-orange-600 font-medium mb-6 uppercase text-sm tracking-wide">${product.tagline}</p>

        <p class="text-slate-600 mb-8 leading-relaxed">${product.desc}</p>

        <!-- Tabs/Specs -->
        <div class="bg-slate-50 rounded-lg p-6 border border-slate-100 mb-8">
            <h4 class="font-bold text-slate-900 mb-4"><i class="fas fa-cogs mr-2 text-slate-400"></i>Especificaciones Técnicas</h4>
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div class="border-b border-slate-200 pb-2">
                    <span class="block text-slate-400 text-xs uppercase">Tonelaje / Carga</span>
                    <span class="font-bold text-slate-800">${product.specs.tonnage}</span>
                </div>
                <div class="border-b border-slate-200 pb-2">
                    <span class="block text-slate-400 text-xs uppercase">Ciclo Seco</span>
                    <span class="font-bold text-slate-800">${product.specs.cycleTime}</span>
                </div>
                <div class="border-b border-slate-200 pb-2">
                    <span class="block text-slate-400 text-xs uppercase">Potencia Motor</span>
                    <span class="font-bold text-slate-800">${product.specs.power}</span>
                </div>
                <div class="border-b border-slate-200 pb-2">
                    <span class="block text-slate-400 text-xs uppercase">Peso Máquina</span>
                    <span class="font-bold text-slate-800">${product.specs.weight}</span>
                </div>
            </div>
        </div>

        <div class="flex flex-col space-y-3">
            <button class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded shadow transition" onclick="document.getElementById('contact-form-section') ? document.getElementById('contact-form-section').scrollIntoView() : (closeModal(), navigateTo('contact'))">
                SOLICITAR COTIZACIÓN
            </button>
            <button class="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded transition flex items-center justify-center">
                <i class="fas fa-file-pdf mr-2"></i> Descargar Ficha Técnica (PDF)
            </button>
        </div>
    </div>
    `;

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

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
