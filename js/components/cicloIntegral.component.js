function renderCicloIntegralComponent() {
    return `
    <section class="ciclo-section bg-slate-900 overflow-hidden relative h-[550px] border-b border-slate-800 w-full" id="ciclo-section-main">

        <!-- INDICATOR -->
        <div class="indicator absolute top-0 left-0 right-0 h-1 bg-orange-500 z-40"></div>

        <!-- FONDO FULL WIDTH (FUERA DEL CONTAINER) -->
        <div 
            id="ciclo-demo"
            class="absolute inset-0 h-full z-0"
            style="width:100vw; left:50%; transform:translateX(-50%);"></div>

        <!-- GRADIENT OVERLAY (SOMBRA DE IZQUIERDA A DERECHA) -->
        <div class="ciclo-gradient-overlay absolute inset-0 z-0"></div>

        <!-- CONTENIDO ALINEADO A GRID -->
        <div class="container mx-auto px-4 relative h-full flex flex-col z-10">

            <!-- DETAILS EVEN -->
            <div class="details absolute top-4 md:top-12 left-4 md:left-8 max-w-[45%] md:max-w-[50%] pointer-events-none"
                 id="details-even">
                <div class="place-box">
                    <div class="text text-orange-500 uppercase tracking-widest font-bold text-sm md:text-lg relative pl-6 md:pl-10
                                before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
                                before:w-6 md:before:w-8 before:h-1 before:bg-white before:rounded-full">
                    </div>
                </div>
                <div class="title-box-1 text-white mt-1 md:mt-2">
                    <div class="title-1 uppercase text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
                         style="font-family:'Oswald',sans-serif;"></div>
                </div>
                <div class="title-box-2 text-white">
                    <div class="title-2 uppercase text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
                         style="font-family:'Oswald',sans-serif;"></div>
                </div>
                <div class="desc text-slate-300 mt-2 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed line-clamp-4 md:line-clamp-3"></div>
                <div class="cta mt-4 md:mt-8 pointer-events-auto">
                    <button onclick="navigateTo('services')"
                            class="discover border border-white px-4 md:px-6 py-2 rounded-full
                                   text-white uppercase text-xs md:text-sm
                                   hover:bg-white hover:text-black transition duration-300">
                        Saber Más
                    </button>
                </div>
            </div>

            <!-- DETAILS ODD -->
            <div class="details absolute top-4 md:top-12 left-4 md:left-8 max-w-[45%] md:max-w-[50%] pointer-events-none"
                 id="details-odd">
                <div class="place-box">
                    <div class="text text-orange-500 uppercase tracking-widest font-bold text-sm md:text-lg relative pl-6 md:pl-10
                                before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
                                before:w-6 md:before:w-8 before:h-1 before:bg-white before:rounded-full">
                    </div>
                </div>
                <div class="title-box-1 text-white mt-1 md:mt-2">
                    <div class="title-1 uppercase text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
                         style="font-family:'Oswald',sans-serif;"></div>
                </div>
                <div class="title-box-2 text-white">
                    <div class="title-2 uppercase text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
                         style="font-family:'Oswald',sans-serif;"></div>
                </div>
                <div class="desc text-slate-300 mt-2 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed line-clamp-4 md:line-clamp-3"></div>
                <div class="cta mt-4 md:mt-8 pointer-events-auto">
                    <button onclick="navigateTo('services')"
                            class="discover border border-white px-4 md:px-6 py-2 rounded-full
                                   text-white uppercase text-xs md:text-sm
                                   hover:bg-white hover:text-black transition duration-300">
                        Saber Más
                    </button>
                </div>
            </div>

            <!-- PAGINATION -->
            <div class="pagination absolute bottom-2 md:bottom-4 left-4 md:left-8 flex items-center z-50 mt-32 md:mt-40"
                 id="ciclo-pagination">
                <div class="arrow arrow-right mr-3 md:mr-6 cursor-pointer hover:scale-110 transition-transform"
                     onclick="cicloStep(1)">
                    <svg class="w-8 md:w-10 h-8 md:h-10 text-white" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>
                </div>

                <div class="progress-sub-container hidden md:flex items-center">
                    <div class="progress-sub-background w-48 md:w-64 h-1 bg-white/20 relative overflow-hidden rounded-full">
                        <div class="progress-sub-foreground absolute left-0 top-0 h-full bg-orange-500 w-0"></div>
                    </div>
                </div>

                <div class="slide-numbers hidden md:flex ml-3 md:ml-6 text-white text-2xl md:text-3xl font-bold
                            w-8 md:w-10 text-center relative overflow-hidden h-8 md:h-10"
                     id="ciclo-slide-numbers"></div>
            </div>
        </div>

        <!-- COVER -->
        <div class="cover absolute inset-0 bg-white z-[60] pointer-events-none"></div>
    </section>
    `;
}


// --- GSAP CICLO INTEGRAL - LÓGICA FINAL ---
let cicloOrder = [0, 1, 2, 3];
let cicloDetailsEven = true;
let cicloInitialized = false;
let autoTimer = null;
let cicloPageHidden = false;

const AUTO_DELAY = 6000;

// ------------------------------------------------
// VISIBILITY CHANGE HANDLER
// ------------------------------------------------
function handleCicloVisibilityChange() {
    const section = document.getElementById("ciclo-section-main");
    if (!section) return;
    
    if (document.hidden || !isElementInViewport(section)) {
        cicloPageHidden = true;
        clearTimeout(autoTimer);
        // Detener todas las animaciones GSAP del componente
        gsap.to(".ciclo-section *", { autoKill: false }, 0);
    } else {
        cicloPageHidden = false;
        // Reanudar autoplay si estaba activo
        if (cicloInitialized) {
            startAutoPlay();
        }
    }
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}

// ------------------------------------------------
// INIT
// ------------------------------------------------
function initCicloIntegralAnimation() {
    const data = typeof cicloIntegralData !== "undefined" ? cicloIntegralData : [];
    if (!data.length) return;

    const demo = document.getElementById("ciclo-demo");
    const slideNumbers = document.getElementById("ciclo-slide-numbers");

    if (!demo || !slideNumbers) {
        setTimeout(initCicloIntegralAnimation, 100);
        return;
    }

    // Add visibility change listeners
    document.addEventListener("visibilitychange", handleCicloVisibilityChange);
    window.addEventListener("blur", handleCicloVisibilityChange);
    window.addEventListener("focus", handleCicloVisibilityChange);

    // Render cards
    demo.innerHTML =
        data
            .map(
                (i, idx) => `
        <div class="card absolute inset-0 bg-cover bg-center"
             id="ciclo-card-${idx}"
             style="background-image:url(${i.image})">
        </div>`
            )
            .join("") +
        data
            .map(
                (i, idx) => `
        <div class="card-content absolute bottom-6 left-4 p-4 text-white z-40 pointer-events-none hidden md:block"
             id="ciclo-card-content-${idx}">
            <div class="content-place text-xs uppercase tracking-widest opacity-90">${i.place}</div>
        </div>`
            )
            .join("");

    slideNumbers.innerHTML = data
        .map(
            (_, idx) =>
                `<div class="item absolute inset-0 flex items-center justify-center"
                     id="ciclo-slide-item-${idx}">${idx + 1}</div>`
        )
        .join("");

    setupInitialState();
    startAutoPlay();

    // Resize seguro
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(recalculateLayout, 200);
    });

    cicloInitialized = true;
}

// ------------------------------------------------
// RESPONSIVE METRICS
// ------------------------------------------------
function getResponsiveMetrics() {
    const section = document.querySelector(".ciclo-section");
    if (!section) return null;

    const w = section.offsetWidth;
    const h = section.offsetHeight;

    const isMobile = w < 768;
    const isTablet = w < 1024;

    const cardWidth = isMobile
        ? Math.min(120, w * 0.25)
        : isTablet
            ? Math.min(160, w * 0.2)
            : Math.min(200, w * 0.15);

    const cardHeight = isMobile
        ? Math.min(180, h * 0.3)
        : isTablet
            ? Math.min(240, h * 0.35)
            : Math.min(280, h * 0.4);

    const gap = isMobile ? 10 : 20;
    const offsetTop = h - cardHeight - (isMobile ? 20 : 40);
    const offsetLeft = Math.max(w - cardWidth * 3 - 40, w * 0.6);

    return {
        cardWidth: Math.floor(cardWidth),
        cardHeight: Math.floor(cardHeight),
        offsetLeft: Math.floor(offsetLeft),
        offsetTop: Math.floor(offsetTop),
        gap
    };
}

// ------------------------------------------------
// INITIAL STATE
// ------------------------------------------------
function setupInitialState() {
    const data = cicloIntegralData;
    const [active, ...rest] = cicloOrder;
    const metrics = getResponsiveMetrics();
    if (!metrics) return;

    const detailsActive = cicloDetailsEven ? "#details-even" : "#details-odd";

    // TARJETA ACTIVA → FULL VIEWPORT
    gsap.set(`#ciclo-card-${active}`, {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        zIndex: 20,
        borderRadius: 0
    });

    gsap.set(`#ciclo-card-content-${active}`, {
        opacity: 0,
        display: "none"
    });

    updateDetails(detailsActive, data[active]);
    gsap.set("#details-even, #details-odd", { opacity: 0, x: -200 });
    gsap.set(detailsActive, { opacity: 1, x: 0, zIndex: 30 });

    // COLA
    rest.forEach((i, idx) => {
        const x = metrics.offsetLeft + idx * (metrics.cardWidth + metrics.gap);

        gsap.set(`#ciclo-card-${i}`, {
            x,
            y: metrics.offsetTop,
            width: metrics.cardWidth,
            height: metrics.cardHeight,
            borderRadius: 8,
            zIndex: 30
        });

        gsap.set(`#ciclo-card-content-${i}`, {
            x,
            y: metrics.offsetTop + metrics.cardHeight - 80,
            width: metrics.cardWidth,
            opacity: 1,
            display: "block"
        });

        gsap.set(`#ciclo-slide-item-${i}`, { x: (idx + 1) * 50 });
    });

    gsap.to(".cover", {
        x: window.innerWidth + 400,
        duration: 1,
        ease: "sine.inOut",
        delay: 0.3
    });
}


// ------------------------------------------------
// STEP
// ------------------------------------------------
function cicloStep(dir = 1) {
    if (!cicloInitialized) return;
    clearTimeout(autoTimer);
    performStep(dir);
    startAutoPlay();
}

// ------------------------------------------------
// MAIN ANIMATION
// ------------------------------------------------
function performStep(dir = 1) {
    const data = cicloIntegralData;
    const metrics = getResponsiveMetrics();
    if (!metrics) return;

    const ease = "sine.inOut";
    const prevActive = cicloOrder[0];

    // ROTACIÓN
    if (dir > 0) cicloOrder.push(cicloOrder.shift());
    else cicloOrder.unshift(cicloOrder.pop());

    const [active, ...rest] = cicloOrder;
    const prev = rest[rest.length - 1];

    // DETAILS
    cicloDetailsEven = !cicloDetailsEven;
    const detailsActive = cicloDetailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = cicloDetailsEven ? "#details-odd" : "#details-even";

    updateDetails(detailsActive, data[active]);

    gsap.set(detailsActive, { zIndex: 22, opacity: 0, x: -200 });
    gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: 0.4 });
    gsap.to(detailsInactive, { opacity: 0, ease });

    // Z-INDEX
    gsap.set(`#ciclo-card-${prev}`, { zIndex: 10 });
    gsap.set(`#ciclo-card-${active}`, { zIndex: 20 });

    // OCULTAR MINI TEXTO ACTIVO
    gsap.to(`#ciclo-card-content-${active}`, {
        opacity: 0,
        duration: 0.3,
        ease
    });

    // EXPANSIÓN REAL A FULL VIEWPORT
    gsap.to(`#ciclo-card-${active}`, {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        borderRadius: 0,
        duration: 1.2,
        ease,
        onComplete: () => {
            const xNew =
                metrics.offsetLeft +
                (rest.length - 1) * (metrics.cardWidth + metrics.gap);

            // EL QUE SALE → VUELVE A LA COLA
            gsap.set(`#ciclo-card-${prev}`, {
                x: xNew,
                y: metrics.offsetTop,
                width: metrics.cardWidth,
                height: metrics.cardHeight,
                borderRadius: 8,
                zIndex: 30
            });

            gsap.set(`#ciclo-card-content-${prev}`, {
                x: xNew,
                y: metrics.offsetTop + metrics.cardHeight - 80,
                opacity: 1,
                display: "block"
            });
        }
    });

    // MOVER RESTO DE LA COLA
    rest.forEach((i, idx) => {
        if (i === prev) return;

        const xNew = metrics.offsetLeft + idx * (metrics.cardWidth + metrics.gap);

        gsap.to(`#ciclo-card-${i}`, {
            x: xNew,
            y: metrics.offsetTop,
            width: metrics.cardWidth,
            height: metrics.cardHeight,
            duration: 0.8,
            ease,
            delay: 0.1 * (idx + 1)
        });

        gsap.to(`#ciclo-card-content-${i}`, {
            x: xNew,
            y: metrics.offsetTop + metrics.cardHeight - 80,
            opacity: 1,
            duration: 0.8,
            ease,
            delay: 0.1 * (idx + 1)
        });
    });

    // NÚMEROS
    data.forEach((_, i) => {
        gsap.set(`#ciclo-slide-item-${i}`, {
            opacity: i === active ? 1 : 0,
            x: 0
        });
    });

    // PROGRESO + INDICADOR
    gsap.to(".progress-sub-foreground", {
        width: `${((active + 1) / data.length) * 100}%`,
        ease
    });

    gsap.set(".indicator", { x: -window.innerWidth });
    // Duration should match AUTO_DELAY (converted to seconds)
    gsap.to(".indicator", { x: 0, duration: AUTO_DELAY / 1000, ease: "none" });
}

// ------------------------------------------------
// DETAILS
// ------------------------------------------------
function updateDetails(selector, item) {
    const el = document.querySelector(selector);
    if (!el) return;

    el.querySelector(".text").textContent = item.place;
    el.querySelector(".title-1").textContent = item.title;
    el.querySelector(".title-2").textContent = item.title2;
    el.querySelector(".desc").textContent = item.description;
}

// ------------------------------------------------
// AUTOPLAY
// ------------------------------------------------
function startAutoPlay() {
    clearTimeout(autoTimer);
    autoTimer = setTimeout(() => {
        performStep(1);
        startAutoPlay();
    }, AUTO_DELAY);
}

// ------------------------------------------------
// RESIZE HANDLER
// ------------------------------------------------
function recalculateLayout() {
    const [active, ...rest] = cicloOrder;
    const metrics = getResponsiveMetrics();
    if (!metrics) return;

    gsap.set(`#ciclo-card-${active}`, {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight
    });

    rest.forEach((i, idx) => {
        const x = metrics.offsetLeft + idx * (metrics.cardWidth + metrics.gap);

        gsap.set(`#ciclo-card-${i}`, {
            x,
            y: metrics.offsetTop,
            width: metrics.cardWidth,
            height: metrics.cardHeight
        });

        gsap.set(`#ciclo-card-content-${i}`, {
            x,
            y: metrics.offsetTop + metrics.cardHeight - 80
        });
    });
}
