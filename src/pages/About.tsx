import React from "react";
import { useNavigate } from "react-router-dom";
import lightLogo from "../assets/lightLogo.svg";
import darkLogo from "../assets/darkLogo.svg";
import { useColorSchemeStore } from "../stores/colorSchemeStore";
import { FaArrowLeft } from "react-icons/fa";

const AboutPage: React.FC = () => {
  const { isDarkMode } = useColorSchemeStore();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="mb-8">
        <img
          src={isDarkMode ? darkLogo : lightLogo}
          alt="RevieW Sphere Logo"
          className="h-30 w-60"
        />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        About RevieW Sphere
      </h1>
      <p className="text-base sm:text-lg md:text-xl max-w-2xl text-center mb-4">
        Welcome to RevieW Sphere, your go-to platform for honest and detailed
        product reviews. Our mission is to help consumers make informed
        decisions by providing comprehensive reviews and ratings from real
        users.
      </p>
      <p className="text-base sm:text-lg md:text-xl max-w-2xl text-center mb-4">
        At RevieW Sphere, we believe in transparency and authenticity. Our
        community of reviewers shares their genuine experiences with various
        products, ensuring that you get the most accurate and reliable
        information before making a purchase.
      </p>
      <p className="text-base sm:text-lg md:text-xl max-w-2xl text-center mb-4">
        Join us in creating a trusted space for product reviews and become a
        part of our growing community. Together, we can make shopping smarter
        and more enjoyable.
      </p>
      <div className="animate-bounce mt-8">
        <p className="text-base sm:text-lg md:text-xl max-w-2xl text-purple-500 text-center mb-4">
          Thank you for visiting RevieW Sphere. We hope you find our reviews
          helpful!
        </p>
      </div>
      <div
        onClick={handleBackClick}
        className="mt-4 cursor-pointer dark:text-white hover:text-blue-700 flex items-center"
      >
        <FaArrowLeft className="h-6 w-6 mr-2" />
        Back
      </div>
    </div>
  );
};

export default AboutPage;
