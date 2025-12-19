import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export function useCountUp(
  target: number,
  options?: {
    duration?: number;
    decimals?: number;
    delay?: number;
  }
) {
  const { duration = 1, decimals = 0, delay = 0 } = options || {};
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.3, 0.3, 0, 1],
      onUpdate: (v) => setValue(Number(v.toFixed(decimals))),
    });

    return () => controls.stop();
  }, [target, duration, decimals, delay]);

  return value;
}
