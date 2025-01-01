import React, { useState } from 'react';

interface Step {
  title: string;
  content: string;
}

const Walkthrough = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps: Step[] = [
    {
      title: "Week 01: Ignition",
      content: "In the Ignition phase, we focus on understanding your brand's vision, audience, and goals. This is where we set the foundation for a successful campaign. We conduct research, define key performance indicators (KPIs), and plan the initial content strategy to align with your brand's objectives."
    },
    {
      title: "Week 02: Launch",
      content: "During the Launch phase, we roll out the campaign, putting everything we’ve planned into action. This includes content creation, media distribution, and initial performance tracking. We aim to engage your audience and start building momentum through targeted content and strategic outreach."
    },
    {
      title: "Week 03: Key Media Delivery",
      content: "In the Key Media Delivery phase, we provide the key media assets that will drive the next level of engagement. This includes high-quality visuals, videos, and other media that are tailored to your target audience. Our goal is to ensure that the content resonates and continues to build excitement around your brand."
    },
    {
      title: "Week 04: Refuel",
      content: "The Refuel phase is about optimising and refining your campaign based on feedback and performance data. We analyse the results from previous weeks, make adjustments to the strategy, and continue to deliver fresh content to keep your audience engaged. The focus here is on sustaining momentum and maximising results."
    },
  ];

  return (
    <section className=" text-white py-20">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <h1 className="text-5xl font-extrabold mb-6 text-center">
          Our <span className="text-blue-500">Walkthrough</span>
        </h1>
        <p className="font-medium text-lg mb-6 text-center">
          Our approach to delivering top-tier marketing services that guarantee consistent, professional results.
        </p>
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-200">
              A Breakdown of How Each Month Works:
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col space-y-4 hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="text-left font-semibold text-xl flex justify-between items-center w-full"
                >
                  <span>{step.title}</span>
                  <span className="text-lg">{openIndex === index ? '▲' : '▼'}</span>
                </button>
                {openIndex === index && (
                  <div className="text-gray-300">
                    <p>{step.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Walkthrough;
