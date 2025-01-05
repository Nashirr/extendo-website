import React from 'react'
import '@/app/globals.css';
import Link from 'next/link'
import Footer2 from '@/components/Footer2';
import { FloatingNav2 } from '@/components/ui/FloatingNav2';
import { bcItems } from '@/data';

const BusinessConsultancy = () => {
  return (
    <div className="pt-1 relative bg-gradient-to-br from-gray-900 to-black">
      <div className='pt-11'>
      <FloatingNav2 navItems={bcItems}/>
      <Link href="/">
        <div className="absolute top-6 left-6 cursor-pointer text-5xl font-bold text-blue-500 hover:scale-110 transition-transform duration-300">
          EX
        </div>
      </Link>
      <div className="text-center mt-16 mb-16 animate-fade-in">
        <h1 className="text-blue-500 text-6xl font-bold mt-12 mb-6">
          <span className='text-gray-100'>Business</span> Consultancy
        </h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-2">
        Business Consultancy Services for Small Businesses
        </h2>
      </div>

      {/* Helping Small Businesses Thrive Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 py-16 px-6 max-w-7xl mx-auto animate-slide-up">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
          Strategic Advice for Every Stage
          </h3>
          <h2 className="text-4xl font-bold text-gray-100 leading-tight mb-6">
            Empowering Small Businesses to Achieve  <span className="text-blue-500">Growth and Success</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Here at Extendo, we understand that starting and developing a business is a challenge. You don&apos;t always know the next steps or where to turn.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            We have been working with small businesses to help push them forward. The businesses we&apos;ve worked with have been in their early stage, but always are driven, well-funded and ambitious about their growth plans.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/images/bus-consultancy.jpg" alt="Content Creation" className="w-full max-w-[90%] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300" />
        </div>
      </section>

      {/* Platform Management Section */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-12 py-16 px-6 max-w-7xl mx-auto animate-slide-up">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-100 leading-tight mb-6">
            Guiding You Through <span className="text-blue-500">Key Business Decisions</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            Making the right strategic decisions is paramount for any business. The direction and success of the business is dependent upon this and it is your responsibility to make the correct decision. Such strategic decisions could be:
          </p>

          <p className='text-lg text-gray-300 leading-relaxed mt-4'>
            Do you diversify your service? Is your company structured correctly? How do we maximise value? How do I achieve the growth I need? What&apos;s the best way to raise funding/investment? Do I have the right mix of skills within my team and when should I invest?
          </p>

          <p className='text-lg text-gray-300 leading-relaxed mt-4'>
            Of course, inviting an outsider into your business can be difficult, but such strategic decisions should be made after seeking expert advice. Just take a look at the services we&apos;ve provided to our previous clients in diverse sectors such as: recruitment, media, biotech, telecoms, retail and wholesale, leisure, and financial services.
          </p>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto animate-slide-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100 leading-tight mb-6">
          How We Can <span className="text-4xl font-bold leading-tight mb-6 text-blue-500">Help</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Extendo offers an expert service, delivered by our in-house experts. We provide business consultancy services for small businesses in one of two ways:
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Business Consultancy Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Business Consultancy</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Typically, we will take this approach when responding to a particular issue or working on a defined project. We will meet with you to better understand the particular project, its aims, and challenges. We will then work together over a period of days and weeks to push forward and complete the project.
            </p>
          </div>

          {/* Regular Meetings Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Regular Meetings</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              In this approach, we will typically meet with you periodically, normally monthly or quarterly, and we review the performance of the company together. Our role is often about asking the &apos;difficult&apos; questions and then helping you to figure out the next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg py-12 mt-16">
  <div className="text-center">
    <h2 className="text-3xl font-bold text-white mb-4">
      Ready to take your business to the next level?
    </h2>
    <p className="text-lg text-white mb-6">
      Our expert consultants are here to guide you. Let&apos;s work together to drive growth and success for your business.
    </p>
    <Link href="/Services">
      <p className="inline-block px-8 py-3 text-lg font-semibold text-blue-500 bg-white rounded-full hover:bg-gray-200 transition">
        Get Started
      </p>
    </Link>
  </div>
</section>

<Footer2 />
    </div>
    </div>
  )
}

export default BusinessConsultancy;
