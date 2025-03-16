
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

interface BarterFormProps {
  onSubmit: (formData: {
    equipmentName: string;
    description: string;
    condition: string;
    expectedValue: string;
    location: string;
    contactInfo: string;
  }) => void;
}

const BarterForm = ({ onSubmit }: BarterFormProps) => {
  const [formData, setFormData] = useState({
    equipmentName: "",
    description: "",
    condition: "",
    expectedValue: "",
    location: "",
    contactInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a backend
    console.log("Barter form submitted:", formData);
    toast.success("Equipment listed successfully!");
    
    // Call the onSubmit prop with the form data
    onSubmit(formData);
    
    // Reset the form
    setFormData({
      equipmentName: "",
      description: "",
      condition: "",
      expectedValue: "",
      location: "",
      contactInfo: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="equipmentName">Equipment Name</Label>
        <Input
          id="equipmentName"
          name="equipmentName"
          value={formData.equipmentName}
          onChange={handleChange}
          required
          placeholder="e.g., Tractor, Harvester"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Describe your equipment's features and specifications"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="condition">Condition</Label>
        <Input
          id="condition"
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          required
          placeholder="e.g., Excellent, Good, Fair"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="expectedValue">Expected Value</Label>
        <Input
          id="expectedValue"
          name="expectedValue"
          value={formData.expectedValue}
          onChange={handleChange}
          required
          placeholder="Approximate value in rupees"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          placeholder="Your city and state"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactInfo">Contact Information</Label>
        <Input
          id="contactInfo"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          required
          placeholder="Phone number or email"
        />
      </div>

      <Button type="submit" className="w-full">
        List Equipment for Barter
      </Button>
    </form>
  );
};

export default BarterForm;
