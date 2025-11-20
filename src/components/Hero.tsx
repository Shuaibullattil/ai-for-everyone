import { Button } from "@/components/ui/button";
import heroImage from "@/assets/everyone.png";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayedSubText, setDisplayedSubText] = useState("");
  const subText = "Connect with like-minded students for fun, friendships, and future opportunities.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= subText.length) {
        setDisplayedSubText(subText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="Diverse group of people learning together"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-transparent"></div>
      </div>

      {/* Content Container - Top of Image */}
      <div className="relative z-10 h-full flex items-start justify-center pt-24 sm:pt-28 lg:pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          {/* Hero Headline - Two Lines */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Find Your Tribe,
            <br />
            Build Your Network.
          </h1>

          {/* Sub-headline with Typewriter */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed pt-1 min-h-[60px] sm:min-h-[50px]">
            {displayedSubText}
            <span className="animate-pulse">|</span>
          </p>

          {/* Single CTA with Breathing Animation */}
          <div className="pt-3 opacity-0 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
            <Button 
              size="lg" 
              className="text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 rounded-full bg-black text-white hover:bg-gray-900 shadow-2xl animate-breathe"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-breathe {
          animation: breathe 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;