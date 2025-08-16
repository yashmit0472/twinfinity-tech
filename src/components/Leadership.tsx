import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Six from "@/assets/6.png";
import Seven from "@/assets/7.png";
import Eight from "@/assets/8.png";
import Nine from "@/assets/9.png";
import Ten from "@/assets/10.png";

const Leadership = () => {
  const leadershipPoints = [
    {
      icon: Six,
      title: "Innovative Technology Integration",
      description: "We continuously adopt and adapt the latest advancements in artificial intelligence, cloud computing, and spatial analytics. Our solutions break down the barriers between complex datasets and real-world impact, using intelligent automation and user-centric interfaces."
    },
    {
      icon: Seven, // replace with your award icon image
      title: "Proven Track Record and Impact",
      description: "Our portfolio includes impactful collaborations with stakeholders in infrastructure, land management, agriculture, and environment. Our solutions have resulted in tangible, measurable improvements—such as improved data accuracy, faster decision cycles, and cost efficiencies."
    },
    {
      icon: Eight,
      title: "User-Centric, Scalable Solutions",
      description: "Every Twinfinity platform and service is designed with the end-user in mind, ensuring our tools are intuitive, scalable, and easy to integrate within existing workflows. This enables our clients to realize immediate benefits and long-term value."
    },
    {
      icon: Nine, // replace with your target image
      title: "End-to-End Expertise",
      description: "Our capability covers the full project life cycle—from initial consultancy through to solution development, deployment, integration, and client training. Our clients rely on us as a single trusted partner for complete digital transformation."
    },
    {
      icon: Ten, // replace with your globe image
      title: "Global Collaboration & Knowledge Sharing",
      description: "By forging alliances with national and international partners, we ensure the latest knowledge and best practices are brought to every Twinfinity engagement. We support industry growth through active knowledge transfer, mentorship, and capacity-building."
    }
  ];

  const achievements = [
    "Interactive GIS Dashboards",
    "Before-and-After Mapping",
    "Drone Survey Highlights", 
    "AI-Powered Analytics",
    "Client Testimonials",
    "Global Partnerships"
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="mb-4 text-4xl font-bold text-foreground">
            What Makes Us a Leader
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-muted-foreground">
            Twinfinity Technologies is more than just a solutions provider—we are your partner on the path 
            to spatial intelligence and sustainable change. Here's what sets us apart in the geospatial industry.
          </p>
        </div>
        
        <div className="grid gap-8 mb-16 lg:grid-cols-2">
          {leadershipPoints.map((point, index) => (
            <Card 
              key={index} 
              className="p-8 transition-all duration-500 group bg-gradient-card border-border/50 hover:shadow-large hover:scale-105 animate-fade-in" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-20 h-20 transition-all duration-300 bg-gradient-primary rounded-2xl group-hover:scale-110 group-hover:rotate-6">
                    <img 
                      src={point.icon} 
                      alt={point.title} 
                      className="object-contain w-16 h-16"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold transition-colors duration-300 text-foreground group-hover:text-primary">
                    {point.title}
                  </h3>
                  <p className="leading-relaxed text-justify transition-colors duration-300 text-muted-foreground group-hover:text-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="p-8 border bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl lg:p-12 border-border/30 animate-fade-in" style={{animationDelay: "0.8s"}}>
          <div className="space-y-8 text-center">
            <div>
              <h3 className="mb-4 text-3xl font-bold text-foreground">
                Visual Storytelling and Case Studies
              </h3>
              <p className="max-w-3xl mx-auto text-lg text-justify text-muted-foreground">
                To demonstrate our impact and leadership, we illustrate our journey with compelling 
                visual elements and real case studies that showcase transformation and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {achievements.map((achievement, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="p-3 text-sm font-medium transition-all duration-300 cursor-default group hover:scale-105 animate-fade-in" 
                  style={{animationDelay: `${1 + index * 0.1}s`}}
                >
                  <CheckCircle className="w-4 h-4 mr-2 transition-transform text-accent group-hover:scale-110" />
                  {achievement}
                </Badge>
              ))}
            </div>
            
            <div className="pt-6">
              <p className="text-lg font-semibold text-foreground">
                Join us as we redefine what's possible with geospatial data, innovation, and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
