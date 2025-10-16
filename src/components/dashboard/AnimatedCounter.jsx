import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NumberSwitcher from '../ui/NumberSwitcher';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const AnimatedCounter = ({
  target,
  title,
  icon: Icon,
  color = 'text-indigo-500',
  bgColor = 'bg-indigo-100',
  change = '',
  trend = 'up'
}) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(target);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [target]);

  return (
    <motion.div 
      className={`p-4 rounded-2xl ${bgColor} flex items-center gap-4`}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className={`p-3 rounded-xl ${color} bg-white`}
        animate={{ 
          rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 10 }}
      >
        <Icon className="h-6 w-6" />
      </motion.div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-800">
            <NumberSwitcher value={count} />
          </span>
          {count === target && (
            <motion.span 
              className="text-sm text-green-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              +{Math.floor(Math.random() * 20)}% from last month
            </motion.span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;
