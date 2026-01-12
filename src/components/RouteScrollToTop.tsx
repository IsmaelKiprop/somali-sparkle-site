import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior, block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, search, hash]);

  return null;
};

export default RouteScrollToTop;
