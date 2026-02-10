import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ROUTE_PATHS } from "@/lib/index";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Dashboard from "@/pages/Dashboard";
import Templates from "@/pages/Templates";
import MyBoards from "@/pages/MyBoards";
import Team from "@/pages/Team";
import Analytics from "@/pages/Analytics";
import Settings from "@/pages/Settings";
import Profile from "@/pages/Profile";
import Notifications from "@/pages/Notifications";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import OTP from "@/pages/auth/OTP";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

const App = () => {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    document.title = "كيان بورد | KayanBoard - AI SaaS Dashboard Builder";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MotionConfig reducedMotion="user">
          <div className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary">
            <BrowserRouter>
              <Routes>
                <Route 
                  path={ROUTE_PATHS.HOME} 
                  element={<Home />} 
                />
                <Route 
                  path={ROUTE_PATHS.PRICING} 
                  element={<Pricing />} 
                />
                <Route 
                  path={ROUTE_PATHS.ABOUT} 
                  element={<About />} 
                />
                <Route 
                  path={ROUTE_PATHS.DASHBOARD} 
                  element={<ProtectedRoute><Dashboard /></ProtectedRoute>} 
                />
                <Route 
                  path={ROUTE_PATHS.TEMPLATES} 
                  element={<ProtectedRoute><Templates /></ProtectedRoute>} 
                />
                <Route 
                  path={ROUTE_PATHS.MY_BOARDS} 
                  element={<ProtectedRoute><MyBoards /></ProtectedRoute>} 
                />
                <Route 
                  path={ROUTE_PATHS.TEAM} 
                  element={<ProtectedRoute><Team /></ProtectedRoute>} 
                />
                <Route 
                  path={ROUTE_PATHS.ANALYTICS} 
                  element={<ProtectedRoute><Analytics /></ProtectedRoute>} 
                />
                <Route 
                  path={ROUTE_PATHS.SETTINGS} 
                  element={<ProtectedRoute><Settings /></ProtectedRoute>} 
                />
                <Route 
                  path={ROUTE_PATHS.PROFILE} 
                  element={<ProtectedRoute><Profile /></ProtectedRoute>} 
                />
                <Route 
                  path={ROUTE_PATHS.NOTIFICATIONS} 
                  element={<ProtectedRoute><Notifications /></ProtectedRoute>} 
                />
                <Route 
                  path={ROUTE_PATHS.LOGIN} 
                  element={<Login />} 
                />
                <Route 
                  path={ROUTE_PATHS.REGISTER} 
                  element={<Register />} 
                />
                <Route 
                  path={ROUTE_PATHS.FORGOT_PASSWORD} 
                  element={<ForgotPassword />} 
                />
                <Route 
                  path={ROUTE_PATHS.OTP} 
                  element={<OTP />} 
                />
                <Route 
                  path={ROUTE_PATHS.TERMS} 
                  element={<TermsOfService />} 
                />
                <Route 
                  path={ROUTE_PATHS.PRIVACY} 
                  element={<PrivacyPolicy />} 
                />
                
                <Route 
                  path="*" 
                  element={<Navigate to={ROUTE_PATHS.HOME} replace />} 
                />
              </Routes>
            </BrowserRouter>
            
            <Toaster />
            <Sonner 
              position="top-center" 
              expand={false} 
              richColors 
              closeButton
              theme="light"
            />
          </div>
        </MotionConfig>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;