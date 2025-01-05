'use client';
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

const Footer2 = () => {
  return (
    <AuroraBackground className="w-full py-4 h-auto"> {/* Ensure full width for the AuroraBackground */}
      <footer className="relative text-white py-4 w-full"> {/* Ensure footer spans full width */}
        <div className="w-full px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Left Section */}
          <div className="text-center lg:text-left mb-4 lg:mb-0 w-full lg:w-auto">
            <h2 className="text-lg lg:text-xl font-semibold">
              Ready to <span className="text-blue-500">extend</span> your business?
            </h2>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col items-center text-center space-y-1 mb-4 lg:mb-0 w-full lg:w-auto">
            <div className="text-3xl font-bold">
              <span className="text-blue-500">EX</span>
            </div>
            <p className="text-xs">© Extendo. All rights reserved.</p>
          </div>

          {/* Right Section */}
          <div className="text-center lg:text-right text-xs space-y-1 w-full lg:w-auto">
            <p>16 Museum Place, Cardiff, United Kingdom</p>
            <p>+44(0) 797 955 8000</p>
            <p>
              <a
                href="mailto:hello@extendo.co.uk"
                className="hover:underline text-blue-500"
              >
                hello@extendo.co.uk
              </a>
            </p>
          </div>
        </div>
      </footer>
    </AuroraBackground>
  );
};

export default Footer2;
