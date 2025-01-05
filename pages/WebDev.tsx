import React from 'react';
import '@/app/globals.css';
import Link from 'next/link';
import Packages from '@/components/Packages';
import Walkthrough from '@/components/Walkthrough';
import { FaMixcloud } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import Footer2 from '@/components/Footer2';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { webItems } from '@/data';

const WebDev = () => {
  return (
    <div className="pt-1 relative bg-gradient-to-br from-gray-900 to-black">
      <div className='pt-11'>
      <FloatingNav  navItems={webItems}/>
      <Link href="/">
        <div className="absolute top-6 left-6 cursor-pointer text-5xl font-bold text-blue-500 hover:scale-110 transition-transform duration-300">
          EX
        </div>
      </Link>
      <div className="text-center mt-16 mb-16 animate-fade-in">
        <h1 className="text-blue-500 text-6xl font-bold mt-16 mb-6">
          <span className='text-gray-100'>Web Design &</span> Development
        </h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-2">
          Streamlined, Fast & User-friendly Websites
        </h2>
      </div>

      {/* Content Section 1 */}
      <section className="flex flex-col md:flex-row items-center gap-12 py-16 px-6 max-w-7xl mx-auto animate-slide-up">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
          Enhance User Experience
          </h3>
          <h2 className="text-4xl font-bold text-gray-100 leading-tight mb-6">
            Build <span className="text-blue-500">stunning websites</span> that engage users.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            38% of people stop engaging with websites if the layout is unattractive.
            Our team ensures sleek, responsive, and engaging designs that captivate visitors.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
          We deliver enterprise-level web development solutions which are exceptionally simple to manage and provide a streamlined UX. A simple increase of load time from one to three seconds can lead to your bounce rate increasing 32%.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Working closely with our design and SEO teams, our web developers have created a portfolio of highly-successful websites for some of the nation&apos;s biggest brands. We understand business and customer needs, and our team always strives for perfection.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-start mt-16 mb-20">
          <img
            src="webserv.svg"
            alt="Web Services"
            className="w-full max-w-[55%] h-auto object-contain"
          />
        </div>
      </section>

      {/* Content Section 2 */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-12 py-16 px-6 max-w-7xl mx-auto animate-slide-up">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Optimised Performance
          </h3>
          <h2 className="text-4xl font-bold text-gray-100 leading-tight mb-6">
            Maximise <span className="text-blue-500">website performance</span> and minimise bounce rates.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            A 1-3 second delay in load time can increase bounce rates by 32%.
            Our streamlined UX ensures faster performance and higher engagement.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/images/performance.jpg" alt="Optimised Performance" className="w-full max-w-[90%] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
        </div>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 px-6 max-w-7xl mx-auto animate-slide-up mt-20">
        <div className="flex flex-col items-center text-center">
          <FaMixcloud size="5em" className="text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-100 mb-2">Bespoke Solution</h3>
          <p className="text-gray-300">
            Development solutions customised to your business needs and objectives.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <RiTeamFill size="5em" className="text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-100 mb-2">Expert Team</h3>
          <p className="text-gray-300">
            Our developers work with major languages and frameworks to deliver exceptional results.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <BiSupport size="5em" className="text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-100 mb-2">Ongoing Support</h3>
          <p className="text-gray-300">
            Continuous support for website maintenance, updates, and performance optimisation.
          </p>
        </div>
      </section>

      <section className="text-white py-16 px-6 lg:px-20 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold mb-6">
            Everyone Loves <span className="text-blue-500">Free</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8">
            We offer additional products and services with every Extendo Web
            Package we offer:
          </p>
          <ul className="space-y-4 text-lg">
            {[
              "UNLIMITED DISCOUNT CODES (For Marketing Campaigns)",
              "PROFESSIONAL & RESPONSIVE DESIGN (Mobile-Friendly)",
              "SEO FRIENDLY (Built Using The Best Practices Of Google & Bing)",
              "INDUSTRY AND MARKET RESEARCH",
              "SOCIAL MEDIA INTEGRATION",
              "HIGH-END SECURITY & MALWARE PROTECTION",
              "COPYWRITING SUPPORT",
              "24/7 TECHNICAL SUPPORT",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-blue-500"
              >
                <span className="text-blue-500 text-2xl">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <img
            src="/images/team-working.jpg" // Replace this with the actual image URL
            alt="Team working"
            className="rounded-lg shadow-lg w-full"
          />
          {/* Decorative Box */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 opacity-50 rounded-lg"></div>
        </div>
      </div>
    </section>

      {/* Call to Action Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg mt-16 mb-0 animate-fade-in">
        <h2 className="text-4xl font-bold text-white leading-tight mb-6">
          Ready to Build Your Dream Website?
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Let&apos;s create a stunning, high-performing website that aligns with your business goals.
        </p>
        <Link href="/Services">
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105">
            Get Started Now
          </button>
        </Link>
        
      </section>
      <div>
        <Footer2 />
      </div>
      </div>
    </div>
  );
};

export default WebDev;
