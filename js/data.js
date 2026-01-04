// --- DATA STORE ---
const appData = {
    products: [
        {
            id: 'p1',
            category: 'inyeccion',
            name: 'Serie VW-500 Hidráulica',
            tagline: 'Potencia Clásica para Alta Demanda',
            image: 'recursos/machine/machine1.jpg',
            desc: 'Sistema de inyección hidráulica de alta precisión con unidad de cierre reforzada. Ideal para preformas PET y tapas.',
            specs: { tonnage: 500, cycleTime: '4.2s', power: '45kW', weight: '12T' },
            metrics: [85, 70, 90, 95, 80],
            video: null
        },
        {
            id: 'p2',
            category: 'inyeccion',
            name: 'Serie E-Motion Eléctrica',
            tagline: 'Eficiencia Energética Superior',
            image: 'recursos/machine/machine2.jpg',
            desc: 'Máquina totalmente eléctrica. Reduce el consumo energético hasta un 60%. Silenciosa, limpia y extremadamente precisa.',
            specs: { tonnage: 280, cycleTime: '3.8s', power: '18kW', weight: '8T' },
            metrics: [95, 90, 98, 95, 75],
            video: null
        },
        {
            id: 'p3',
            category: 'extrusion',
            name: 'Extrusora EX-Pro Tubería',
            tagline: 'Producción Continua Sin Interrupciones',
            image: 'recursos/machine/machine3.jpg',
            desc: 'Línea completa para extrusión de tubería PVC/HDPE. Incluye tanque de enfriamiento y unidad de corte automatizada.',
            specs: { tonnage: 'N/A', cycleTime: 'Continua', power: '110kW', weight: '15T' },
            metrics: [80, 85, 75, 85, 95],
            video: null
        },
        {
            id: 'p4',
            category: 'robotica',
            name: 'Brazo Robótico R-Axix 6',
            tagline: 'Automatización de Pick & Place',
            image: 'recursos/machine/machine4.webp',
            desc: 'Brazo robótico de 6 ejes para extracción de piezas y paletizado. Integración nativa con líneas de inyección y extrusión.',
            specs: { tonnage: 'Payload 10kg', cycleTime: '0.5s', power: '3kW', weight: '200kg' },
            metrics: [90, 98, 95, 99, 85],
            video: null
        },
        {
            id: 'p5',
            category: 'extrusion',
            name: 'Línea de Perfilería Window',
            tagline: 'Precisión para Construcción',
            image: 'recursos/machine/machine5.jpg',
            desc: 'Especializada en perfiles complejos para ventanas y marcos. Calibración al vacío de alta velocidad.',
            specs: { tonnage: 'N/A', cycleTime: 'Continua', power: '85kW', weight: '10T' },
            metrics: [88, 80, 85, 92, 90],
            video: null
        }
    ],
    metricsLabels: [
        'Eficiencia General',
        'Velocidad Ciclo',
        'Ahorro Energía',
        'Precisión',
        'Durabilidad'
    ]
};


const cicloIntegralData = [
    {
        place: 'Logística Internacional',
        title: 'Sourcing',
        title2: 'Global',
        description: 'No nos limitamos a nuestro stock. Localizamos, negociamos y transportamos maquinaria específica desde cualquier parte del mundo (Asia, América o Europa) hasta la puerta de su fábrica, gestionando todos los trámites aduaneros.',
        image: 'recursos/1.png'
    },
    {
        place: 'Hub Logístico - Madrid',
        title: 'Maquila',
        title2: 'Plásticos',
        description: '¿No desea invertir en activos fijos? Ponemos nuestra planta en Europa a su disposición. Utilizamos nuestra propia maquinaria instalada para fabricar sus piezas plásticas, moldes o envases bajo sus especificaciones y marca.',
        image: 'recursos/2.png'
    },
    {
        place: 'Planta de Producción',
        title: 'Venta',
        title2: 'Maquinaria',
        description: 'Nuestro equipo de ingenieros europeos garantiza una instalación impecable y la capacitación técnica necesaria para maximizar su ROI.',
        image: 'recursos/3.png'
    },
    {
        place: 'Confianza y respaldo',
        title: 'Consultoría',
        title2: 'Procesos',
        description: 'Analizamos sus necesidades productivas, presupuesto y objetivos para diseñar la hoja de ruta ideal. Le asesoramos sobre importar, fabricar o maquilar, garantizando la inversión más rentable.',
        image: 'recursos/4.png'
    }
];

