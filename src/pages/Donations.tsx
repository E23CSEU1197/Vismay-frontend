import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationForm from "@/components/DonationForm";

const Donations = () => {
  // This would normally come from a backend, but we'll use state for now
  const [totalDonated, setTotalDonated] = useState(12500);

  // Function to pass to the DonationForm to update the total
  const handleNewDonation = (amount: number) => {
    setTotalDonated(prev => prev + amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-32 px-4 pb-12 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Farmers
          </h1>
          <p className="text-lg text-gray-600">
            Your contribution helps farmers in need with education, debt relief, and
            essential resources.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Make a Donation</h2>
            <DonationForm onDonate={handleNewDonation} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Donation Impact</h2>
            <div className="space-y-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Total Amount Donated</p>
                <h3 className="text-4xl font-bold text-green-600">₹{totalDonated.toLocaleString()}</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-green-600 bg-green-50">
                  <h4 className="font-medium">Your donations help:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                    <li>Support farmer education programs</li>
                    <li>Provide emergency aid during crop failures</li>
                    <li>Fund sustainable farming practices</li>
                    <li>Assist with debt relief for struggling families</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">
                  We work directly with farming communities to ensure 90% of all donations 
                  reach those in need. Regular impact reports are sent to all donors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donations;
