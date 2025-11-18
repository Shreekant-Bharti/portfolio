import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "CareConnect",
      description: "AI-powered medication tracker web application designed specifically for seniors. Features intelligent reminders, medication schedules, and health monitoring capabilities.",
      tags: ["AI/ML", "Python", "Flask", "Healthcare"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Speedy-Store",
      description: "Modern full-stack e-commerce platform with comprehensive product management, secure payment integration, and responsive user interface for seamless shopping experience.",
      tags: ["Full Stack", "React", "MongoDB", "REST API"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "BloodConnect Prototype",
      description: "Blood donation management system connecting donors with recipients. Features real-time availability tracking, location-based search, and emergency request handling.",
      tags: ["Web App", "Database", "Social Impact"],
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "NODEEXPRESS",
      description: "College club management portal with REST API architecture. Handles event management, member registration, and activity tracking for student organizations.",
      tags: ["Node.js", "Express", "REST API", "Backend"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "ReelGenerator",
      description: "Automated social media reel and video generation tool. Streamlines content creation with templates, effects, and AI-powered editing suggestions.",
      tags: ["Automation", "Media", "Python", "AI"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Portfolio & Web Projects",
      description: "Collection of responsive websites, landing pages, and web applications showcasing modern design principles and user experience optimization.",
      tags: ["Frontend", "UI/UX", "Responsive", "Design"],
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative projects solving real-world problems through 
              technology, from AI-powered applications to full-stack platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
                
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 group-hover:border-primary transition-colors">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="group">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
