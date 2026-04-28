import type { Variants, Transition } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export const softScale: Variants = {
  rest: { scale: 1 },
  pressed: { scale: 0.96 },
};

export const bounceIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: [0.8, 1.1, 1],
    opacity: 1,
    transition: { duration: 0.35, times: [0, 0.6, 1] },
  },
};

export const checkboxBounce: Variants = {
  unchecked: { scale: 1 },
  checked: {
    scale: [1, 1.25, 1],
    transition: { duration: 0.22, times: [0, 0.5, 1] },
  },
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 22,
};

export const tweenSoft: Transition = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1],
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: tweenSoft },
  exit: { opacity: 0, y: -8, transition: tweenSoft },
};

export const floatY: Variants = {
  float: {
    y: [0, -6, 0],
    transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
  },
};
