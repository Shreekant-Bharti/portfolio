import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-shreekant.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Full Stack Developer & Data Scientist
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="text-white">Shreekant Bharti</span>
            </h1>

            <p className="text-xl text-white/90 max-w-lg">
              Building Solutions for Real Impact
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              IT Engineer passionate about solving real-world problems through
              innovative digital solutions. Specializing in enterprise web
              development and data science.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 group transition-all duration-300 hover:shadow-lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 group transition-all duration-300 hover:shadow-lg"
                asChild
              >
                <a
                  href="/Shreekant_Bharti_Resume.pdf"
                  download="Shreekant_Bharti_Resume.pdf"
                  className="inline-flex items-center justify-center"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="mailto:shreekantbharti3@gmail.com"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">shreekantbharti3@gmail.com</span>
              </a>
              <a
                href="tel:+919508059974"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm">+91 9508059974</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/shreekant-bharti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors backdrop-blur-sm"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://github.com/Shreekant-Bharti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors backdrop-blur-sm"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl" />
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/20 backdrop-blur-sm shadow-2xl">
                <img
                  src={profileImage}
                  alt="Shreekant Bharti"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
