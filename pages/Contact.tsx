import React, { useState } from 'react';
import '@/app/globals.css';
import Link from 'next/link';
import Footer2 from '@/components/Footer2';
import { FloatingNav3 } from '@/components/ui/FloatingNav3';
import { contactItems } from '@/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#0a0a0a] to-[#121212]">
      <div className='pt-11'>
        <FloatingNav3 navItems={contactItems}/>
      {/* Logo */}
      <Link href="/">
        <div className="absolute top-6 left-6 cursor-pointer text-5xl font-bold text-blue-500 hover:scale-110 transition-transform duration-300">
          EX
        </div>
      </Link>

      {/* Form Section */}
      <div className="flex flex-col items-center flex-grow mt-32 px-4">
        <div className="bg-[#131313] p-10 rounded-xl shadow-xl max-w-lg w-full">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-center text-gray-400 mb-8">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-3 bg-[#1c1c1e] text-white border border-[#2a2a2b] rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-3 bg-[#1c1c1e] text-white border border-[#2a2a2b] rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-3 bg-[#1c1c1e] text-white border border-[#2a2a2b] rounded-md focus:ring-2 focus:ring-blue-500"
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-5 w-full">
        <Footer2 />
      </div>
      </div>
    </div>
  );
};

export default Contact;
