// --- DATA STORE ---
const appData = {
    products: [
        {
            id: 'p1',
            category: 'inyeccion',
            name: 'Serie VW-500 Hidráulica',
            tagline: 'Potencia Clásica para Alta Demanda',
            image: 'https://placehold.co/600x400/1e293b/FFF?text=Inyectora+VW-500',
            desc: 'Sistema de inyección hidráulica de alta precisión con unidad de cierre reforzada. Ideal para preformas PET y tapas.',
            specs: { tonnage: 500, cycleTime: '4.2s', power: '45kW', weight: '12T' },
            metrics: [85, 70, 90, 95, 80], // Efficiency, Speed, Eco, Precision, Durability
            video: 'https://placehold.co/1920x1080/000000/FFF?text=Video+Demo+Inyectora' // Placeholder for video
        },
        {
            id: 'p2',
            category: 'inyeccion',
            name: 'Serie E-Motion Eléctrica',
            tagline: 'Eficiencia Energética Superior',
            image: 'https://placehold.co/600x400/273a57/FFF?text=Serie+E-Motion',
            desc: 'Máquina totalmente eléctrica. Reduce el consumo energético hasta un 60%. Silenciosa, limpia y extremadamente precisa.',
            specs: { tonnage: 280, cycleTime: '3.8s', power: '18kW', weight: '8T' },
            metrics: [95, 90, 98, 95, 75],
            video: 'https://placehold.co/1920x1080/000000/FFF?text=Video+Demo+Electrica'
        },
        {
            id: 'p3',
            category: 'extrusion',
            name: 'Extrusora EX-Pro Tubería',
            tagline: 'Producción Continua Sin Interrupciones',
            image: 'https://placehold.co/600x400/334155/FFF?text=Extrusora+EX-Pro',
            desc: 'Línea completa para extrusión de tubería PVC/HDPE. Incluye tanque de enfriamiento y unidad de corte automatizada.',
            specs: { tonnage: 'N/A', cycleTime: 'Continua', power: '110kW', weight: '15T' },
            metrics: [80, 85, 75, 85, 95],
            video: 'https://placehold.co/1920x1080/000000/FFF?text=Video+Demo+Extrusion'
        },
        {
            id: 'p4',
            category: 'robotica',
            name: 'Brazo Robótico R-Axix 6',
            tagline: 'Automatización de Pick & Place',
            image: 'https://placehold.co/600x400/475569/FFF?text=Robot+R-Axix',
            desc: 'Brazo robótico de 6 ejes para extracción de piezas y paletizado. Integración nativa con series VW y E-Motion.',
            specs: { tonnage: 'Payload 10kg', cycleTime: '0.5s', power: '3kW', weight: '200kg' },
            metrics: [90, 98, 95, 99, 85],
            video: 'https://placehold.co/1920x1080/000000/FFF?text=Video+Demo+Robot'
        },
        {
            id: 'p5',
            category: 'extrusion',
            name: 'Línea de Perfilería Window',
            tagline: 'Precisión para Construcción',
            image: 'https://placehold.co/600x400/64748b/FFF?text=Perfileria+Window',
            desc: 'Especializada en perfiles complejos para ventanas y marcos. Calibración al vacío de alta velocidad.',
            specs: { tonnage: 'N/A', cycleTime: 'Continua', power: '85kW', weight: '10T' },
            metrics: [88, 80, 85, 92, 90],
            video: 'https://placehold.co/1920x1080/000000/FFF?text=Video+Demo+Perfileria'
        }
    ],
    metricsLabels: ['Eficiencia General', 'Velocidad Ciclo', 'Ahorro Energía', 'Precisión', 'Durabilidad']
};

const cicloIntegralData = [
    {
        place: 'Hub Logístico - Madrid',
        title: 'SOURCING',
        title2: 'GLOBAL',
        description: 'Localizamos la tecnología exacta que su planta requiere, sin importar en qué parte del mundo se encuentre. Más que buscar, encontramos soluciones.',
        image: 'recursos/per.jpeg' // Using existing image
    },
    {
        place: 'Logística Internacional',
        title: 'GESTIÓN',
        title2: 'IMPORT',
        description: 'Coordinamos el transporte marítimo, aéreo y terrestre. Nos encargamos de todos los trámites aduaneros para que su maquinaria llegue lista para operar.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000'
    },
    {
        place: 'Planta de Producción',
        title: 'PUESTA EN',
        title2: 'MARCHA',
        description: 'Nuestro equipo de ingenieros europeos garantiza una instalación impecable y la capacitación técnica necesaria para maximizar su ROI.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000'
    },
    {
        place: 'VipWell Industry',
        title: 'MAQUILA Y',
        title2: 'PRODUCCIÓN',
        description: 'Ofrecemos servicios de producción propia en nuestras instalaciones de Europa. Flexibilidad total para sus necesidades de inyección y extrusión.',
        image: 'recursos/bg.png' // Using existing background
    }
];
