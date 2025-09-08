import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB", 
    "WordPress", "Git", "GitHub", "Figma"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2x2 mx-auto">
            BCA Graduate passionate about full stack web development and problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              I'm a BCA Graduate  form <b>J.C Bose University of Science and Technologywith</b> a passion for 
              full-stack web development. I love turning complex problems into simple, 
              beautiful solutions using modern web technologies.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              My expertise spans across frontend and backend development, and I'm always 
              eager to learn new technologies and work on challenging projects that make 
              a positive impact.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
                  <p className="text-muted-foreground">Projects Built</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">2025</h3>
                  <p className="text-muted-foreground">Graduated</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;