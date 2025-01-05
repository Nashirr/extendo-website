import React from 'react';
import "@/app/globals.css"; 
import Link from 'next/link';
import Footer2 from '@/components/Footer2';
import { FloatingNav3 } from '@/components/ui/FloatingNav3';
import { insightsItems } from '@/data';

const Insights = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <div className='pt-12'>
        <FloatingNav3 navItems={insightsItems} />
       <Link href="/">
        <div className="absolute top-6 left-6 cursor-pointer text-5xl font-bold text-blue-500 hover:scale-110 transition-transform duration-300">
          EX
        </div>
      </Link>

      {/* Header Section */}
      <section className="text-center py-16 bg-gradient-to-br from-gray-900 to-black">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">
          EXTENDO INSIGHTS
        </h1>
        <p className="text-xl text-gray-200">
          Stay ahead with expert insights to grow your business
        </p>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-100 mb-8 text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src="/images/article1.jpg" alt="Article 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-500 mb-4">Optimising Business Growth</h3>
              <p className="text-lg text-gray-300 mb-4">
                Learn how to scale your business with effective strategies and decision-making.
              </p>
              <Link href="/article/1">
                <span className="text-blue-500 hover:underline cursor-pointer">Read More</span>
              </Link>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src="/images/article2.jpg" alt="Article 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-500 mb-4">Managing Your Business Finances</h3>
              <p className="text-lg text-gray-300 mb-4">
                Discover how to better manage your finances and improve profitability.
              </p>
              <Link href="/article/2">
                <span className="text-blue-500 hover:underline cursor-pointer">Read More</span>
              </Link>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src="/images/article3.jpg" alt="Article 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-500 mb-4">The Power of Digital Marketing</h3>
              <p className="text-lg text-gray-300 mb-4">
                Explore the latest trends and tools in digital marketing that can transform your business.
              </p>
              <Link href="/article/3">
                <span className="text-blue-500 hover:underline cursor-pointer">Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Archive Section */}
      <section className="bg-gray-800 py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-6">
            Explore Our Insights Archive
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Access our full collection of articles, case studies, and reports to learn from industry experts.
          </p>
          <Link href="/archive">
            <span className="inline-block px-8 py-3 text-lg font-semibold text-blue-500 bg-white rounded-full hover:bg-gray-200 transition cursor-pointer">
              Explore Archive
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 mt-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Informed with Our Insights
        </h2>
        <p className="text-lg text-white mb-6">
          Subscribe to receive the latest updates and insights straight to your inbox.
        </p>
        <form className="flex justify-center items-center gap-4">
          <input type="email" placeholder="Enter your email" className="p-3 rounded-md text-gray-800" />
          <button type="submit" className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-md hover:bg-gray-200">
            Subscribe
          </button>
        </form>
      </section>
      <Footer2 />
      </div>
    </div>
  );
};

export default Insights;
