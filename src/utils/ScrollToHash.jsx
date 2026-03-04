import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToHash component that handles scrolling to an element based on the URL hash.
 * This is useful for SPA navigation where the hash doesn't trigger a scroll by default.
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Use a small timeout to ensure the DOM is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    } else {
      // If no hash, scroll to top on page change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
