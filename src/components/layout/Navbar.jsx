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

const Navbar = () => {
  return (
    <header className="bg-white rounded-full">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Loader className="h-6 w-6 text-indigo-500" />
          <h1 className="text-xl font-bold text-gray-800">Metrics</h1>
        </div>

        <div className="flex-1 flex items-center justify-end gap-2">
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl px-4">
            <InputGroup className="rounded-full">
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </div>
          {/* Right side icons and profile */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
            <div aria-hidden="true" aria-label="Separator" aria-orientation="vertical" role="separator" className='h-8 w-0.5 bg-gray-300 rounded-full' />
            {/* Profile dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-sm rounded-full">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
