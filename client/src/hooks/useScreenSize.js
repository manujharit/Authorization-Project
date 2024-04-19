import { useState, useEffect } from 'react'

const useScreenSize = () => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth } = window;
            setIsMobileOrTablet(innerWidth > 1024); // Adjust this value based on your tablet breakpoint
        };

        handleResize(); // Initial call to set the initial state
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobileOrTablet;
}

export default useScreenSize