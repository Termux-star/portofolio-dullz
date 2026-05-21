document.addEventListener('DOMContentLoaded', () => {
    // 1. Interaction for Neubrutalism Buttons
    const buttons = document.querySelectorAll('.neubrutalism-button');
    buttons.forEach(btn => {
        const reset = () => {
            btn.style.transform = 'translate(0px, 0px)';
            btn.style.boxShadow = '4px 4px 0px 0px #000';
        };

        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'translate(4px, 4px)';
            btn.style.boxShadow = '0px 0px 0px 0px #000';
        });
        btn.addEventListener('mouseup', reset);
        btn.addEventListener('mouseleave', reset);
        btn.addEventListener('blur', reset);
    });

    // 2. Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return; // jangan preventDefault untuk href="#"

            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Intersection Observer (Scroll Reveal)
    const revealOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
});