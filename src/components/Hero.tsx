import { Button } from "@/components/ui/button";
import heroImage from "@/assets/everyone.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
            Empower Your Community,
            <br />
            <span className="text-primary">Learn AI Together.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join a statewide mission to make AI learning accessible for students, educators, 
            and communities across Kerala. Hands-on, fun, and beginner-friendly.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="text-base px-8 group">
              Join the Campaign
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              Explore More
            </Button>
          </div>

          {/* Hero Image */}
          <div className="pt-12 animate-fade-in">
            <img
              src={heroImage}
              alt="Diverse group of people learning together"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
