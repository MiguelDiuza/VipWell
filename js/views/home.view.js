function renderHome() {
    mainContent.innerHTML = `
        ${renderHeroComponent()}
        ${renderTrustBarComponent()}
        ${renderCicloIntegralComponent()}
        ${renderIntroSectionComponent()}
        ${renderFeaturedCatalogComponent()}
        ${renderVideoComponent()}
    `;
}
