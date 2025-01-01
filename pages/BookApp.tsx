"use client";
import '../app/globals.css';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineCheckCircle } from "react-icons/ai";

const BookApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Retrieve selected services from query params or local storage
    const queryServices = router.query.services;
    const storedServices = queryServices
      ? (Array.isArray(queryServices) ? queryServices : [queryServices])
      : JSON.parse(localStorage.getItem("selectedServices") || "[]");

    setSelectedServices(storedServices);
  }, [router.query.services]);

  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0]; // Format today's date as YYYY-MM-DD

  const workingHours = { start: 9, end: 17 }; // 9 AM to 5 PM
  const times = Array.from({ length: 24 }, (_, hour) => hour); // All 24 hours

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, date, time } = formData;

    if (!name || !email || !phone || !date || !time) {
      alert("Please fill out all fields.");
      return;
    }

    const selectedDate = new Date(date);
    const selectedTime = parseInt(time);

    // Validate time (between 9:00 AM and 5:00 PM)
    if (selectedTime < workingHours.start || selectedTime >= workingHours.end) {
      alert("Appointments can only be booked between 9:00 AM and 5:00 PM.");
      return;
    }

    // Validate no Sundays
    if (selectedDate.getDay() === 0) {
      alert("Appointments cannot be booked on Sundays.");
      return;
    }

    setSubmitted(true);
    console.log("Appointment Data: ", formData);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Strategise. <span className="text-blue-500 font-extrabold">Extend</span>. Succeed.
        </h2>

        {submitted ? (
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <AiOutlineCheckCircle className="text-green-500 text-6xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Appointment Confirmed
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Thank you, {formData.name}. Your appointment has been successfully booked. Our team will contact you shortly to confirm the details.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Selected Services Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Selected Services
              </h3>
              {selectedServices.length > 0 ? (
                <ul className="space-y-4">
                  {selectedServices.map((service, index) => (
                    <li
                      key={index}
                      className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-sm"
                    >
                      <span className="text-gray-800 dark:text-white font-medium">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">
                  No services selected. Please go back and choose your services.
                </p>
              )}
            </div>

            {/* Appointment Form Section */}
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-200"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 !important"
                  placeholder="Your full name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 !important"
                  placeholder="Your email address"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 dark:text-gray-200"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 !important"
                  placeholder="Your phone number"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block text-gray-700 dark:text-gray-200"
                  >
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 !important"
                    min={formattedToday} // Block past dates
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="time"
                    className="block text-gray-700 dark:text-gray-200"
                  >
                    Appointment Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 !important"
                  >
                    <option value="">Choose a time</option>
                    {times.map((hour) => {
                      const isDisabled =
                        hour < workingHours.start || hour >= workingHours.end;
                      return (
                        <option
                          key={hour}
                          value={hour}
                          disabled={isDisabled}
                          className={isDisabled ? "text-gray-400" : ""}
                        >
                          {hour.toString().padStart(2, "0")}:00
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors !important"
              >
                Book Appointment
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookApp;
