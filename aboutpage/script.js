document.addEventListener('DOMContentLoaded', () => {
    const timelineLine = document.querySelector('.timeline-line');
    const timelineProgress = document.querySelector('.timeline-progress');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    let lastScrollPosition = window.pageYOffset;
    
    const updateProgress = () => {
        const currentScroll = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        
        
        const progress = Math.min((currentScroll / documentHeight) * 100, 100);
        timelineProgress.style.height = `${progress}%`;
        
        
        timelineItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top < windowHeight * 0.8;
            
            if (isVisible) {
                item.classList.add('visible');
                item.style.transitionDelay = `${index * 0.2}s`;
            } else if (currentScroll < lastScrollPosition) {
                item.style.transitionDelay = `${(timelineItems.length - index) * 0.2}s`;
                if (rect.top > windowHeight) {
                    item.classList.remove('visible');
                }
            }
        });
        
        lastScrollPosition = currentScroll;
    };

    
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateProgress();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    updateProgress();
});
