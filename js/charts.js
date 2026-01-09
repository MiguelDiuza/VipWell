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
    // Video now has autoplay attribute, no manual play needed
}
