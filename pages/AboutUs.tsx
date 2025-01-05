import Footer2 from '@/components/Footer2';
import React from 'react';
import Link from 'next/link'; 
import "@/app/globals.css";
import { FloatingNav3 } from '@/components/ui/FloatingNav3';
import { aboutItems } from '@/data';

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'Extendo Profile',
    description: 'Securely manage your account details and receive regular reports.'
  },
  {
    title: 'Social Media Posting',
    description: 'Optimised posts for platforms like Facebook, Instagram, and LinkedIn.'
  },
  {
    title: 'Personalised Videos',
    description: 'Monthly custom videos for promotions or business overviews.'
  },
  {
    title: 'Blog Article Writing',
    description: 'Create fresh, engaging blog content to boost SEO and grow your community.'
  },
  {
    title: 'Email Campaigns',
    description: 'Design and distribute email campaigns to engage your audience.'
  },
  {
    title: 'Reports & Update Calls',
    description: 'Regular check-ins via email or phone to answer questions and provide updates.'
  }
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className='pt-11'>
        <FloatingNav3 navItems={aboutItems} />
      <Link href="/">
  <div className="absolute top-6 left-6 cursor-pointer text-4xl sm:text-5xl font-bold text-blue-500 hover:scale-110 transition-transform duration-300 z-10">
    EX
  </div>
</Link>

      <section className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-20 lg:flex lg:items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8 sm:mb-10 mt-8 sm:mt-12">
            What goes on In The <span className="text-blue-500">Studio</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Extendo is a fully integrated digital marketing partner specializing in social media management, web development, and business consultancy.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Our team helps small businesses build reputations and develop brands. We combine tech and marketing expertise to deliver affordable and reliable digital marketing.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            We empower businesses to grow online with personalized strategies, helping them thrive in the digital landscape. 
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            We have expertise in all areas of business that you need to grow your business and develop a winning digital presence. 
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center">
  <img
    src="/images/team-pic.jpg"
    alt="Team working in office"
    className="rounded-lg shadow-lg w-full lg:w-5/6 max-w-md sm:max-w-lg lg:max-w-none"
  />
</div>

      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-20">
        <h3 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12">
          The <span className="text-blue-500">Extendo</span> Core Services
        </h3>
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-xl shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-800 rounded-full -mt-6 sm:-mt-10 -mr-6 sm:-mr-10 opacity-30 transform scale-110"></div>
              <h4 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">{service.title}</h4>
              <p className="text-base sm:text-lg">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 sm:mt-32">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12">
            Why Choose <span className="text-blue-500">Extendo</span>?
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-lg">
                <th className="py-4 sm:py-6 px-4 border-b border-gray-700">Features</th>
                <th className="py-4 sm:py-6 px-4 border-b border-gray-700 text-blue-500">Traditional Agencies</th>
                <th className="py-4 sm:py-6 px-4 border-b border-gray-700 text-blue-500">Extendo Packages</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-xl">
                <td className="py-6 px-4 border-b border-gray-700 font-semibold">Expertise</td>
                <td className="py-6 px-4 border-b border-gray-700 text-blue-500">✔</td>
                <td className="py-6 px-4 border-b border-gray-700 text-blue-500">✔</td>
              </tr>
              <tr className="text-xl">
                <td className="py-6 px-4 border-b border-gray-700 font-semibold">Monthly Fee</td>
                <td className="py-6 px-4 border-b border-gray-700">£££</td>
                <td className="py-6 px-4 border-b border-gray-700">£££</td>
              </tr>
              <tr className="text-xl">
                <td className="py-6 px-4 border-b border-gray-700 font-semibold">Hassle-Free</td>
                <td className="py-6 px-4 border-b border-gray-700 text-red-500">✘</td>
                <td className="py-6 px-4 border-b border-gray-700 text-blue-500">✔</td>
              </tr>
              <tr className="text-xl">
                <td className="py-6 px-4 border-b border-gray-700 font-semibold">Transparent Service</td>
                <td className="py-6 px-4 border-b border-gray-700 text-red-500">✘</td>
                <td className="py-6 px-4 border-b border-gray-700 text-blue-500">✔</td>
              </tr>
              <tr className="text-xl">
                <td className="py-6 px-4 font-semibold">Monthly Strategy Sessions</td>
                <td className="py-6 px-4 text-red-500">✘</td>
                <td className="py-6 px-4 text-blue-500">✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer2 />
    </div>
    </div>
  );
};

export default AboutUs;
