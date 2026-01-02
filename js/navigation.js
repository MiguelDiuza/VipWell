function navigateTo(viewName, productId = null) {
    currentState.view = viewName;

    // Update Nav Classes
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`nav-${viewName}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Render Content
    if (mainContent) mainContent.innerHTML = '';
    window.scrollTo(0, 0);

    switch (viewName) {
        case 'home': renderHome(); break;
        case 'catalog': renderCatalog(); break;
        case 'services': renderServices(); break;
        case 'about': renderAbout(); break;
        case 'contact': renderContact(); break;
        default: renderHome();
    }

    // Re-run scripts/charts if needed
    if (viewName === 'home') {
        if (typeof initCicloIntegralAnimation === 'function') {
            initCicloIntegralAnimation();
        }
        initParallax();
    }
    if (viewName === 'about') initAboutCharts();

    // Deep Linking: Open product modal if ID is provided
    if (viewName === 'catalog' && productId) {
        setTimeout(() => {
            openProductModal(productId);
        }, 300); // Small delay to ensure catalog is rendered
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}
