import { Card } from "@/components/ui/card";
import UserIcon from "@/assets/users.png";
import CloudIcon from "@/assets/Cloud.png";
import BrainIcon from "@/assets/Brain.png";
import LeafIcon from "@/assets/Leaf.png";
import ArrowIcon from "@/assets/Arrow.png";

const Approach = () => {
  const approaches = [
    {
      icon: UserIcon,
      title: "User-Centric Design",
      description:
        "We build platforms and tools that are intuitive, scalable, and tailored to real user needs, ensuring immediate benefits and long-term value.",
    },
    {
      icon: UserIcon,
      title: "Collaborative Partnerships",
      description:
        "We actively collaborate with industry leaders, academic institutions, and international organizations to drive innovation and global capacity building.",
    },
    {
      icon: BrainIcon,
      title: "Technology Transfer & Upskilling",
      description:
        "We provide training, knowledge sharing, and technical support to build in-house capabilities for our clients and partners.",
    },
    {
      icon: ArrowIcon,
      title: "Agility and Quality Excellence",
      description:
        "Our agile workflows, quality benchmarks, and focus on measurable impact ensure timely delivery and long-term value.",
    },
    {
      icon: CloudIcon,
      title: "Advanced Technology Integration",
      description:
        "We continuously adopt the latest advancements in AI, cloud computing, and spatial analytics to break barriers between complex datasets and real-world impact.",
    },
    {
      icon: LeafIcon,
      title: "Commitment to Sustainability",
      description:
        "We integrate global sustainability objectives into every engagement, helping organizations demonstrate positive environmental and social impact.",
    },
  ];

  return (
    <section id="approach" className="py-20 bg-muted/20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="mb-4 text-4xl font-bold text-foreground">
            How We Work
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-muted-foreground">
            Innovation is at the heart of everything we do. We combine powerful
            data science with cloud computing, artificial intelligence, and
            machine learning to solve real-world challenges. Our methodology is
            centered around user-centric design, collaborative partnerships,
            technology transfer, and agility with quality excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {approaches.map((approach, index) => (
            <Card
              key={index}
              className="p-6 transition-all duration-500 group bg-gradient-card border-border/50 hover:shadow-medium hover:scale-105 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 bg-gradient-secondary rounded-2xl group-hover:scale-110 group-hover:rotate-3">
                  <img
                    src={approach.icon}
                    alt={approach.title}
                    className="object-contain w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 text-foreground group-hover:text-secondary">
                    {approach.title}
                  </h3>
                  <p className="leading-relaxed transition-colors duration-300 text-muted-foreground group-hover:text-foreground">
                    {approach.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="p-8 border bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl lg:p-12 border-border/30">
          <div className="space-y-6 text-center">
            <h3 className="text-3xl font-bold text-foreground">
              Ready to Transform Your Spatial Data?
            </h3>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Through collaboration, innovation, and sustainable practices, we
              enable organizations to unlock the full potential of their
              geospatial assets.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="text-sm text-muted-foreground">
                ✓ Scalable Solutions
              </div>
              <div className="hidden w-1 h-1 rounded-full sm:block bg-muted-foreground"></div>
              <div className="text-sm text-muted-foreground">✓ Expert Support</div>
              <div className="hidden w-1 h-1 rounded-full sm:block bg-muted-foreground"></div>
              <div className="text-sm text-muted-foreground">✓ Proven Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
