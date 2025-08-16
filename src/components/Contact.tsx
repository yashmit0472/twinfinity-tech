import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ConsultationForm from "./ConsultationForm";
import Eleven from "@/assets/11.png"
import Twelve from "@/assets/12.png"
import Thirteen from "@/assets/13.png"
import Fourteen from "@/assets/14.png"

// ✅ Replace icons with your own assets
const contactInfo = [
  {
    icon: Eleven,
    title: "Email Us",
    detail: "info@twinfinity.tech",
  },
  {
    icon: Twelve,
    title: "Call Us",
    detail: "+91 7838751387",
  },
  {
    icon: Thirteen,
    title: "Locations",
    detail: "Delhi, Bengaluru,\nPune, Mumbai",
  },
];

// ✅ Arrow icon asset
const arrowRightIcon = Fourteen;

const Contact = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [pocOpen, setPocOpen] = useState(false);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                Let&apos;s Build the Future with Spatial Intelligence
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to transform your spatial data into actionable insights?
                Connect with our experts and discover how we can empower your
                decisions.
              </p>
            </div>

            {/* ✅ Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-secondary">
                    <img
                      src={info.icon}
                      alt={info.title}
                      className="w-12 h-12"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {info.title}
                    </div>
                    <div className="whitespace-pre-line text-muted-foreground">
                      {info.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => setDemoOpen(true)}
                className="group flex items-center rounded-lg bg-gradient-to-r from-[#0B3D91] to-[#134EAD] px-6 py-3 text-white font-medium shadow hover:shadow-lg transition-all duration-300"
              >
                Demonstration
                <img
                  src={arrowRightIcon}
                  alt="arrow"
                  className="ml-2 transition-transform w-7 h-7 group-hover:translate-x-1"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setConsultationOpen(true)}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-card border-border/50 shadow-medium">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-semibold text-foreground">
                    Get Started Today
                  </h3>
                  <p className="text-muted-foreground">
                    Join leading organizations using spatial intelligence for
                    better decisions
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="flex flex-col items-start w-full h-auto p-4 transition-colors hover:bg-muted/50"
                    onClick={() => setConsultationOpen(true)}
                  >
                    <div className="mb-1 font-medium text-foreground">
                      Free Consultation
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Discuss your spatial data challenges with our experts
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex flex-col items-start w-full h-auto p-4 transition-colors hover:bg-muted/50"
                    onClick={() => setDemoOpen(true)}
                  >
                    <div className="mb-1 font-medium text-foreground">
                      Custom Demo
                    </div>
                    <div className="text-sm text-muted-foreground">
                      See our solutions in action with your specific use case
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex flex-col items-start w-full h-auto p-4 transition-colors hover:bg-muted/50"
                    onClick={() => setPocOpen(true)}
                  >
                    <div className="mb-1 font-medium text-foreground">
                      Proof of Concept
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Test our technology with a small-scale pilot project
                    </div>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Forms */}
        <ConsultationForm
          isOpen={consultationOpen}
          onClose={() => setConsultationOpen(false)}
          type="consultation"
        />
        <ConsultationForm
          isOpen={demoOpen}
          onClose={() => setDemoOpen(false)}
          type="demo"
        />
        <ConsultationForm
          isOpen={pocOpen}
          onClose={() => setPocOpen(false)}
          type="poc"
        />
      </div>
    </section>
  );
};

export default Contact;
