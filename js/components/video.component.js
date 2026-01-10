function renderVideoComponent() {
    return `
    <!-- VIDEO SECTION -->
    <section id="videoSection" class="relative min-h-screen flex items-center overflow-hidden bg-black">
        <!-- Video Background (No Autoplay/Muted to allow audio with user interaction) -->
        <video id="homeVideo" class="absolute inset-0 w-full h-full object-cover z-0" playsinline preload="metadata">
            <source src="recursos/vip.mp4" type="video/mp4">
            Tu navegador no soporta el elemento de video.
        </video>

        <!-- Overlay for better text readability and interaction -->
        <div class="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500" id="videoOverlay"></div>

        <!-- Play/Pause Button Central -->
        <div id="videoControlsOverlay" class="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            <button id="videoPlayBtn" onclick="toggleHomeVideo()" class="pointer-events-auto bg-orange-600/90 hover:bg-orange-500 text-white w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transform transition-all hover:scale-110 active:scale-95 group">
                <i id="videoIcon" class="fas fa-play text-3xl ml-1 group-hover:scale-110 transition-transform"></i>
            </button>
        </div>

        <!-- Content -->
        <div class="container mx-auto px-4 max-w-4xl relative z-20 text-center text-white pointer-events-none">
            <div id="videoTextContent" class="video-text-content opacity-0 transform translate-y-[-50px] transition-all duration-1000 ease-out">
                <!-- Text content here if needed -->
            </div>
        </div>
    </section>
    `;
}

// Global Toggle Function
window.toggleHomeVideo = function () {
    const video = document.getElementById('homeVideo');
    const videoIcon = document.getElementById('videoIcon');
    const overlay = document.getElementById('videoOverlay');
    const btn = document.getElementById('videoPlayBtn');

    if (!video || !videoIcon) return;

    if (video.paused) {
        video.play();
        videoIcon.classList.replace('fa-play', 'fa-pause');
        videoIcon.classList.remove('ml-1');
        if (overlay) overlay.classList.add('opacity-0');
        // El botón se mantiene pero más sutil
        btn.style.opacity = "0.3";
    } else {
        video.pause();
        videoIcon.classList.replace('fa-pause', 'fa-play');
        videoIcon.classList.add('ml-1');
        if (overlay) overlay.classList.remove('opacity-0');
        btn.style.opacity = "1";
    }
};
