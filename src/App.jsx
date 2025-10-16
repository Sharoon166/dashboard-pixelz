import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardPage from '@/pages/DashboardPage';
import UsersPage from '@/pages/UsersPage';
import ReportsPage from '@/pages/ReportsPage';
import DocumentsPage from '@/pages/DocumentsPage';
import OrdersPage from '@/pages/OrdersPage';
import SettingsPage from '@/pages/SettingsPage';
import HelpPage from '@/pages/HelpPage';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <>
      {isLoading && <LoadingScreen />}
      <AnimatePresence mode='wait'>
        {!isLoading && (
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route element={<DashboardLayout />}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="reports" element={<ReportsPage />} />
                <Route path="documents" element={<DocumentsPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="help" element={<HelpPage />} />
                <Route path="logout" element={<div>Logging out...</div>} />
              </Route>
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Router>
        )}
      </AnimatePresence>
    </>
  );
}