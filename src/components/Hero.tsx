import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const openGmail = () => {
    const email = "mohddanish8152@gmail.com"; // your email
    const subject = "Hello from Website";
    const body = "I want to contact you regarding...";

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Danish</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3x2 mx-auto">
            Bachelor of Computer Application(BCA) Graduate | Full-Stack Web Developer
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
          <Button variant="ghost" size="icon" className="glow-on-hover" onClick={() => window.open("https://github.com/Danish8152", "_blank")}>
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="glow-on-hover" onClick={() => window.open("https://www.linkedin.com/in/danish-498875293", "_blank")}>
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="glow-on-hover" onClick={openGmail}>
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