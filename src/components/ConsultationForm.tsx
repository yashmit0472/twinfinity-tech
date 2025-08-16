import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
  type: "consultation" | "demo" | "poc";
}

const ConsultationForm = ({ isOpen, onClose, type }: ConsultationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const getTitle = () => {
    switch (type) {
      case "consultation": return "Free Consultation";
      case "demo": return "Custom Demo";
      case "poc": return "Proof of Concept";
      default: return "Contact Form";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("access_key", "edbf96ce-ea47-41f4-a3a1-1ca49770b25e"); // Web3Forms key
      data.append("formType", getTitle());
      data.append("name", formData.name);
      data.append("organisation", formData.organisation);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("requirements", formData.requirements);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Request Submitted Successfully ✅",
          description: "We’ll get back to you shortly.",
        });
        setFormData({
          name: "",
          organisation: "",
          email: "",
          phone: "",
          requirements: ""
        });
        onClose();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your form. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-foreground">
            {getTitle()}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organisation">Organisation Name</Label>
            <Input
              id="organisation"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Official Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Brief Requirements</Label>
            <Textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={4}
              placeholder="Please describe your project requirements..."
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#0B3D91] to-[#134EAD] text-white font-semibold shadow hover:shadow-lg transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;
