
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

interface DonationFormProps {
  onDonate?: (amount: number) => void;
}

const DonationForm = ({ onDonate }: DonationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    amount: "",
    paymentMethod: "",
    message: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a payment gateway
    console.log("Donation form submitted:", formData);
    toast.success("Thank you for your donation!");
    
    // Update the donation total
    if (onDonate && formData.amount) {
      onDonate(Number(formData.amount));
    }
    
    setFormData({
      fullName: "",
      amount: "",
      paymentMethod: "",
      message: "",
      email: "",
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
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Your full name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Donation Amount (₹)</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          required
          placeholder="Enter amount in rupees"
          min="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="paymentMethod">Payment Method</Label>
        <Input
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
          placeholder="UPI, Credit Card, etc."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your email address"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Leave a message for the farmers"
        />
      </div>

      <Button type="submit" className="w-full">
        Make Donation
      </Button>
    </form>
  );
};

export default DonationForm;
