import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurApproach from "@/components/OurApproach";
import Programs from "@/components/Programs";
import WhoCanJoin from "@/components/WhoCanJoin";
import Resources from "@/components/Resources";
import PartnerWithUs from "@/components/PartnerWithUs";
import HowToPartner from "@/components/HowToPartner";
import AboutTinkerHub from "@/components/AboutTinkerHub";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <OurApproach />
      <Programs />
      <WhoCanJoin />
      <Resources />
      <PartnerWithUs />
      <HowToPartner />
      <AboutTinkerHub />
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Index;

