import { useEffect, useState } from 'react';

export const useDetectDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouchCapability =
        'ontouchstart' in window || navigator.maxTouchPoints > 0;

      const isMobileUserAgent = /Mobi|Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent,
      );

      setIsTouchDevice(hasTouchCapability || isMobileUserAgent);
    };

    checkTouchDevice();

    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  return isTouchDevice;
};
