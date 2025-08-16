import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 text-2xl font-bold">Twinfinity Technologies</div>
            <p className="max-w-md mb-4 text-background/80">
              Empowering decisions through spatial intelligence. Building smarter, 
              more sustainable futures with cutting-edge geospatial solutions.
            </p>
            <div className="text-sm text-background/60">
              © 2024 Twinfinity Technologies. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="transition-colors hover:text-background">GIS & Remote Sensing</a></li>
              <li><a href="#" className="transition-colors hover:text-background">LiDAR & Drone Mapping</a></li>
              <li><a href="#" className="transition-colors hover:text-background">3D Modeling</a></li>
              <li><a href="#" className="transition-colors hover:text-background">AI Analytics</a></li>
              <li><a href="#" className="transition-colors hover:text-background">Consultancy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#about" className="transition-colors hover:text-background">About Us</a></li>
              <li><a href="#services" className="transition-colors hover:text-background">Our Services</a></li>
              <li><a href="#approach" className="transition-colors hover:text-background">Our Approach</a></li>
              <li><a href="#contact" className="transition-colors hover:text-background">Contact</a></li>
              <li><a href="#" className="transition-colors hover:text-background">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-background/20" />
        
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 text-sm text-background/60 md:mb-0">
            Building the future with spatial intelligence
          </div>
          <div className="flex space-x-6 text-sm text-background/60">
            <a href="#" className="transition-colors hover:text-background">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-background">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-background">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;