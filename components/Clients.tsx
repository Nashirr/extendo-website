"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Clients = () => {
  const clients = [
    { name: "Tiger Bay ABC", logo: "/images/boxing.png", description: "Web Development" },
    { name: "Riverside Studios", logo: "/images/rstudios.jpg", description: "Web Development" },
    { name: "Trillville", logo: "/images/trillville.png", description: "Social Media Management" },
    { name: "Tiger Bay Security", logo: "/images/tb-security.jpg", description: "Social Media & Web Dev" },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const zoomVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-black relative" ref={ref}>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-3xl sm:text-3xl md:text-4xl font-bold mb-6 text-white relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-blue-500">Clients</span>
        </motion.h2>
        <motion.p
          className="text-center text-lg text-gray-400 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Trusted by industry leaders to build and grow their brands.
        </motion.p>
        
        {/* Blue-Purple Gradient Line Under Text */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-0 rounded"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mt-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="w-full flex flex-col items-start justify-start rounded-lg overflow-hidden"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-full h-[350px] object-cover"
                variants={zoomVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              />
              <div className="p-6 w-full text-left">
  <h3 className="text-2xl font-semibold text-white mb-2">
    {client.name}
  </h3>
  <p className="text-sm text-gray-400">
    {client.description}
  </p>
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
