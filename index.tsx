import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './src/context/AuthContext';
import { ProtectedRoute } from './src/components/ProtectedRoute';
import { LoginPage } from './src/pages/portal/LoginPage';
import { Dashboard } from './src/pages/portal/Dashboard';
import { ActivityLog } from './src/pages/portal/ActivityLog';
import { HealthStatus } from './src/pages/portal/HealthStatus';
import { AboutPage } from './src/pages/AboutPage';
import { ServicesPage } from './src/pages/ServicesPage';
import { PlagasPage } from './src/pages/PlagasPage';
import { ContactPage } from './src/pages/ContactPage';
import App from './App';

// Componente que hace scroll to top en cada cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/plagas" element={<PlagasPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/portal/login" element={<LoginPage />} />
          <Route
            path="/portal"
            element={
              <ProtectedRoute>
                <Navigate to="/portal/dashboard" replace />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portal/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portal/activity"
            element={
              <ProtectedRoute>
                <ActivityLog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portal/health"
            element={
              <ProtectedRoute>
                <HealthStatus />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
