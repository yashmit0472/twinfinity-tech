import { Card } from "@/components/ui/card";
import { Building, Users, Globe, Target } from "lucide-react";
import DroneIcon from "@/assets/drone.jpg"

const About = () => {
  const stats = [
    { icon: Building, label: "Infrastructure Projects", value: "500+" },
    { icon: Users, label: "Expert Team Members", value: "50+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: Target, label: "Success Rate", value: "98%" },
    { icon: DroneIcon, label: "About Twinfinity", value: "" }, // ✅ added image as icon
  ];

  const sectors = [
    "Infrastructure Development",
    "Urban Planning & Smart Cities", 
    "Agriculture & Food Security",
    "Environmental Management",
    "Disaster Risk Management",
    "Land Governance & Policy"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">
                Who We Are
              </h2>
              <div className="space-y-4 leading-relaxed text-justify text-muted-foreground">
                <p>
                  Twinfinity Technologies is a next-generation geospatial solutions company driven by innovation, 
                  technology, and a deep commitment to transforming how spatial data is used in the real world. 
                  Established with the mission to bridge the gap between complex geospatial intelligence and 
                  practical, decision-ready insights, we thrive at the intersection of geospatial information, 
                  data science and cutting-edge technologies.
                </p>
                <p>
                  Our name, Twinfinity, symbolizes our belief in the infinite possibilities of digital twin 
                  technologies—bringing together physical and digital environments to power smarter, more 
                  sustainable decision-making. We comprise experienced technologists, engineers, data scientists, 
                  and visionaries committed to advancing spatial intelligence.
                </p>
                <p>
                  We believe that transformative solutions stem from combining geographic insight with technology, 
                  providing a foundation for smarter and more sustainable communities. Driven by purpose and 
                  powered by expertise, we transform complex geospatial data into actionable insights for 
                  diverse sectors worldwide.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 border bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl border-border/30">
                <h3 className="mb-4 text-2xl font-semibold text-foreground">Our Mission</h3>
                <p className="leading-relaxed text-justify text-muted-foreground">
                  To empower organizations and communities through cutting-edge geospatial technologies, 
                  transforming data into decisions for a sustainable, resilient, and connected world. 
                  We are dedicated to delivering digital solutions that not only solve today's challenges 
                  but also shape a smarter, more responsible future.
                </p>
              </div>
              
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-foreground">Sectors We Serve</h3>
                <div className="grid grid-cols-2 gap-3">
                  {sectors.map((sector, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-2 text-sm transition-colors text-muted-foreground hover:text-foreground group"
                    >
                      <div className="w-2 h-2 transition-transform rounded-full bg-gradient-secondary group-hover:scale-125"></div>
                      <span>{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* ✅ Drone image comes from stats[4] */}
          <div className="-mt-16 space-y-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex justify-center">
              <img
                src={typeof stats[4].icon === "string" ? stats[4].icon : ""}
                alt={stats[4].label}
                className="object-cover w-full h-auto shadow-lg rounded-2xl"
              />
            </div>
            
            <Card className="p-8 transition-all duration-300 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-border/50 hover:shadow-medium">
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-semibold text-foreground">Impact & Excellence</h3>
                <p className="leading-relaxed text-justify text-muted-foreground">
                  Our portfolio includes impactful collaborations with stakeholders in infrastructure, 
                  land management, agriculture, and environment. Our solutions have resulted in tangible, 
                  measurable improvements—such as improved data accuracy, faster decision cycles, and cost efficiencies.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
