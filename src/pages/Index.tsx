import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyMatters from "@/components/WhyMatters";
import OurApproach from "@/components/OurApproach";
import WhatWeResolving from "@/components/WhatWeResolving";
import Footer from "@/components/Footer";

const Index = () => {
  return (
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
  );
};

export default Index;
