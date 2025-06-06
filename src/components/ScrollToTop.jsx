import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current location object, which contains the pathname
  const { pathname } = useLocation();

  // This effect runs every time the pathname changes
  useEffect(() => {
    // Scroll the window to the top left corner (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // The effect depends on the pathname

  // This component doesn't render anything, it just performs an action
  return null;
};

export default ScrollToTop; 