import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Development Certificate",
      issuer: "GeeksforGeeks",
      date: "2024",
      description: "Comprehensive full-stack development program covering modern web technologies and best practices.",
      skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Soft Skills Certificate",
      issuer: "NPTEL SWAYAM",
      date: "2023",
      description: "Professional development program focusing on communication, leadership, and workplace skills.",
      skills: ["Communication", "Leadership", "Teamwork", "Problem Solving"]
    },
    {
      title: "Social Work Recognition",
      issuer: "Vrikshit Foundation",
      date: "2022-2024",
      description: "2 years of dedicated social service and community development work with environmental focus.",
      skills: ["Community Service", "Environmental Awareness", "Leadership", "Social Impact"]
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition of my continuous learning journey and contribution to the community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="card-hover gradient-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {cert.date}
                  </div>
                </div>
                <CardTitle className="text-xl">{cert.title}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;