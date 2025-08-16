import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm border-border">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-0.75">
            <img 
              src="/src/assets/twinf_logo_675px.png" 
              alt="Twinfinity Technologies Logo"
              className="object-contain w-16 h-16 p-2 rounded-lg shadow-lg bg-white/10"
            />
            <div className="flex flex-col">
              <div className="text-xl font-bold leading-tight text-[#082D61]">
                Twinfinity Technologies  
              </div>
              <div className="text-xs leading-tight text-muted-foreground">
                Private Limited
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-8">
              <a href="#about" className="transition-colors text-foreground hover:text-primary">About</a>
              <a href="#services" className="transition-colors text-foreground hover:text-primary">Services</a>
              <a href="#approach" className="transition-colors text-foreground hover:text-primary">Our Approach</a>
              <a href="#contact" className="transition-colors text-foreground hover:text-primary">Contact</a>
              <Button variant="gradient" size="sm">Get Started</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-colors text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t sm:px-3 bg-background border-border">
            <a href="#about" className="block px-3 py-2 transition-colors text-foreground hover:text-primary">About</a>
            <a href="#services" className="block px-3 py-2 transition-colors text-foreground hover:text-primary">Services</a>
            <a href="#approach" className="block px-3 py-2 transition-colors text-foreground hover:text-primary">Our Approach</a>
            <a href="#contact" className="block px-3 py-2 transition-colors text-foreground hover:text-primary">Contact</a>
            <div className="px-3 py-2">
              <Button variant="gradient" size="sm" className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;