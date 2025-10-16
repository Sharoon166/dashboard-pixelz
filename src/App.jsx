import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardPage from '@/pages/DashboardPage';
import UsersPage from '@/pages/UsersPage';
import ReportsPage from '@/pages/ReportsPage';
import DocumentsPage from '@/pages/DocumentsPage';
import SettingsPage from '@/pages/SettingsPage';
import HelpPage from '@/pages/HelpPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="logout" element={<div>Logging out...</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}