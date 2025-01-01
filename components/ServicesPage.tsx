"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa6";

const ServicesPage = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const router = useRouter();

  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Build modern, responsive websites tailored to your needs.",
      image: "/images/webdvpic.jpeg",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Boost your online presence with targeted marketing strategies.",
      image: "/images/digmarkpic.jpg",
    },
    {
      id: "social-media",
      title: "Social Media Management",
      description: "Grow your brand presence across social platforms.",
      image: "/images/socialmedia.webp",
    },
    {
      id: "business-consultancy",
      title: "Business Consultancy",
      description: "Strategic advice to grow and optimise your business operations.",
      image: "/images/buscons.jpg",
    },
  ];

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((service) => service !== id) : [...prev, id]
    );
  };

  const handleBookAppointment = () => {
    // Save selected services to local storage for fallback
    localStorage.setItem("selectedServices", JSON.stringify(selectedServices));
  
    // Navigate to the booking page with query parameters
    const query = selectedServices.map((service) => `services=${service}`).join("&");
    router.push(`/BookApp?${query}`);
  };
  

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20 px-6">
      {/* Page Title and Subheading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Select Your Services
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Choose the services you need and proceed to book your appointment.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row">
        {/* Services Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`relative cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 ${
                selectedServices.includes(service.id)
                  ? "ring-4 ring-blue-500"
                  : "ring-0"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                height: "400px",
              }}
            >
              <img
                src={service.image}
                alt={`${service.title} background`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Services Section */}
        <div className="w-full lg:w-1/4 mt-12 lg:mt-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Selected Services
          </h2>
          {selectedServices.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">
              No services selected yet. Click on a service to select it.
            </p>
          ) : (
            <ul className="space-y-4">
              {selectedServices.map((id) => {
                const service = services.find((service) => service.id === id);
                return (
                  <li
                    key={id}
                    className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-sm flex justify-between items-center"
                  >
                    <span className="text-gray-800 dark:text-white font-semibold">
                      {service?.title}
                    </span>
                    <button
                      className="text-sm text-blue-600 hover:text-blue-800 dark:hover:text-blue-500"
                      onClick={() => toggleService(id)}
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Booking Button */}
          {selectedServices.length > 0 && (
  <motion.button
    onClick={handleBookAppointment}
    className="mt-10 w-full flex items-center justify-center py-3 px-5 font-semibold rounded-lg text-white bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 shadow-lg shadow-blue-500/50 hover:shadow-purple-600/50 transition-all transform hover:scale-105 focus:outline-none"
    whileHover={{ scale: 1.05 }}
  >
    <span className="mr-2">Book Appointment</span>
    <motion.span
      className="inline-block"
      initial={{ x: 0 }}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <FaArrowRight />
    </motion.span>
  </motion.button>
)}

        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
