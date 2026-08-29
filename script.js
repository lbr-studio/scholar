document.addEventListener("DOMContentLoaded", () => {
    const animatedItems = document.querySelectorAll(
        ".animate, .animate-left, .animate-right, .animate-pop, .animate-zoom"
    );

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
        animatedItems.forEach(item => item.classList.add("show"));
        return;
    }

    const checkAnimations = () => {
        animatedItems.forEach(item => {
            const rect = item.getBoundingClientRect();

            if (
                rect.top < window.innerHeight - 100 &&
                rect.bottom > 100
            ) {
                item.classList.add("show");
            } else {
                item.classList.remove("show");
            }
        });
    };

    let animationFramePending = false;

    const requestAnimationCheck = () => {
        if (animationFramePending) {
            return;
        }

        animationFramePending = true;

        window.requestAnimationFrame(() => {
            checkAnimations();
            animationFramePending = false;
        });
    };

    checkAnimations();

    window.addEventListener("load", checkAnimations);
    window.addEventListener("scroll", requestAnimationCheck, {
        passive: true
    });
    window.addEventListener("resize", requestAnimationCheck);
});