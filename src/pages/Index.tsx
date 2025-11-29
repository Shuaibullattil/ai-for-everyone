import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Challenge from "@/components/Challenge";
import OurApproach from "@/components/OurApproach";
import WhoCanJoin from "@/components/WhoCanJoin";
import PartnerWithUs from "@/components/PartnerWithUs";
import HowToPartner from "@/components/HowToPartner";
import AboutTinkerHub from "@/components/AboutTinkerHub";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showPreloader && (
          <Preloader onComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>

      {!showPreloader && (
        <div className="min-h-screen">
          <Navbar />
          <main>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. About Section - Why AI Literacy Matters */}
            <About />

            {/* 3. The Challenge - Problems We're Addressing */}
            <Challenge />

            {/* 4. Our Approach - Head, Hand, Heart */}
            <OurApproach />

            {/* 5. Who Can Join - Audience Types */}
            <WhoCanJoin />

            {/* 6. Partner With Us - Partnership Types */}
            <PartnerWithUs />

            {/* 7. How to Partner - Action Cards */}
            <HowToPartner />

            {/* 8. About TinkerHub */}
            <AboutTinkerHub />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating CTA - Appears on Scroll */}
          <FloatingCTA />
        </div>
      )}
    </>
  );
};

export default Index;
