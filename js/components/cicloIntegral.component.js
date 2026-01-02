function renderCicloIntegralComponent() {
    return `
    <section class="ciclo-section bg-slate-900 overflow-hidden relative h-[550px] border-b border-slate-800 w-full"> 
        
        <div class="indicator absolute top-0 left-0 right-0 h-1 bg-orange-500 z-40"></div>

        <div class="container mx-auto px-4 relative h-full flex flex-col">
            
            <div class="details absolute top-4 md:top-12 left-4 md:left-8 z-30 max-w-[45%] md:max-w-[50%] pointer-events-none" id="details-even">
                <div class="place-box">
                    <div class="text text-orange-500 uppercase tracking-widest font-bold text-sm md:text-lg relative pl-6 md:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 md:before:w-8 before:h-1 before:bg-white before:rounded-full"></div>
                </div>
                <div class="title-box-1 text-white mt-1 md:mt-2">
                    <div class="title-1 uppercase text-2xl md:text-4xl lg:text-5xl font-bold leading-tight" style="font-family: 'Oswald', sans-serif;"></div>
                </div>
                <div class="title-box-2 text-white">
                    <div class="title-2 uppercase text-2xl md:text-4xl lg:text-5xl font-bold leading-tight" style="font-family: 'Oswald', sans-serif;"></div>
                </div>
                <div class="desc text-slate-300 mt-2 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed line-clamp-3"></div>
                <div class="cta mt-4 md:mt-8 pointer-events-auto"> <button onclick="navigateTo('services')" class="discover border border-white px-4 md:px-6 py-2 rounded-full text-white uppercase text-xs md:text-sm hover:bg-white hover:text-black transition duration-300">
                        Saber Más
                    </button>
                </div>
            </div>

            <div class="details absolute top-4 md:top-12 left-4 md:left-8 z-30 max-w-[45%] md:max-w-[50%] pointer-events-none" id="details-odd">
                <div class="place-box">
                    <div class="text text-orange-500 uppercase tracking-widest font-bold text-sm md:text-lg relative pl-6 md:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 md:before:w-8 before:h-1 before:bg-white before:rounded-full"></div>
                </div>
                <div class="title-box-1 text-white mt-1 md:mt-2">
                    <div class="title-1 uppercase text-2xl md:text-4xl lg:text-5xl font-bold leading-tight" style="font-family: 'Oswald', sans-serif;"></div>
                </div>
                <div class="title-box-2 text-white">
                    <div class="title-2 uppercase text-2xl md:text-4xl lg:text-5xl font-bold leading-tight" style="font-family: 'Oswald', sans-serif;"></div>
                </div>
                <div class="desc text-slate-300 mt-2 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed line-clamp-3"></div>
                <div class="cta mt-4 md:mt-8 pointer-events-auto">
                    <button onclick="navigateTo('services')" class="discover border border-white px-4 md:px-6 py-2 rounded-full text-white uppercase text-xs md:text-sm hover:bg-white hover:text-black transition duration-300">
                        Saber Más
                    </button>
                </div>
            </div>

            <div id="ciclo-demo" class="absolute inset-0 w-full h-full"></div>

            <div class="pagination absolute bottom-4 md:bottom-8 left-4 md:left-8 flex items-center z-50" id="ciclo-pagination">
                <div class="arrow arrow-left mr-2 md:mr-4 cursor-pointer hover:scale-110 transition-transform" onclick="cicloStep(-1)">
                    <svg class="w-8 md:w-10 h-8 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div class="arrow arrow-right mr-3 md:mr-6 cursor-pointer hover:scale-110 transition-transform" onclick="cicloStep(1)">
                    <svg class="w-8 md:w-10 h-8 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
                <div class="progress-sub-container hidden md:flex items-center">
                    <div class="progress-sub-background w-48 md:w-64 h-1 bg-white/20 relative overflow-hidden rounded-full">
                        <div class="progress-sub-foreground absolute left-0 top-0 h-full bg-orange-500 w-0 transition-all duration-700 ease-linear"></div>
                    </div>
                </div>
                <div class="slide-numbers ml-3 md:ml-6 text-white text-2xl md:text-3xl font-bold w-8 md:w-10 text-center relative overflow-hidden h-8 md:h-10" id="ciclo-slide-numbers"></div>
            </div>
        </div>

        <div class="cover absolute inset-0 bg-white z-[60] pointer-events-none"></div>
    </section>
    `;
}

// --- GSAP CICLO INTEGRAL - LÓGICA ---
let cicloOrder = [0, 1, 2, 3];
let cicloDetailsEven = true;
let cicloInitialized = false;
let autoTimer = null;
const AUTO_DELAY = 6000;

function initCicloIntegralAnimation() {
    const data = (typeof cicloIntegralData !== 'undefined') ? cicloIntegralData : [];
    if (data.length === 0) return;

    const demo = document.getElementById('ciclo-demo');
    const slideNumbers = document.getElementById('ciclo-slide-numbers');
    
    // Verificación de seguridad por si el DOM no está listo
    if (!demo || !slideNumbers) {
        setTimeout(initCicloIntegralAnimation, 100);
        return;
    }

    // Aseguramos w-full h-full y object-cover
    demo.innerHTML = data.map((i, idx) =>
        `<div class="card absolute top-0 left-0 w-full h-full bg-cover bg-center" 
              id="ciclo-card-${idx}" 
              style="background-image:url(${i.image}); background-size: cover; background-position: center;"></div>`
    ).join('') +
        data.map((i, idx) =>
            `<div class="card-content absolute text-white bottom-8 left-4 z-40 p-4 pointer-events-none hidden md:block" id="ciclo-card-content-${idx}">
            <div class="content-start w-6 h-1 bg-white rounded-full mb-2"></div>
            <div class="content-place text-xs uppercase tracking-widest opacity-90">${i.place}</div>
            <div class="content-title-1 text-lg uppercase font-bold" style="font-family: 'Oswald', sans-serif;">${i.title}</div>
        </div>`
        ).join('');

    slideNumbers.innerHTML = data.map((_, idx) =>
        `<div class="item absolute inset-0 flex items-center justify-center" id="ciclo-slide-item-${idx}">${idx + 1}</div>`
    ).join('');

    setupInitialState();
    startAutoPlay();
    
    // IMPORTANTE: Un debounce para el resize para evitar parpadeos excesivos
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Forzar recálculo completo y reinicializar posiciones
            const data = cicloIntegralData || [];
            const [active, ...rest] = cicloOrder;
            const { cardWidth, cardHeight, offsetLeft, offsetTop, gap } = getResponsiveMetrics();
            
            // Reposicionar tarjeta activa
            gsap.set(`#ciclo-card-${active}`, {
                x: 0, y: 0, width: "100%", height: "100%", zIndex: 20, borderRadius: 0, opacity: 1, scale: 1,
                backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
            });
            
            // Reposicionar tarjetas en cola
            rest.forEach((i, idx) => {
                gsap.set(`#ciclo-card-${i}`, {
                    x: offsetLeft + idx * (cardWidth + gap),
                    y: offsetTop,
                    width: cardWidth,
                    height: cardHeight,
                    zIndex: 30,
                    borderRadius: 8,
                    scale: 1,
                    opacity: 1,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                });
                gsap.set(`#ciclo-card-content-${i}`, {
                    x: offsetLeft + idx * (cardWidth + gap),
                    y: offsetTop + cardHeight - 80,
                    opacity: 1,
                    zIndex: 40,
                    width: cardWidth
                });
            });
        }, 200);
    });
    
    cicloInitialized = true;
}

function getResponsiveMetrics() {
    const section = document.querySelector('.ciclo-section');
    if(!section) return { cardW: 0, cardH: 0, offX: 0, offY: 0 };

    const w = section.offsetWidth;
    const h = section.offsetHeight;

    // Lógica mejorada para responsividad y zoom
    const isMobile = w < 768;
    const isTablet = w < 1024;
    
    // Tamaños de tarjetas más proporcionales
    const cardWidth = isMobile ? Math.min(120, w * 0.25) : isTablet ? Math.min(160, w * 0.2) : Math.min(200, w * 0.15);
    const cardHeight = isMobile ? Math.min(180, h * 0.3) : isTablet ? Math.min(240, h * 0.35) : Math.min(280, h * 0.4);
    
    // Posición de la cola: derecha, con margen seguro
    const marginRight = isMobile ? 20 : 40;
    const offsetLeft = w - (cardWidth * 3) - marginRight; // Espacio para 3 tarjetas
    const offsetTop = h - cardHeight - (isMobile ? 20 : 40); // Abajo con margen

    // Asegurar que no se salga de la pantalla
    const safeOffsetLeft = Math.max(offsetLeft, w * 0.6);

    return { 
        cardWidth: Math.floor(cardWidth), 
        cardHeight: Math.floor(cardHeight), 
        offsetLeft: Math.floor(safeOffsetLeft), 
        offsetTop: Math.floor(offsetTop), 
        gap: isMobile ? 10 : 20 
    };
}

function setupInitialState() {
    const data = cicloIntegralData || [];
    const [active, ...rest] = cicloOrder;
    const detailsActive = cicloDetailsEven ? "#details-even" : "#details-odd";
    const { cardWidth, cardHeight, offsetLeft, offsetTop, gap } = getResponsiveMetrics();

    // 1. TARJETA ACTIVA: Forzar siempre al 100% del contenedor
    gsap.set(`#ciclo-card-${active}`, {
        x: 0, y: 0, 
        width: "100%", 
        height: "100%", 
        zIndex: 20, 
        borderRadius: 0,
        opacity: 1,
        scale: 1,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    });
    gsap.set(`#ciclo-card-content-${active}`, { opacity: 0 });

    // Detalles iniciales
    updateDetails(detailsActive, data[active]);
    gsap.set("#details-even, #details-odd", { opacity: 0, x: -50 }); // Menos desplazamiento
    gsap.set(detailsActive, { opacity: 1, x: 0, zIndex: 30 });

    // 2. TARJETAS EN COLA (SIDE)
    rest.forEach((i, idx) => {
        gsap.set(`#ciclo-card-${i}`, {
            x: offsetLeft + idx * (cardWidth + gap),
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            zIndex: 30,
            borderRadius: 8,
            scale: 1,
            opacity: 1
        });
        
        // Contenido mini de las tarjetas
        gsap.set(`#ciclo-card-content-${i}`, {
            x: offsetLeft + idx * (cardWidth + gap),
            y: offsetTop + cardHeight - 80, // Ajuste para que el texto quede dentro de la card
            opacity: 1,
            zIndex: 40,
            width: cardWidth
        });
        
        gsap.set(`#ciclo-slide-item-${i}`, { x: (idx + 1) * 50 });
    });

    // Animación inicial de la cortina blanca
    gsap.to(".cover", { x: "100%", duration: 1, ease: "power2.inOut", delay: 0.2 });
}

function cicloStep(dir = 1) {
    if (!cicloInitialized) return;
    clearTimeout(autoTimer);
    performStep(dir);
    startAutoPlay();
}

function performStep(dir = 1) {
    const data = cicloIntegralData || [];
    const length = data.length;
    
    if (dir > 0) {
        cicloOrder.push(cicloOrder.shift());
    } else {
        cicloOrder.unshift(cicloOrder.pop());
    }

    const [active, ...rest] = cicloOrder;
    cicloDetailsEven = !cicloDetailsEven;
    const detailsActive = cicloDetailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = cicloDetailsEven ? "#details-odd" : "#details-even";

    updateDetails(detailsActive, data[active]);

    const { cardWidth, cardHeight, offsetLeft, offsetTop, gap } = getResponsiveMetrics();

    // --- ANIMACIÓN PRINCIPAL ---

    // 1. Nueva tarjeta activa se expande a pantalla completa
    gsap.to(`#ciclo-card-${active}`, {
        x: 0, 
        y: 0, 
        width: "100%", 
        height: "100%", 
        borderRadius: 0, 
        zIndex: 20,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        duration: 1.2, 
        ease: "power3.inOut" // Efecto más suave
    });

    // 2. Transición de textos
    gsap.to(detailsInactive, { opacity: 0, x: 20, duration: 0.5 });
    gsap.fromTo(detailsActive, 
        { opacity: 0, x: -30 }, 
        { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
    );

    // 3. Tarjeta que sale (se va a la cola)
    const prev = rest[rest.length - 1]; // La última de la lista 'rest' es la que acaba de salir
    
    // Primero hacemos un pequeño zoom out o fade para que no se vea el corte brusco
    gsap.to(`#ciclo-card-${prev}`, {
        duration: 0.6,
        onComplete: () => {
            // Una vez terminada la transición visual, la seteamos en su posición de "cola"
            gsap.set(`#ciclo-card-${prev}`, {
                x: offsetLeft + (rest.length - 1) * (cardWidth + gap),
                y: offsetTop,
                width: cardWidth, 
                height: cardHeight,
                scale: 1, 
                borderRadius: 8, 
                zIndex: 30
            });
            gsap.set(`#ciclo-card-content-${prev}`, {
                x: offsetLeft + (rest.length - 1) * (cardWidth + gap),
                y: offsetTop + cardHeight - 80,
                opacity: 1, zIndex: 40, width: cardWidth
            });
        }
    });

    // 4. Mover el resto de tarjetas en la cola
    rest.forEach((i, idx) => {
        if (i !== prev) {
            gsap.to(`#ciclo-card-${i}`, {
                x: offsetLeft + idx * (cardWidth + gap),
                y: offsetTop,
                width: cardWidth,
                height: cardHeight,
                duration: 0.8,
                ease: "power2.inOut"
            });
            gsap.to(`#ciclo-card-content-${i}`, {
                x: offsetLeft + idx * (cardWidth + gap),
                y: offsetTop + cardHeight - 80,
                duration: 0.8,
                opacity: 1,
                ease: "power2.inOut"
            });
        }
        gsap.to(`#ciclo-slide-item-${i}`, { x: (idx + 1) * 50, duration: 0.6 });
    });

    gsap.to(`#ciclo-slide-item-${active}`, { x: 0, duration: 0.6 });

    // Barra de progreso
    gsap.to(".progress-sub-foreground", {
        width: `${((active + 1) / length) * 100}%`,
        duration: 1,
        ease: "power2.out"
    });

    // Indicador superior
    gsap.set(".indicator", { x: "-100%" });
    gsap.to(".indicator", { x: "0%", duration: 5.5, ease: "none" });
}

function updateDetails(selector, item) {
    const container = document.querySelector(selector);
    if(!container) return;
    
    container.querySelector(`.text`).textContent = item.place;
    container.querySelector(`.title-1`).textContent = item.title;
    container.querySelector(`.title-2`).textContent = item.title2;
    container.querySelector(`.desc`).textContent = item.description;
}

function startAutoPlay() {
    clearTimeout(autoTimer);
    autoTimer = setTimeout(() => {
        performStep(1);
        startAutoPlay();
    }, AUTO_DELAY);
}