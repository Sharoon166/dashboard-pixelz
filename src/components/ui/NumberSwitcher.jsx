import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const NumberSwitcher = ({ value, className = '' }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (value !== displayValue) {
      setDirection(value > displayValue ? 1 : -1);
      setDisplayValue(value);
    }
  }, [value, displayValue]);

  const variants = {
    enter: (dir) => ({
      y: dir > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: (dir) => ({
      y: dir > 0 ? -20 : 20,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}>
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.span
          key={displayValue}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="inline-block"
        >
          {displayValue}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default NumberSwitcher;