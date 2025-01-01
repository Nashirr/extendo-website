"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(true); // New state to track scroll direction
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // If scrolling up or at the top of the page, show the navbar
      if (currentScrollPos < lastScrollPos || currentScrollPos === 0) {
        setScrollUp(true);
      } else {
        setScrollUp(false); // If scrolling down, hide the navbar
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between p-5 bg-gray-800 bg-opacity-80 text-white shadow-md backdrop-blur-sm transition-transform duration-300 ${
        scrollUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-500">
        <a href="#home">EX</a>
      </div>

      {/* Links (Desktop View) */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/WebDev" className="hover:text-blue-300">
          Web Development
        </Link>
        <Link href="/DigitalMarketing" className="hover:text-blue-300">
          Digital Marketing
        </Link>
        <Link href="/SocialMedia" className="hover:text-blue-300">
          Social Media
        </Link>

        {/* More Section with Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsMoreOpen(true)}
          onMouseLeave={() => setIsMoreOpen(false)}
        >
          <button className="hover:text-blue-300">More</button>
          {isMoreOpen && (
            <div className="absolute top-full left-0 md:left-auto md:right-0 w-44 bg-gray-900 bg-opacity-90 text-white rounded-md shadow-lg z-30">
              <Link
                href="/BusinessConsultancy"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Business Consultancy
              </Link>
              <Link
                href="/AboutUs"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                About Us
              </Link>
              <Link
                href="/Insights"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Insights
              </Link>
              <Link
                href="#contact"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center space-y-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger icon (three lines) */}
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 bg-opacity-90 text-white flex flex-col items-center py-5 md:hidden">
          <a href="#website-development" className="py-2 hover:text-blue-300">
            Website Development
          </a>
          <a href="#digital-marketing" className="py-2 hover:text-blue-300">
            Digital Marketing
          </a>
          <a href="#social-media" className="py-2 hover:text-blue-300">
            Social Media
          </a>

          {/* Direct links (no dropdown) for Mobile */}
          <a
            href="/BusinessConsultancy"
            className="px-4 py-2 hover:bg-gray-700 w-full text-center"
          >
            Business Consultancy
          </a>
          <a
            href="#about-us"
            className="px-4 py-2 hover:bg-gray-700 w-full text-center"
          >
            About Us
          </a>
          <a
            href="#insights"
            className="px-4 py-2 hover:bg-gray-700 w-full text-center"
          >
            Insights
          </a>
          <a
            href="#contact"
            className="px-4 py-2 hover:bg-gray-700 w-full text-center"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
