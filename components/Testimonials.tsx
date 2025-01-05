"use client";
import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { testimonials } from '@/data';

const Testimonials = () => {
  return (
    <div
      className="w-full py-24 relative bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg leading-tight">
          Hear It From <span className='text-blue-500'>Those We've Helped</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Real stories from our amazing clients who experienced exceptional growth and success.
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-3 rounded"></div>
      </div>

      <div className="flex flex-col items-center justify-center mt-16">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full px-4 sm:px-8">
          <InfiniteMovingCards 
            items={testimonials} 
            direction="right" 
            speed="normal" 
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
