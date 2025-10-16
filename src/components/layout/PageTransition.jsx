import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    visibility: 'hidden',
  },
  in: {
    opacity: 1,
    y: 0,
    visibility: 'visible',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      when: 'beforeChildren',
    }
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
    transitionEnd: {
      visibility: 'hidden',
    }
  }
};

export const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Reset visibility when children change (route changes)
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [children]);

  return (
    <motion.div
      initial="initial"
      animate={isVisible ? "in" : "initial"}
      exit="out"
      variants={pageVariants}
      className="w-full h-full"
      style={{
        visibility: isVisible ? 'visible' : 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
};