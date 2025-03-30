import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { useAdminAuthStore } from "../stores/adminAuthStore";

const useAxiosInterceptors = () => {
  const userAuth = useAuthStore();
  const adminAuth = useAdminAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    // Request interceptor to attach tokens from localStorage
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        // Check if we're making a request to an admin endpoint or product scraping endpoint
        if (config.url?.includes('/admin') || config.url?.includes('/products/scrape')) {
          const adminToken = localStorage.getItem('adminToken');
          if (adminToken) {
            config.headers.Authorization = `Bearer ${adminToken}`;
          }
        } else {
          // For regular user endpoints
          const token = localStorage.getItem('token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor to handle 401 errors
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          if (error.response.data.type === "admin") {
            adminAuth.adminLogout();
            navigate("/admin/signin");
          } else {
            userAuth.logout();
            navigate("/signin");
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [userAuth, adminAuth, navigate]);
};

export default useAxiosInterceptors;
