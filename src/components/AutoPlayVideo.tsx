import { useRef, useEffect, forwardRef } from 'react';

const AutoPlayVideo = forwardRef<HTMLVideoElement, React.VideoHTMLAttributes<HTMLVideoElement>>(({ children, ...props }, forwardedRef) => {
  const internalRef = useRef<HTMLVideoElement>(null);
  
  const setRefs = (node: HTMLVideoElement | null) => {
    if (!node) return;
    internalRef.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && internalRef.current) {
          internalRef.current.play().catch(() => {});
        } else if (!entry.isIntersecting && internalRef.current) {
          internalRef.current.pause();
        }
      });
    }, { threshold: 0.5 });

    if (internalRef.current) {
      observer.observe(internalRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <video ref={setRefs} muted loop playsInline controls {...props} />
      {children}
    </>
  );
});

export default AutoPlayVideo;
