import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Digital twin technology and geospatial mapping"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:text-left">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-primary-foreground">
                Empowering Decisions Through{" "}
                <span className="text-transparent bg-gradient-to-r from-accent to-secondary bg-clip-text">
                  Spatial Intelligence
                </span>
              </h1>
              <p className="max-w-2xl text-xl text-primary-foreground/90">
                Transforming how spatial data powers real-world decisions through cutting-edge geospatial solutions, 
                digital twins, and AI-powered analytics.
              </p>
            </div>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#what-we-do">
                <Button variant="hero" size="lg" className="group">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a href="#who-we-are">
                <Button variant="secondary" size="lg" className="text-secondary-foreground">
                  Learn More
                </Button>
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-8 lg:justify-start text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">Global Reach</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 blur-3xl animate-pulse-soft"></div>
              <div className="relative p-8 border bg-background/10 backdrop-blur-sm rounded-2xl border-primary-foreground/20">
                <div className="space-y-4 text-primary-foreground">
                  <h3 className="text-2xl font-semibold">Next-Generation Solutions</h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• GIS & Remote Sensing</li>
                    <li>• LiDAR & Drone Mapping</li>
                    <li>• 3D Modeling & Photogrammetry</li>
                    <li>• AI-powered Spatial Analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements - drone-like animations */}
      <div className="absolute w-20 h-20 rounded-full top-1/4 right-1/4 bg-accent/20 blur-xl animate-drift"></div>
      <div className="absolute w-16 h-16 rounded-full bottom-1/3 left-1/4 bg-secondary/20 blur-xl animate-hover-lift" style={{animationDelay: "2s"}}></div>
      <div className="absolute w-12 h-12 rounded-full top-1/2 left-1/6 bg-primary/20 blur-lg animate-data-pulse" style={{animationDelay: "4s"}}></div>
      <div className="absolute rounded-full bottom-1/4 right-1/6 w-18 h-18 bg-accent/30 blur-xl animate-drift" style={{animationDelay: "6s"}}></div>
    </section>
  );
};

export default Hero;