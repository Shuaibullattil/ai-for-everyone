import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import WhyMatters from "@/components/WhyMatters";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyMatters />
        <Programs />
        
        <Resources />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
