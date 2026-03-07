/**
 * Seif Studios - Shared UI Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // ─── FADE-IN ON SCROLL ───
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach((el, i) => {
        if (!el.style.transitionDelay) {
            el.style.transitionDelay = `${(i % 4) * 100}ms`;
        }
        observer.observe(el);
    });
});
