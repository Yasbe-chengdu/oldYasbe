'use client';

import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

export default function LottiePlayer({ source }: any) {
  const container = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    let isMounted = true;
    if (animationRef.current) return;
    if (isMounted && container.current) {
      import('../public/animations/' + source).then(animationData => {
        animationRef.current = lottie.loadAnimation({
          container: container.current!,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData.default,
        });
      });
    }

    return () => {
      isMounted = false;
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, []);

  return <div ref={container} style={{ width: '100%', height: '100%' }} />;
}
