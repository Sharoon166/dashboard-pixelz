import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { ScrollArea } from '../ui/scroll-area';

const DashboardLayout = () => {
    return (
        <div className="flex flex-col gap-4 h-screen bg-[#eff1f5] p-4 sm:p-8 font-poppins">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex-1 flex gap-8 overflow-hidden">
                {/* Sidebar */}
                <Sidebar />

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto pt-6 md:pt-10">
                    <ScrollArea className="h-full">
                        <div className="container mx-auto">
                            <Outlet />
                        </div>
                    </ScrollArea>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
