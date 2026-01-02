function renderProductCardComponent(p) {
    return `
    <div class="bg-white rounded-xl shadow hover:shadow-xl transition-shadow border border-slate-100 overflow-hidden group flex flex-col">
        <div class="h-56 overflow-hidden relative bg-slate-200">
            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">${p.category}</div>
        </div>
        <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-slate-800 mb-1">${p.name}</h3>
            <p class="text-xs text-orange-600 font-bold mb-3 uppercase tracking-wide">${p.tagline}</p>
            <p class="text-slate-500 text-sm mb-6 flex-grow line-clamp-3">${p.desc}</p>
            <button onclick="openProductModal('${p.id}')" class="w-full border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-bold py-2 rounded transition text-sm">
                VER FICHA TÉCNICA
            </button>
        </div>
    </div>
    `;
}
