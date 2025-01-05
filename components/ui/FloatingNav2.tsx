"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav2 = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const moreItems = [
    { name: "Business Consultancy", link: "/BusinessConsultancy" },
    { name: "About Us", link: "/AboutUs" },
    { name: "Insights", link: "/Insights" },
    { name: "Contact", link: "/Contact" },
  ];

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-transparent shadow-[0px_2px_10px_rgba(0,0,0,0.3)] items-center justify-center space-x-4 backdrop-blur-xl",
          className
        )}
        style={{
          backgroundColor: "rgba(17, 25, 40, 0.65)",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <div key={idx} className="relative">
            {navItem.name === "More" ? (
              <div ref={dropdownRef}>
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="text-sm !cursor-pointer text-blue-500 hover:text-blue-300"
                >
                  {navItem.name}
                </button>
                {moreOpen && (
                  <div className="absolute top-full right-1 mt-2 w-44 bg-[rgba(30,41,59,0.9)] text-white rounded-md shadow-lg z-50">
                    {moreItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block px-4 py-2 hover:bg-[rgba(59,130,246,0.6)] text-xs"
                        onClick={() => setMoreOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link href={navItem.link} className="text-xs !cursor-pointer text-white hover:text-blue-300">
                {navItem.name}
              </Link>
            )}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};