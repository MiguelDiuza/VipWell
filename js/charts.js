function initProductRadarChart(product) {
    setTimeout(() => {
        const canvas = document.getElementById('productRadarChart');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: appData.metricsLabels,
                datasets: [{
                    label: 'Rendimiento Serie VIPWELL',
                    data: product.metrics,
                    backgroundColor: 'rgba(249, 115, 22, 0.2)',
                    borderColor: 'rgba(249, 115, 22, 1)',
                    pointBackgroundColor: 'rgba(249, 115, 22, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Promedio Industria',
                    data: [70, 70, 70, 70, 70],
                    backgroundColor: 'rgba(148, 163, 184, 0.1)',
                    borderColor: 'rgba(148, 163, 184, 0.5)',
                    pointBackgroundColor: 'transparent',
                    borderWidth: 1,
                    borderDash: [5, 5]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        pointLabels: { color: 'rgba(255, 255, 255, 0.7)', font: { size: 10 } },
                        ticks: { display: false, backdropColor: 'transparent' },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: { display: true, labels: { color: 'white', font: { size: 10 } } }
                }
            }
        });
    }, 100);
}

function initAboutCharts() {
    setTimeout(() => {
        const canvas = document.getElementById('globalChart');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Venta Maquinaria', 'Servicio Maquila', 'Gestión Importación'],
                datasets: [{
                    label: 'Volumen de Actividad',
                    data: [50, 30, 20],
                    backgroundColor: [
                        '#1e3a8a', // Blue
                        '#f97316', // Orange
                        '#64748b', // Gray
                    ],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { callbacks: { label: (c) => `${c.raw}% del negocio` } }
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { callback: (v) => v + '%' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }, 100);
}
