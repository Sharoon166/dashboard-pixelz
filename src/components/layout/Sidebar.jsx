import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  BarChart3,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ShoppingCart
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24
    }
  },
  exit: { opacity: 0, x: -20 },
};

const collapseVariant = {
  expanded: { width: '16rem' },
  collapsed: { width: '5rem' }
};

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Orders', icon: ShoppingCart, path: '/orders', badge: 12 },
  { name: 'Documents', icon: FileText, path: '/documents' },
  { name: 'Users', icon: Users, path: '/users' },
  { name: 'Reports', icon: BarChart3, path: '/reports' },
];

const toolsItems = [
  { name: 'Settings', icon: Settings, path: '/settings' },
];

const supportItems = [
  { name: 'Help & Support', icon: HelpCircle, path: '/help' },
  { name: 'Logout', icon: LogOut, path: '/logout' },
];

const NavItem = ({ item, isActive, isCollapsed }) => {
  return (
    <motion.div 
      className="relative"
      variants={{
        hidden: { opacity: 0, x: -20 },
        show: { 
          opacity: 1, 
          x: 0,
          transition: { type: 'spring', stiffness: 300, damping: 20 }
        }
      }}
    >
      <Link
        to={item.path}
        className={`group flex items-center justify-center px-2 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
          isActive
            ? 'bg-indigo-50 text-indigo-600'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center w-full"
        >
          <div className="relative">
            <item.icon
              className={`flex-shrink-0 h-5 w-5 ${
                isActive
                  ? 'text-indigo-600'
                  : 'text-gray-400 group-hover:text-gray-500'
              }`}
              aria-hidden="true"
            />
            {item.badge && isCollapsed && (
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-indigo-500"></span>
            )}
          </div>
          
          {!isCollapsed && (
            <motion.span 
              className="ml-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              {item.name}
              {item.badge && (
                <span className="ml-2 inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 rounded-full bg-indigo-500 text-white text-xs">
                  {item.badge}
                </span>
              )}
            </motion.span>
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
};

const NavGroup = ({ title, items, isCollapsed, delay = 0 }) => {
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Staggered variants for list items
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay + 0.1, // Add base delay
      },
    },
  };

  return (
    <motion.div 
      className="px-3"
      initial={false}
      animate={'show'}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            when: 'beforeChildren',
            staggerChildren: 0.05,
            delayChildren: 0.1
          }
        }
      }}
    >
      {!isCollapsed && (
        <motion.h3 
          className="text-sm text-muted-foreground font-medium tracking-wider mb-2"
          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
          animate={{
            opacity: 1,
            height: 'auto',
            marginBottom: '0.5rem',
            transition: { 
              duration: 0.2,
              ease: 'easeOut'
            }
          }}
          exit={{ 
            opacity: 0, 
            height: 0,
            marginBottom: 0,
            transition: { 
              duration: 0.15,
              ease: 'easeIn'
            }
          }}
          layout
        >
          {title}
        </motion.h3>
      )}
      <motion.ul className="space-y-1">
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.li
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }
              }}
              exit={{
                opacity: 0,
                x: -20,
                transition: { duration: 0.15 }
              }}
              layout
            >
              <NavItem 
                item={item} 
                isActive={location.pathname === item.path}
                isCollapsed={isCollapsed}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </motion.div>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div 
      className={"bg-white flex flex-col h-full rounded-3xl overflow-hidden relative"}
      initial={false}
      animate={isCollapsed ? 'collapsed' : 'expanded'}
      variants={collapseVariant}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="flex-1 flex flex-col pt-14 pb-4 overflow-y-auto">
        <motion.div 
          className="absolute top-2 right-2 z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => setIsCollapsed(!isCollapsed)}
            variant="ghost"
            size="icon"
            className={cn("border-2 rounded-full transition-all duration-200", {
              "-translate-x-1/2": isCollapsed,
              "bg-white shadow-md": isCollapsed,
            })}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </motion.div>

        <div className="px-2 space-y-6">
          <NavGroup
            title="Menu"
            items={menuItems}
            isCollapsed={isCollapsed}
          />

          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <NavGroup
              title="Tools"
              items={toolsItems}
              isCollapsed={isCollapsed}
            />
          </motion.div>

          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <NavGroup
              title="Support"
              items={supportItems}
              isCollapsed={isCollapsed}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
