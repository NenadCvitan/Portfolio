document.addEventListener('DOMContentLoaded', function() {
    // Progress Bars Animation
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(progressBar => {
        let width = 0;
        const targetWidth = parseInt(progressBar.getAttribute('data-width')) || 0;
        const interval = setInterval(() => {
            if (width < targetWidth) {
                width++;
                progressBar.style.width = width + '%';
            } else {
                clearInterval(interval);
            }
        }, 10);
    });

    // Smooth Scroll und Aktive Links
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.getElementById(href.substring(1));
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href.startsWith('#') && href.substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });

    // Skills Interaktivität
    const skills = document.querySelectorAll('.skill-item');
    const skillDetails = document.querySelector('.skill-details');

    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            const skillName = skill.getAttribute('data-skill-name');
            skillDetails.innerHTML = `<h3>${skillName}</h3><p>Mehr Details über ${skillName} kommen hier hin.</p>`;
            skillDetails.classList.add('show');
        });
    });

    skillDetails.addEventListener('click', (event) => {
        if (event.target === skillDetails) {
            skillDetails.classList.remove('show');
        }
    });

    // Navbar Scroll-Verhalten
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    const scrollThreshold = 50;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > scrollThreshold) {
            if (currentScrollY > lastScrollY) {
                nav.style.transform = 'translateY(-100%)';
                header.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
                header.style.transform = 'translateY(0)';
            }
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation für Skills beim Laden
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 200);
    });
});
