import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    setIsMobileOrTablet(mediaQuery.matches);

    const handleChange = (e) => {
      setIsMobileOrTablet(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return isMobileOrTablet;
};

export default useScreenSize;