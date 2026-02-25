// lib/animations.ts
import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: (custom: number) => ({ 
    opacity: 1, 
    transition: { duration: 0.4, delay: custom } 
  })
};

export const slideIn: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -10, transition: { duration: 0.2 } }
};
