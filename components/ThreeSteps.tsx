"use client";
import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const ThreeSteps = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-900 to-black">
      <h1 className="text-center text-3xl sm:text-3xl md:text-4xl font-bold mb-6 text-white relative">
        Extend Your Marketing in <span className="text-blue-500">3 Simple Steps</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
       
          <div>
            <Card
              title="Choose Your Service"
              icon={<AceternityIcon order="Step 1" />}
              description="Explore our range of tailored marketing solutions and select the one that aligns with your business goals."
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
              />
            </Card>
          </div>
       
      
          <div>
            <Card
              title="Book an Appointment"
              icon={<AceternityIcon order="Step 2" />}
              description="Pick a time that works best for you to discuss your marketing needs with our experts."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-purple-700"
                colors={[[236, 72, 153], [232, 121, 249]]}
                dotSize={6}
              />
            </Card>
          </div>
       
       
          <div>
            <Card
              title="Get Your Customised Plan"
              icon={<AceternityIcon order="Step 3" />}
              description="Receive a personalised strategy designed to extend your marketing reach and drive results."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
       
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl bg-gradient-to-br from-blue-800 to-indigo-900"  // Add bg-blue-600 here
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20 cursor-pointer">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2
          className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};


const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
  <button className="px-8 py-2 bg-gradient-to-br from-indigo-200 to-blue-400 text-black text-2xl font-bold rounded-md hover:from-indigo-600 hover:to-blue-800 hover:shadow-lg">
    {order}
  </button>
</div>

  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default ThreeSteps;
