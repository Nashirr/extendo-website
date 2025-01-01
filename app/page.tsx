import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import Testimonials from "@/components/Testimonials";
import ThreeSteps from "@/components/ThreeSteps";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WebDev from "@/pages/WebDev";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col relative overflow-hidden">
    <div className="w-full">
      <FloatingNav navItems={navItems}/>
      <Hero />
      <ThreeSteps />
      <Clients />
      <Testimonials />

      <Footer />
   
     
    </div>
  </main>
  );
}
