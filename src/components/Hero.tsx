import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Alex Johnson</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Final Year BCA Student | Full-Stack Web Developer
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="glow-on-hover" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="glow-on-hover" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-6 justify-center mb-16">
          <Button variant="ghost" size="icon" className="glow-on-hover">
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="glow-on-hover">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="glow-on-hover">
            <Mail className="h-6 w-6" />
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;