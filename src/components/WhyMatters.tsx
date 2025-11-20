import { Check } from "lucide-react";

const WhyMatters = () => {
  const reasons = [
    "AI is transforming every industry - let's ensure everyone benefits",
    "Learning together builds stronger, more connected communities",
    "Early AI literacy opens doors to future opportunities",
    "Local solutions to local problems using global technology",
    "Democratizing AI education across all socio-economic backgrounds",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Why This Campaign Matters
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI is no longer a distant future - it's here, now. And Kerala has always been a leader 
              in education and social progress. This campaign ensures that no one is left behind in 
              the AI revolution.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By bringing together students, educators, and communities, we're not just teaching AI - 
              we're building a future where technology empowers everyone.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:translate-x-1 opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMatters;
