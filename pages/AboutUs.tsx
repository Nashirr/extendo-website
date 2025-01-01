import Footer from '@/components/Footer';
import React from 'react';
import Link from 'next/link'; 
import "@/app/globals.css";


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
      <Link href="/">
  <div className="absolute top-6 left-6 cursor-pointer text-5xl font-bold text-blue-500 hover:scale-110 transition-transform duration-300 z-10">
    EX
  </div>
</Link>

      <section className="relative py-20 px-6 md:px-20 lg:flex lg:items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-5xl font-bold leading-tight mb-10 mt-12">
            What goes on In The <span className="text-blue-500">Studio</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Extendo is a fully integrated digital marketing partner specializing in social media management, web development, and business consultancy.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our team helps small businesses build reputations and develop brands. We combine tech and marketing expertise to deliver affordable and reliable digital marketing.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We empower businesses to grow online with personalized strategies, helping them thrive in the digital landscape. 
          </p>
          <p className="text-lg leading-relaxed">
            We have expertise in all areas of business that you need to grow your business and develop a winning digital presence. 
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center">
  <img
    src="/images/team-pic.jpg"
    alt="Team working in office"
    className="rounded-lg shadow-lg w-full lg:w-5/6"
  />
</div>

      </section>

      <section className="py-20 px-6 md:px-20">
        <h3 className="text-5xl font-bold text-center mb-12">
          The <span className="text-blue-500">Extendo</span> Core Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-xl shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mt-10 -mr-10 opacity-30 transform scale-110"></div>
              <h4 className="text-3xl font-semibold mb-4">{service.title}</h4>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-32">
          <h2 className="text-5xl font-bold text-center mb-12">
            Why Choose <span className="text-blue-500">Extendo</span>?
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="text-lg">
                <th className="py-6 px-4 border-b border-gray-700">Features</th>
                <th className="py-6 px-4 border-b border-gray-700 text-blue-500">Traditional Agencies</th>
                <th className="py-6 px-4 border-b border-gray-700 text-blue-500">Extendo Packages</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-xl">
                <td className="py-8 px-6 border-b border-gray-700 font-semibold">Expertise</td>
                <td className="py-8 px-6 border-b border-gray-700 text-blue-500">&#10003;</td>
                <td className="py-8 px-6 border-b border-gray-700 text-blue-500">&#10003;</td>
              </tr>
              <tr className="text-xl">
                <td className="py-8 px-6 border-b border-gray-700 font-semibold">Monthly Fee</td>
                <td className="py-8 px-6 border-b border-gray-700">&pound;&pound;&pound;</td>
                <td className="py-8 px-6 border-b border-gray-700">&pound;&pound;&pound;</td>
              </tr>
              <tr className="text-xl">
                <td className="py-8 px-6 border-b border-gray-700 font-semibold">Hassle-Free</td>
                <td className="py-8 px-6 border-b border-gray-700 text-red-500">&#10007;</td>
                <td className="py-8 px-6 border-b border-gray-700 text-blue-500">&#10003;</td>
              </tr>
              <tr className="text-xl">
                <td className="py-8 px-6 border-b border-gray-700 font-semibold">Transparent Service</td>
                <td className="py-8 px-6 border-b border-gray-700 text-red-500">&#10007;</td>
                <td className="py-8 px-6 border-b border-gray-700 text-blue-500">&#10003;</td>
              </tr>
              <tr className="text-xl">
                <td className="py-8 px-6 font-semibold">Monthly Strategy Sessions</td>
                <td className="py-8 px-6 text-red-500">&#10007;</td>
                <td className="py-8 px-6 text-blue-500">&#10003;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer/>
    </div>
  );
};


export default AboutUs;
