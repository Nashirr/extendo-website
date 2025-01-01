import React from 'react';
import '@/app/globals.css';
import Link from 'next/link';
import Packages from '@/components/Packages';
import Walkthrough from '@/components/Walkthrough';

const SocialMedia = () => {
  return (
    <div className="p-6 relative bg-gradient-to-br from-gray-900 to-black">
      <Link href="/">
        <div className="absolute top-6 left-6 cursor-pointer text-5xl font-bold text-blue-500 hover:scale-110 transition-transform duration-300">
          EX
        </div>
      </Link>
      <div className="text-center mt-16 mb-16 animate-fade-in">
        <h1 className="text-blue-500 text-6xl font-bold mt-12 mb-6">
          <span className='text-gray-100'>Social Media</span> Management
        </h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-2">
          Enhance Engagement and Grow Your Brand Online
        </h2>
      </div>

      {/* Content Creation Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 py-16 px-6 max-w-7xl mx-auto animate-slide-up">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Content Creation
          </h3>
          <h2 className="text-4xl font-bold text-gray-100 leading-tight mb-6">
            Create <span className="text-blue-500">compelling content</span> that resonates.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Develop engaging posts, stories, and videos that captivate your audience and reflect your brand’s identity.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/images/content-creation.jpg" alt="Content Creation" className="w-full max-w-[90%] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
        </div>
      </section>

      {/* Platform Management Section */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-12 py-16 px-6 max-w-7xl mx-auto animate-slide-up">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Platform Management
          </h3>
          <h2 className="text-4xl font-bold text-gray-100 leading-tight mb-6">
            Keep your platforms <span className="text-blue-500">active and engaging.</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Consistent management and interaction to ensure your social media remains lively and responsive.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/images/platform-management.jpg" alt="Platform Management" className="w-full max-w-[90%] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
        </div>
      </section>

      {/* Social Media Ads Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 py-16 px-6 max-w-7xl mx-auto animate-slide-up">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Social Media Ads
          </h3>
          <h2 className="text-4xl font-bold text-gray-100 leading-tight mb-6">
            Drive results with <span className="text-blue-500">targeted ads.</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Launch highly targeted social media campaigns that boost visibility, drive traffic, and convert leads.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/images/social-media-ads.jpg" alt="Social Media Ads" className="w-full max-w-[70%] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
        </div>
      </section>

 <Packages />
 <Walkthrough />

      {/* Call to Action Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg mt-16 animate-fade-in">
        <h2 className="text-4xl font-bold text-white leading-tight mb-6">
          Ready to Elevate Your Social Media Presence?
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Let&apos;s develop strategies that grow your following and enhance engagement.
        </p>
        <Link href="/Services"><button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105">
          Get Started Now
        </button></Link>
      </section>
    </div>
  );
};

export default SocialMedia;
