import React from 'react';

const Packages = () => {
  const packages = [
    {
      name: "START UP",
      price: "£225",
      features: [
        "12 x Social Media Posts",
        "1-3 Social Media Account Management",
        "Social Media Content Publishing",
        "Social Media Interactive Scheduling",
        "Monthly Report",
        "Monthly Extendo Strategy Session",
        "Dedicated Account Manager",
        "Unlimited Business & Marketing Advice",
        "Platform Options: Facebook, Twitter, Instagram, LinkedIn",
      ],
      highlight: false,
    },
    {
      name: "BUSINESS",
      price: "£425",
      features: [
        "20 x Social Media Posts",
        "1-4 Social Media Account Management",
        "Social Media Content Publishing",
        "Social Media Interactive Scheduling",
        "Monthly Report",
        "Monthly Extendo Strategy Session",
        "Dedicated Account Manager",
        "Unlimited Business & Marketing Advice",
        "Platform Options: Facebook, Twitter, Instagram, LinkedIn, Google My Business",
      ],
      highlight: true,
    },
    {
      name: "ENTERPRISE",
      price: "£675",
      features: [
        "Daily Social Media Posts",
        "1 x Blog Article",
        "1 x Personalised Video",
        "1 x Email Marketing",
        "1-5 Social Media Account Management",
        "Social Media Content Publishing",
        "Social Media Interactive Scheduling",
        "Monthly Report",
        "Monthly Extendo Strategy Session",
        "Dedicated Account Manager",
        "Unlimited Business & Marketing Advice",
        "Platform Options: Facebook, Twitter, Instagram, LinkedIn, YouTube, Google My Business",
      ],
      highlight: false,
    },
  ];

  return (
    <section className=" text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
          <span className="text-blue-500">Boost Your Brand</span> with Our Social Media Packages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`p-10 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
                pkg.highlight ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gray-800"
              }`}
            >
              {pkg.highlight && (
                <div className="bg-yellow-500 text-black font-bold py-1 px-3 rounded-full w-max mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2 text-center">{pkg.name}</h3>
              <p className="text-center text-5xl font-bold mb-4">
                <span className="text-6xl">{pkg.price}</span>
                <span className="text-xl font-medium">/MON</span>
              </p>
              <ul className="space-y-2 text-sm">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-green-400">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
