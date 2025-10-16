import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, MessageCircle, ChevronDown, Loader } from 'lucide-react';
import { Input } from '../ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.header
      className="bg-white rounded-full overflow-hidden"
      initial={{ width: 'fit-content' }}
      animate={{
        width: isMounted ? '100%' : 'fit-content',
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
    >
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          layoutId="logo"  // This matches the loading screen logo's layoutId
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            duration: 0.5
          }}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5 }
          }}
        >
          <Loader className="h-6 w-6 text-indigo-500" />
          <h1
            className="text-xl font-medium text-gray-800"
          >
            Metrics
          </h1>
        </motion.div>

        <AnimatePresence>
          {isMounted && (
            <motion.div
              className="flex-1 flex items-center justify-end gap-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              {/* Search Bar */}
              <motion.div
                className="flex-1 max-w-2xl px-4"
                initial={{ opacity: 0, y: -5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7 }
                }}
              >
                <InputGroup className="rounded-full">
                  <InputGroupInput placeholder="Search..." />
                  <InputGroupAddon>
                    <Search />
                  </InputGroupAddon>
                </InputGroup>
              </motion.div>
              {/* Right side icons and profile */}
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: -5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.8,
                    staggerChildren: 0.1
                  }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.85 }}
                >
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <Button variant="ghost" size="icon" className="rounded-full relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                  </Button>
                </motion.div>
                <motion.div
                  aria-hidden="true"
                  aria-label="Separator"
                  className='h-8 w-0.5 bg-gray-300 rounded-full'
                  initial={{ opacity: 0, scaleY: 0.5 }}
                  animate={{
                    opacity: 1,
                    scaleY: 1,
                    transition: { delay: 0.95 }
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-sm rounded-full">
                        <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                          <span>JD</span>
                        </div>
                        <div className="ml-2 hidden md:flex items-center">
                          <span className="text-sm font-medium text-gray-700">John Doe</span>
                        </div>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">John Doe</p>
                          <p className="text-xs leading-none text-muted-foreground">
                            Admin
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        Your Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        Sign out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
