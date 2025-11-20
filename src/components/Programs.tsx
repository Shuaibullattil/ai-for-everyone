import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, GraduationCap } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "KuttyMakers",
      description: "Fun, hands-on AI activities for kids aged 8-12. Learn by creating games, robots, and creative projects.",
      icon: Sparkles,
      age: "Ages 8-12",
      color: "text-accent",
    },
    {
      title: "Young Makers",
      description: "Build real AI projects and solve community challenges. For teens aged 13-18 who want to dive deeper.",
      icon: Users,
      age: "Ages 13-18",
      color: "text-primary",
    },
    {
      title: "Friends of Movement",
      description: "Educators and community leaders who want to bring AI learning to their schools and neighborhoods.",
      icon: GraduationCap,
      age: "Educators & Community",
      color: "text-accent",
    },
  ];

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Programs for Everyone
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're 8 or 80, a student or a teacher, there's a place for you in our movement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className={`${program.color} w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {program.age}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
