function renderVideoComponent() {
    return `
    <!-- VIDEO SECTION -->
    <section id="videoSection" class="relative min-h-screen flex items-center overflow-hidden">
        <!-- Video Background -->
        <video id="homeVideo" class="absolute inset-0 w-full h-full object-cover z-0" muted loop playsinline preload="metadata" autoplay>
            <source src="recursos/vip.mp4" type="video/mp4">
            Tu navegador no soporta el elemento de video.
        </video>

        <!-- Overlay for better text readability -->
        <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <!-- Content -->
        <div class="container mx-auto px-4 max-w-4xl relative z-20 text-center text-white">
            <div id="videoTextContent" class="video-text-content opacity-0 transform translate-y-[-50px] transition-all duration-1000 ease-out">
                <!-- Text content removed as requested -->
            </div>
        </div>
    </section>
    `;
}