import { motion, AnimatePresence } from 'framer-motion';
import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading"
            layoutId="logo"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.5, 
              ease: [0.4, 0, 0.2, 1] 
            }
          }}
          className="fixed inset-0 bg-[#eff1f5] z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: 1,
              opacity: 1,
              transition: { 
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                scale: { 
                  type: 'spring', 
                  stiffness: 260, 
                  damping: 20 
                }
              }
            }}
            exit={{ 
              scale: 1.1,
              opacity: 0,
              transition: { 
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1] 
              }
            }}
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
          >
            <Loader className="h-8 w-8 text-indigo-600 animate-spin" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}