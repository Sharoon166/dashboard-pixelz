import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Orders', icon: ShoppingCart, path: '/documents', badge: '12' },
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

const NavGroup = ({ title, items, isCollapsed }) => {
  const location = useLocation();
  
  return (
    <div className="px-3 ">
      {!isCollapsed && (
        <h3 className="text-sm text-muted-foreground font-medium  tracking-wider">
          {title}
        </h3>
      )}
      <nav className="mt-2">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`relative group flex items-center px-2 py-3 text-sm font-medium rounded-md ${
              location.pathname === item.path
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon 
              className={`mr-3 flex-shrink-0 h-5 w-5 ${
                location.pathname === item.path 
                  ? 'text-indigo-600' 
                  : 'text-gray-400 group-hover:text-gray-500'
              }`}
              aria-hidden="true"
            />
            {!isCollapsed && item.name}
            {item.badge && (isCollapsed ? (
              <span className="absolute top-2 right-0 size-2 rounded-full bg-indigo-500"/>) : (
              <span className={cn("ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white bg-indigo-500")}>
                {item.badge}
              </span>)
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} bg-white  flex flex-col h-full rounded-3xl transition-all duration-300 relative`}>
      <div className="flex-1 flex flex-col pt-14 pb-4 overflow-y-auto">
        <div className="">
          <Button
            onClick={() => setIsCollapsed(!isCollapsed)}
            variant="ghost"
            size="icon"
            className={cn("absolute top-2 right-2 border-2 rounded-full", {
              "-translate-x-1/2": isCollapsed,
            })}
          >
            {isCollapsed ? (
              <ChevronRight />
            ) : (
              <ChevronLeft />
            )}
          </Button>
        </div>

        <div className="px-2 space-y-1">
          <NavGroup 
            title="Menu" 
            items={menuItems} 
            isCollapsed={isCollapsed} 
          />
          
          <div className="mt-6">
            <NavGroup 
              title="Tools" 
              items={toolsItems} 
              isCollapsed={isCollapsed} 
            />
          </div>
          
          <div className="mt-6">
            <NavGroup 
              title="Support" 
              items={supportItems} 
              isCollapsed={isCollapsed} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
