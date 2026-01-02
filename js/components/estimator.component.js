function renderEstimatorComponent() {
    return `
    <!-- ESTIMATOR SECTION -->
    <div class="bg-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl text-white">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h3 class="text-2xl font-bold mb-4">Estimador de Proyectos Especiales</h3>
                <p class="text-slate-400 mb-6">
                    Calcule el tiempo estimado para el desarrollo de maquinaria personalizada o gestión de importación compleja.
                </p>
                <div class="space-y-4">
                    <div class="flex items-center">
                        <div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 font-bold text-orange-500">1</div>
                        <p>Definición de Requerimientos</p>
                    </div>
                    <div class="flex items-center">
                        <div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 font-bold text-orange-500">2</div>
                        <p>Búsqueda Global / Diseño</p>
                    </div>
                    <div class="flex items-center">
                        <div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 font-bold text-orange-500">3</div>
                        <p>Logística e Instalación</p>
                    </div>
                </div>
            </div>

            <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <label class="block text-sm font-bold mb-2">Tipo de Gestión</label>
                <select id="est-base" class="w-full bg-slate-700 border border-slate-600 rounded p-3 text-white mb-4" onchange="updateEstimator()">
                    <option value="1">Importación de Maquinaria (Asia/América)</option>
                    <option value="2">Fabricación a Medida (Europa)</option>
                    <option value="0.5">Servicio de Maquila (Producción)</option>
                </select>

                <label class="block text-sm font-bold mb-2">Variables Adicionales</label>
                <div class="space-y-2 mb-6">
                    <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" id="est-check-1" class="form-checkbox text-orange-500 bg-slate-700 border-slate-600" onchange="updateEstimator()">
                            <span class="text-sm text-slate-300">Requiere Trámites Aduaneros Complejos</span>
                    </label>
                    <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" id="est-check-2" class="form-checkbox text-orange-500 bg-slate-700 border-slate-600" onchange="updateEstimator()">
                            <span class="text-sm text-slate-300">Software Personalizado</span>
                    </label>
                </div>

                <!-- Dynamic Bar -->
                <div class="bg-slate-900 rounded-lg p-4">
                    <div class="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Inicio</span>
                        <span>Entrega / Inicio Producción</span>
                    </div>
                    <div class="h-4 bg-slate-700 rounded-full overflow-hidden relative">
                        <div id="est-bar" class="absolute top-0 left-0 h-full bg-orange-500 transition-all duration-500" style="width: 30%"></div>
                    </div>
                    <p class="text-right text-orange-400 font-bold mt-2" id="est-text">Tiempo estimado: --</p>
                </div>

                <button onclick="navigateTo('contact')" class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded mt-6 transition">Solicitar Asesoría</button>
            </div>
        </div>
    </div>
    `;
}

// Custom Project Estimator Logic
function updateEstimator() {
    const selector = document.getElementById('est-base');
    if (!selector) return;
    const type = selector.value;
    let weeks = 0;
    let label = "";

    if (type == "1") { // Importación
        weeks = 12;
        label = "Importación Global";
    } else if (type == "2") { // A Medida
        weeks = 16;
        label = "Fabricación Custom";
    } else { // Maquila
        weeks = 2;
        label = "Inicio Producción";
    }

    // Add checkboxes
    const check1 = document.getElementById('est-check-1');
    const check2 = document.getElementById('est-check-2');
    if (check1 && check1.checked) weeks += 2; // Aduanas/Tramites
    if (check2 && check2.checked) weeks += 4; // Software/Complex

    const maxWeeks = 24;
    let percentage = (weeks / maxWeeks) * 100;
    if (percentage > 100) percentage = 100;

    // Update UI
    const bar = document.getElementById('est-bar');
    const text = document.getElementById('est-text');
    if (bar) bar.style.width = `${percentage}% `;
    if (text) text.innerText = `${label}: ~${weeks} Semanas`;

    // Color change
    if (bar) {
        if (weeks < 8) bar.className = "absolute top-0 left-0 h-full bg-green-500 transition-all duration-500";
        else if (weeks < 16) bar.className = "absolute top-0 left-0 h-full bg-orange-500 transition-all duration-500";
        else bar.className = "absolute top-0 left-0 h-full bg-red-500 transition-all duration-500";
    }
}
