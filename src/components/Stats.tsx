const Stats = () => {
  const stats = [
    { value: "100k+", label: "Learners" },
    { value: "200+", label: "Workshops" },
    { value: "500+", label: "Schools" },
    { value: "50+", label: "Communities" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-4xl sm:text-5xl font-bold text-primary">
                {stat.value}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
