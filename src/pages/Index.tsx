import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyMatters from "@/components/WhyMatters";
import OurApproach from "@/components/OurApproach";
import WhatWeResolving from "@/components/WhatWeResolving";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

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
            <Hero />
            <WhyMatters />

            {/* New sections added: Our Approach (Head · Hand · Heart) */}
            <OurApproach />

            {/* Impact / What we're solving */}
            <WhatWeResolving />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
