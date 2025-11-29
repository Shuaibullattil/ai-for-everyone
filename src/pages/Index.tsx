import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurApproach from "@/components/OurApproach";
import Programs from "@/components/Programs";
import WhoCanJoin from "@/components/WhoCanJoin";
import PartnerWithUs from "@/components/PartnerWithUs";
import HowToPartner from "@/components/HowToPartner";
import AboutTinkerHub from "@/components/AboutTinkerHub";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showPreloader && (
          <Preloader onComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>
      {!showPreloader && (
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <OurApproach />
          <Programs />
          <WhoCanJoin />
          <PartnerWithUs />
          <HowToPartner />
          <AboutTinkerHub />
          <FloatingCTA />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;

