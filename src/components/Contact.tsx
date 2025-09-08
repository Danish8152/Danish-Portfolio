import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or just say hello. I'm always open to new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
            <p className="text-lg text-muted-foreground mb-8">
              I'm actively seeking internship and Job opportunities and freelance projects. 
              Whether you have a project in mind or just want to discuss technology, 
              I'd love to connect with you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">mohddanish8152@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Contact</h4>
                  <p className="text-muted-foreground">+91 9540848152</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">New Delhi</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="outline" size="icon" className="glow-on-hover">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="glow-on-hover">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="glow-on-hover">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input type="email" placeholder="Email Address" />
              <Input placeholder="Subject" />
              <Textarea 
                placeholder="Tell me about your project..." 
                className="min-h-[120px]" 
              />
              <Button className="w-full glow-on-hover">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;