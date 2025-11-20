import { Button } from "@/components/ui/button";
import heroImage from "@/assets/everyone.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(248, 250, 252, 0.95), rgba(248, 250, 252, 0.85)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
            Empower Your Community,
            <br />
            <span className="text-primary">Learn AI Together.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards]">
            Join a statewide mission to make AI learning accessible for students, educators, 
            and communities across Kerala. Hands-on, fun, and beginner-friendly.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.8s_forwards]">
            <Button size="lg" className="text-base px-8 group hover:scale-105 transition-transform">
              Join the Campaign
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 hover:scale-105 transition-transform">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
