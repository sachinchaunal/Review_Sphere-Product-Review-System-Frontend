import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaShieldAlt, FaShoppingCart } from "react-icons/fa";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
            Product Review Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover, review and manage products with our comprehensive platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* User Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="text-center mb-6">
                <span className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                  <FaUser size={32} />
                </span>
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
                User Portal
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                Browse products, leave reviews, and manage your profile
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/signin"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Browse Products Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="text-center mb-6">
                <span className="inline-block p-4 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                  <FaShoppingCart size={32} />
                </span>
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
                Browse Products
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                Explore our catalog of products and read honest reviews
              </p>
              <div className="flex justify-center">
                <Link
                  to="/products"
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  View Products
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Admin Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="text-center mb-6">
                <span className="inline-block p-4 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                  <FaShieldAlt size={32} />
                </span>
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
                Admin Portal
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                Manage products, moderate reviews, and oversee platform activities
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/admin/signin"
                  className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Admin Login
                </Link>
                <Link
                  to="/admin/register"
                  className="px-6 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-md hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
                >
                  Register Admin
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 