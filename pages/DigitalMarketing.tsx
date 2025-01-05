import React from 'react';
import '@/app/globals.css';
import Link from 'next/link';
import Footer2 from '@/components/Footer2';  // Import Footer2
import { FloatingNav } from '@/components/ui/FloatingNav';
import { dmItems } from '@/data';

const DigitalMarketing = () => {
  return (
    <div className="px-0 pt-1 relative bg-gradient-to-br from-gray-900 to-black">
      <div className='pt-11'>
      <FloatingNav navItems={dmItems}/>
      <Link href="/">
        <div className="absolute top-6 left-6 cursor-pointer text-5xl font-bold text-blue-500 hover:scale-110 transition-transform duration-300">
          EX
        </div>
      </Link>
      <div className="text-center mt-16 mb-16 animate-fade-in">
        <h1 className="text-blue-500 text-6xl font-bold mt-12 mb-6">
          <span className='text-gray-100'>Digital</span> Marketing
        </h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-2">
          Strategies to Boost Visibility and Drive Conversions
        </h2>
      </div>

      {/* Paid Social Media Advertising Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 py-16 px-6 max-w-7xl mx-auto animate-slide-up">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Paid Social Media
          </h3>
          <h2 className="text-4xl font-bold text-gray-100 leading-tight mb-6">
            Target the right audience <span className="text-blue-500">at the right time.</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Leverage paid social ads to expand your reach, drive traffic, and increase sales. With precise targeting, your message hits the right audience every time.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/images/paid-social-media.jpg" alt="Paid Social Media" className="w-full max-w-[85%] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
        </div>
      </section>

      {/* SEO Section */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-12 py-16 px-6 max-w-7xl mx-auto animate-slide-up">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
            SEO Optimisation
          </h3>
          <h2 className="text-4xl font-bold text-gray-100 leading-tight mb-6">
            Boost organic traffic and <span className="text-blue-500">rank higher.</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Increase your website's visibility on search engines with strategic SEO practices. Optimise your content and dominate search results.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/images/seo-optimisation.jpg" alt="SEO Optimisation" className="w-full max-w-[75%] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
        </div>
      </section>

      {/* Email Marketing Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 py-16 px-6 max-w-7xl mx-auto animate-slide-up">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Email Marketing
          </h3>
          <h2 className="text-4xl font-bold text-gray-100 leading-tight mb-6">
            Engage your audience and <span className="text-blue-500">nurture leads.</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Craft personalised email campaigns that convert. Reach your audience directly, increase engagement, and drive repeat sales.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/images/email-marketing.jpg" alt="Email Marketing" className="w-full max-w-[75%] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
        </div>
      </section>

      {/* Call to Action Section */}
      <div className='w-full'>
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg mt-16 animate-fade-in">
        <h2 className="text-4xl font-bold text-white leading-tight mb-6">
          Ready to Boost Your Marketing Efforts?
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Take the next step towards growing your brand online. Let's craft strategies that drive real results.
        </p>
        <Link href="/Services"><button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105">
          Get Started Now
        </button></Link>
      </section>

      {/* Footer2 Component */}
      <div className="mt-auto">
        <Footer2 />
      </div> {/* Add Footer2 at the bottom */}
      </div>
      </div>
    </div>

  );
};

export default DigitalMarketing;
