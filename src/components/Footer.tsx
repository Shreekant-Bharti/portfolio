import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Branding */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Shreekant<span className="text-primary">.</span>
              </h3>
              <p className="text-muted-foreground">
                Building innovative digital solutions that make a real-world impact.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Connect With Me
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Shreekant-Bharti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shreekant-bharti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:shreekantbharti3@gmail.com"
                  className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {currentYear} Shreekant Bharti. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
