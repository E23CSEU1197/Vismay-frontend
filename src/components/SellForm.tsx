
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

interface SellFormProps {
  onSubmit: (formData: {
    cropName: string;
    quantity: string;
    price: string;
    description: string;
    location: string;
    contactInfo: string;
  }) => void;
}

const SellForm = ({ onSubmit }: SellFormProps) => {
  const [formData, setFormData] = useState({
    cropName: "",
    quantity: "",
    price: "",
    description: "",
    location: "",
    contactInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a backend
    console.log("Sell form submitted:", formData);
    toast.success("Crop listed successfully!");
    
    // Call the onSubmit prop with the form data
    onSubmit(formData);
    
    // Reset the form
    setFormData({
      cropName: "",
      quantity: "",
      price: "",
      description: "",
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
        <Label htmlFor="cropName">Crop Name</Label>
        <Input
          id="cropName"
          name="cropName"
          value={formData.cropName}
          onChange={handleChange}
          required
          placeholder="e.g., Wheat, Rice, Cotton"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="quantity">Quantity Available</Label>
        <Input
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          placeholder="e.g., 100 kg, 5 tonnes"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="price">Price per Unit</Label>
        <Input
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          placeholder="Price in rupees"
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
          placeholder="Describe your crop quality and other details"
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
        List Crop for Sale
      </Button>
    </form>
  );
};

export default SellForm;
