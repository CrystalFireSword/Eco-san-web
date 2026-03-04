import { useEffect } from "react";

/**
 * useScrollAnimation hook to handle intersection observer animations.
 * @param {string} selector - CSS selector for elements to observe.
 * @param {string} animationClass - Class to add when element is intersecting.
 */
export const useScrollAnimation = (selector = ".scroll-fade", animationClass = "animate-fade-up") => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            // Optionally unobserve after animating
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, animationClass]);
};

export default useScrollAnimation;
