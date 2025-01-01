"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { AuroraBackground } from './ui/aurora-background';
import { FlipWords } from './ui/flip-words';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const words = ["Website", "Digital Marketing", "Social Media", "Business"];

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <AuroraBackground 
        className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center overflow-hidden">
        
        
          <div className="absolute top-6 left-6 text-5xl font-bold text-blue-500 transition-transform duration-300">
            EX
          </div>
        
        
        {/* Social Media Icons */}
        <div className={`fixed z-50 flex flex-col space-y-4 text-2xl transform transition-all duration-500 ease-in-out 
          ${scrolled ? 'top-1/2 right-6 opacity-100 translate-y-0' : 'top-6 right-6 flex-row space-x-4 opacity-0 translate-x-10'}`}>
          
          <Link href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800">
            <FaFacebookF />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-gray-700 hover:text-black">
            <FaXTwitter />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-blue-700 hover:text-blue-900">
            <FaLinkedinIn />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="text-pink-600 hover:text-pink-800">
            <FaInstagram />
          </Link>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col justify-center items-center text-center px-6 py-12 sm:py-16 md:py-20 lg:py-28">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-700 dark:text-neutral-100 leading-tight">
            Extend Your
          </h1>
          
          {/* FlipWords Section */}
          <div className="mt-4">
            <FlipWords words={words} className="text-blue-500 tracking-wide sm:tracking-widest text-4xl sm:text-5xl" />
          </div>

          {/* Subtitle Text */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl">
            Elevate your brand with our tailored solutions. Join <span className="font-bold text-blue-500"> 1,000+</span> thriving businesses.
          </p>
          
          {/* Call to Action Button */}
          <div className="mt-8">
            <Link href="/Services">
              <MagicButton
                title='Get Started'
                icon={<FaLocationArrow />}
                position='right'
              />
            </Link>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
};

export default Hero;
