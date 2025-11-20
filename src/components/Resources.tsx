import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Video, FileText } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Getting Started Guide",
      description: "Complete beginner's guide to AI concepts and tools",
      icon: BookOpen,
      type: "PDF Guide",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video lessons in Malayalam and English",
      icon: Video,
      type: "Video Series",
    },
    {
      title: "Activity Worksheets",
      description: "Printable activities for classroom and home learning",
      icon: FileText,
      type: "Worksheets",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Free Learning Resources
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to start your AI learning journey, completely free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg hover:-translate-y-1 transition-all opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {resource.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
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

export default Resources;
