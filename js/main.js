window.initCicloIntegralAnimation = initCicloIntegralAnimation;
window.cicloStep = cicloStep;

// Video controls
function initVideoControls() {
    console.log('Initializing video controls...');

    // Handle home video (about video now has manual controls)
    const homeVideo = document.getElementById('homeVideo');
    const homeTextContent = document.getElementById('videoTextContent');

    if (homeVideo) {
        // Add video event listeners for debugging and animations
        homeVideo.addEventListener('loadstart', () => console.log('Home video loadstart'));
        homeVideo.addEventListener('loadeddata', () => console.log('Home video loadeddata'));
        homeVideo.addEventListener('canplay', () => console.log('Home video canplay'));
        homeVideo.addEventListener('play', () => {
            console.log('Home video started playing');
            // Animate text when video starts playing
            if (homeTextContent) {
                homeTextContent.classList.remove('opacity-0', 'translate-y-[-50px]');
                homeTextContent.classList.add('opacity-100', 'translate-y-0');
            }
        });
        homeVideo.addEventListener('pause', () => console.log('Home video paused'));
        homeVideo.addEventListener('error', (e) => console.log('Home video error:', e));
    }
}

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
                    console.log(`Playing video ${video.id}`);
                    video.play().catch(e => {
                        console.log('Video autoplay failed:', e);
                    });
                } else if (!entry.isIntersecting) {
                    console.log(`Pausing video ${video.id}`);
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
};
