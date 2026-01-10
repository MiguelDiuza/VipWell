window.initCicloIntegralAnimation = initCicloIntegralAnimation;
window.cicloStep = cicloStep;

// Parallax effect for video background (only for home page)
function initVideoParallax() {
    const homeVideo = document.getElementById('homeVideo');
    const homeVideoSection = document.getElementById('videoSection');

    if (!homeVideo || !homeVideoSection) return;

    function updateParallax() {
        const scrollY = window.scrollY;
        const sectionTop = homeVideoSection.offsetTop;
        const sectionHeight = homeVideoSection.offsetHeight;

        // Only apply parallax when the section is in view
        if (scrollY >= sectionTop - window.innerHeight && scrollY <= sectionTop + sectionHeight) {
            const parallaxOffset = (scrollY - sectionTop) * 0.5; // Adjust speed with multiplier
            homeVideo.style.transform = `translateY(${parallaxOffset}px)`;
        }
    }

    // Throttle scroll events for better performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial call
    updateParallax();
}

// Intersection Observer for auto-playing videos when in viewport
function initVideoIntersectionObserver() {
    console.log('Initializing video intersection observer...');

    // Small delay to ensure DOM is updated
    setTimeout(() => {
        console.log('Setting up intersection observer after delay...');

        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                console.log(`Video ${video.id} intersection:`, entry.isIntersecting, entry.intersectionRatio);

                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    // console.log(`In viewport: ${video.id}`);
                    // Removed auto-play for homeVideo to allow manual play with audio
                    if (video.id !== 'homeVideo') {
                        video.play().catch(e => console.log('Autoplay failed:', e));
                    }
                } else if (!entry.isIntersecting) {
                    // console.log(`Pausing video ${video.id}`);
                    video.pause();
                }
            });
        }, {
            threshold: [0.1, 0.3, 0.5], // Multiple thresholds for better detection
            rootMargin: '0px 0px -50px 0px' // Trigger when video is near viewport
        });

        // Observe only home video (about video now has manual controls)
        const homeVideo = document.getElementById('homeVideo');

        console.log('Found video elements:', { homeVideo: !!homeVideo });

        if (homeVideo) {
            videoObserver.observe(homeVideo);
            console.log('Observing home video');
        }
    }, 500); // Longer delay to ensure videos are loaded
}

// Video controls
function initVideoControls() {
    console.log('Initializing video controls...');

    // Handle home video (about video now has manual controls)
    const homeVideo = document.getElementById('homeVideo');
    const homeTextContent = document.getElementById('videoTextContent');

    if (homeVideo) {
        const updateUI = (state) => {
            const btn = document.getElementById('videoPlayBtn');
            const videoIcon = document.getElementById('videoIcon');
            const overlay = document.getElementById('videoOverlay');

            if (state === 'playing') {
                if (btn) btn.style.opacity = "0.3";
                if (videoIcon) {
                    videoIcon.className = 'fas fa-pause text-3xl group-hover:scale-110 transition-transform';
                }
                if (overlay) overlay.classList.add('opacity-0');
            } else {
                if (btn) btn.style.opacity = "1";
                if (videoIcon) {
                    videoIcon.className = 'fas fa-play text-3xl ml-1 group-hover:scale-110 transition-transform';
                }
                if (overlay) overlay.classList.remove('opacity-0');
            }
        };

        // Click on section to toggle
        const videoSection = document.getElementById('videoSection');
        if (videoSection) {
            videoSection.style.cursor = 'pointer';
            videoSection.onclick = (e) => {
                // Only toggle if not clicking the button itself (which has its own toggleHomeVideo)
                if (e.target.closest('#videoPlayBtn')) return;
                if (typeof window.toggleHomeVideo === 'function') {
                    window.toggleHomeVideo();
                }
            };
        }

        homeVideo.onplay = () => updateUI('playing');
        homeVideo.onpause = () => updateUI('paused');
        homeVideo.onended = () => updateUI('ended');

        // Robust end detection
        homeVideo.ontimeupdate = () => {
            if (homeVideo.duration && homeVideo.currentTime >= homeVideo.duration - 0.1) {
                if (!homeVideo.paused) {
                    homeVideo.pause();
                    updateUI('ended');
                }
            }
        };

        homeVideo.addEventListener('error', (e) => console.log('Home video error:', e));
    }
}

// Initial Render
window.addEventListener('DOMContentLoaded', () => {
    // Check for deep linking in URL hash or similar could go here
    if (typeof navigateTo === 'function') {
        navigateTo('home');
    }
});

// Initialize video controls when navigating to home
window.initHomeVideoControls = () => {
    console.log('initHomeVideoControls called');
    initVideoControls();
    initVideoIntersectionObserver();
    initVideoParallax();
};
