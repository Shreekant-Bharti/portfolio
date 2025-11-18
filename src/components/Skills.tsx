import { Code2, Database, Globe, Server, Terminal, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React", "Responsive Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Python", "Flask", "REST APIs", "MongoDB", "Node.js", "Express"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Terminal,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C", "C++", "Java", "SQL"],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Database,
      title: "Data Science",
      skills: ["NumPy", "Pandas", "Keras", "Scikit-learn", "Data Analytics", "Machine Learning"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "VS Code", "Power BI", "Excel", "Linux", "Docker"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Code2,
      title: "Additional Skills",
      skills: ["API Integration", "Version Control", "Agile", "Problem Solving", "Team Collaboration", "Technical Writing"],
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for building 
              innovative solutions across the full development stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm bg-muted rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              ...and many more technologies I'm continuously learning and exploring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
