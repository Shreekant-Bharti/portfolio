import { Code2, Database, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building modern, scalable web applications with cutting-edge technologies"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Leveraging data analytics and machine learning for intelligent solutions"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Creative approach to solving complex technical challenges"
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Passionate about emerging technologies and continuous learning"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A passionate IT Engineer and Frontend Web Developer with strong expertise in 
              enterprise web development and data science, committed to creating innovative 
              digital solutions that make a real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing B.Tech in Information Technology at BIT Sindri, Jharkhand (2024-2028), 
                I've developed a strong foundation in software development, data structures, and modern web technologies. 
                My experience spans from creating AI-powered applications to building full-stack e-commerce platforms. 
                As a Tech-a-Thon 4.0 finalist and active participant in various hackathons, I thrive in collaborative 
                environments where I can apply my technical skills to solve real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
