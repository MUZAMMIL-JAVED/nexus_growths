import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

const lenisOptions = {
  autoRaf: true,
  lerp: 0.08,
  duration: 1.4,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.5,
  anchors: true,
  syncTouch: true,
};

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
