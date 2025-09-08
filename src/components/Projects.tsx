import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: " QuickQuiz - Quiz Platform",
      description: "Interactive online quiz platform with analytics, timed mode, and teacher features for managing quizzes and tracking student performance.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "LifeFlow - Blood Donation System",
      description: "Complete blood donation management system connecting donors with recipients, featuring real-time availability and appointment scheduling.",
      image: "/placeholder.svg", 
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Medical Assistant",
      description: "Intelligent medical assistant providing preliminary health consultations and symptom analysis using AI technology.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "AI/ML", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "whatsApp Web clone",
      description: "Pixel-perfect responsive clone of whatsApp Web clone showcasing advanced CSS skills and attention to detail.",
      image: "/placeholder.svg",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Danish8152/WhatsApp-Web",
      live: "https://whats-app-web-ten.vercel.app"
    },
    {
      title: "Netflix Homepage Clone",
      description: "Pixel-perfect responsive clone of Netflix's homepage showcasing advanced CSS skills and attention to detail.",
      image: "/placeholder.svg",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Danish8152/Netflix-Clone",
      live: "https://netflix-clone-kappa-puce-30.vercel.app"
    },
    {
      title: "Amazon Homepage Clone",
      description: "Pixel-perfect responsive clone of Amazon's homepage showcasing advanced CSS skills and attention to detail.",
      image: "/placeholder.svg",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Danish8152/Amazon-clone",
      live: "https://incandescent-halva-fc479e.netlify.app"
    }
  ];
  

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 mx-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover gradient-border">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg mb-4"></div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1 relative z-50" onClick={()=> window.open(project.github, "_blank")}>
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 glow-on-hover relative z-50" onClick={()=> window.open(project.live, "_blank")}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;