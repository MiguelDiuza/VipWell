window.initCicloIntegralAnimation = initCicloIntegralAnimation;
window.cicloStep = cicloStep;

// Initial Render
window.addEventListener('DOMContentLoaded', () => {
    // Check for deep linking in URL hash or similar could go here
    if (typeof navigateTo === 'function') {
        navigateTo('home');
    }
});
