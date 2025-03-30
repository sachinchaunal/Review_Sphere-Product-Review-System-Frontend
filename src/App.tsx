import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useColorSchemeStore } from "./stores/colorSchemeStore";
import { useEffect } from "react";
import useAxiosInterceptors from "./hooks/useAxiosInterceptors";
import ProtectedRoute from "./pages/user/ProtectedRoute";
import ResetPasswordPage from "./pages/user/ResetPasswordPage";
import { useAuthStore } from "./stores/authStore";
import ProfilePage from "./pages/user/Profile";
import SignInPage from "./pages/user/SignIn";
import SignUpPage from "./pages/user/SignUp";
import HomePage from "./pages/Home";
import ChangePasswordPage from "./pages/user/ChangePasswordPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRouteWrapper from "./pages/admin/AdminRouteWrapper";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminRegister from "./pages/admin/AdminRegister";
import AdminLayout from "./pages/admin/AdminLayout";
import UsersPage from "./pages/admin/Users";
import ModeratorPage from "./pages/admin/Moderators";
import AuditReviewsPage from "./pages/admin/AuditReview";
import ProductPage from "./pages/admin/Products";
import ProductDetailPage from "./pages/ProductDetail";
import AboutPage from "./pages/About";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

const queryClient = new QueryClient();
const App = () => {
  const { setDarkMode } = useColorSchemeStore();
  const { isAuthenticated } = useAuthStore();
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [setDarkMode]);

  useAxiosInterceptors();
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Main App Routes */}
          <Route element={<Header />}>
            <Route path="/products" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
          </Route>
          
          {/* User Auth Routes */}
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/products" /> : <SignUpPage />}
          />
          <Route
            path="/signin"
            element={isAuthenticated ? <Navigate to="/products" /> : <SignInPage />}
          />
          <Route
            path="/reset-password"
            element={isAuthenticated ? <Navigate to="/products" /> : <ResetPasswordPage />}
          />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          
          {/* Other Routes */}
          <Route path="/about" element={<AboutPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/signin" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route element={<AdminRouteWrapper />}>
            <Route element={<AdminLayout />}>
              <Route
                path="/admin"
                element={<Navigate to="/admin/dashboard" replace />}
              />
              <Route path="/admin/users" element={<UsersPage />} />
              <Route path="/admin/moderators" element={<ModeratorPage />} />
              <Route path="/admin/reviews" element={<AuditReviewsPage />} />
              <Route path="/admin/products" element={<ProductPage />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Route>
          </Route>
          
          {/* Redirects */}
          <Route path="/admin/*" element={<Navigate to="/admin" replace />} />
          <Route path="/landing" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
