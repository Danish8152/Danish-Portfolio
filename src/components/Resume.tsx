import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Eye, FileText } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // In a real implementation, this would download the actual PDF
    // For now, we'll show an alert
    alert("Resume download would start here. Please upload your actual resume PDF to implement this feature.");
  };

  const handlePreview = () => {
    // In a real implementation, this would open the PDF in a new tab
    alert("Resume preview would open here. Please upload your actual resume PDF to implement this feature.");
  };

  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download my complete resume to learn more about my experience and qualifications
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="card-hover gradient-border">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Professional Resume</CardTitle>
              <p className="text-muted-foreground">
                Complete overview of my education, skills, projects, and achievements
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button 
                  size="lg" 
                  className="glow-on-hover w-full" 
                  onClick={handleDownload}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glow-on-hover w-full" 
                  onClick={handlePreview}
                >
                  <Eye className="mr-2 h-5 w-5" />
                  Preview Resume
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <h4 className="font-semibold mb-3">What's included:</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Complete educational background (BCA, YMCA University)</li>
                  <li>• Technical skills and proficiencies</li>
                  <li>• Project portfolio with detailed descriptions</li>
                  <li>• Certificates and achievements</li>
                  <li>• Contact information and links</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;