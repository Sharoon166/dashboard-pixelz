import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { ScrollArea } from '../ui/scroll-area';
import { PageTransition } from './PageTransition';

const DashboardLayout = () => {
	const location = useLocation();

	return (
		<div className="flex flex-col gap-4 h-screen p-4 sm:p-8 font-poppins">
			{/* Navbar */}
			<Navbar />

			{/* Main Content */}
			<div className="flex-1 flex gap-8 overflow-hidden">
				{/* Sidebar */}
				<Sidebar />

				{/* Page Content */}
				<main className="flex-1 overflow-x-hidden overflow-y-auto pt-6 md:pt-10">
					<ScrollArea className="h-full pr-4">
						<div className="container mx-auto">
							<AnimatePresence mode="wait">
								<PageTransition key={location.pathname}>
									<Outlet />
								</PageTransition>
							</AnimatePresence>
						</div>
					</ScrollArea>
				</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
