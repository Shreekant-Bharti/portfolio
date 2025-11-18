import { Award, BookOpen, GraduationCap, Trophy } from "lucide-react";

const Education = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Tech-a-Thon 4.0 Finalist",
      description: "Selected as finalist in prestigious national-level hackathon competition",
      year: "2024"
    },
    {
      icon: Award,
      title: "Hackathon Finalist",
      description: "Multiple finalist positions in various hackathons and coding competitions",
      year: "2023-2024"
    },
    {
      icon: BookOpen,
      title: "Project Excellence",
      description: "Recognition for innovative project solutions addressing real-world problems",
      year: "2024"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education & Achievements
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          </div>

          {/* Education */}
          <div className="mb-16">
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in-up">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        Bachelor of Technology
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        Information Technology
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      2024 - 2028
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    <span className="font-semibold text-foreground">BIT Sindri</span>, Jharkhand
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Pursuing comprehensive education in Information Technology with focus on 
                    software development, data structures, algorithms, database systems, and 
                    modern web technologies. Active participant in coding clubs and technical events.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-3xl font-bold text-foreground text-center mb-8">
              Key Achievements
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <achievement.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-foreground">
                      {achievement.title}
                    </h4>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Recognition */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <p className="text-lg text-muted-foreground max-w-2xl">
                Consistently recognized for technical excellence, innovative thinking, and 
                collaborative problem-solving in academic and competitive environments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
