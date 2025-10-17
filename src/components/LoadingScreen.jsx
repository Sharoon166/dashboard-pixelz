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
              scale: 2,
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
            className="px-4 py-2 rounded-full bg-white flex items-center justify-center gap-2"
          >
            <Loader className="h-8 w-8 text-indigo-600 " />
            <motion.h1 
              className="text-xl font-medium text-gray-800 flex overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {"Metrics".split('').map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ 
                    opacity: 0, 
                    y: 10,
                    filter: 'blur(4px)'
                  }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    y: [10, 0, 0, -15],
                    filter: ['blur(4px)', 'blur(0px)', 'blur(0px)', 'blur(2px)'],
                    transition: {
                      duration: 2.2,
                      ease: [0.4, 0, 0.2, 1],
                      times: [0, 0.15, 0.7, 1],
                      delay: 0.4 + (i * 0.08),
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}