import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SellForm from "@/components/SellForm";

const Sell = () => {
  // Sample crop listings data with initial values
  const [cropListings, setCropListings] = useState([
    { id: 1, name: "Organic Rice", quantity: "500 kg", price: "₹45/kg", seller: "Ramesh Patel" },
    { id: 2, name: "Fresh Wheat", quantity: "1 tonne", price: "₹30/kg", seller: "Sunil Kumar" },
    { id: 3, name: "Cotton", quantity: "200 kg", price: "₹70/kg", seller: "Priya Singh" },
    { id: 4, name: "Sugarcane", quantity: "2 tonnes", price: "₹25/kg", seller: "Vijay Sharma" },
  ]);

  // Function to add new crop to the list
  const addCrop = (crop: {
    cropName: string;
    quantity: string;
    price: string;
    contactInfo: string;
    [key: string]: string;
  }) => {
    const newCrop = {
      id: cropListings.length + 1,
      name: crop.cropName,
      quantity: crop.quantity,
      price: `₹${crop.price}/kg`,
      seller: crop.contactInfo,
    };
    
    setCropListings([...cropListings, newCrop]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-32 px-4 pb-12 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Buy/Sell Crops
          </h1>
          <p className="text-lg text-gray-600">
            List your crops for sale and connect directly with buyers in your
            community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">List Your Crop</h2>
            <SellForm onSubmit={addCrop} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Available Crops</h2>
            <div className="space-y-4">
              {cropListings.map((crop) => (
                <div key={crop.id} className="border p-4 rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{crop.name}</h3>
                      <p className="text-sm text-gray-600">Quantity: {crop.quantity}</p>
                      <p className="text-sm text-gray-600">Price: {crop.price}</p>
                      <p className="text-sm text-gray-600">Seller: {crop.seller}</p>
                    </div>
                    <button 
                      className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-colors"
                      onClick={() => {
                        console.log(`Buying ${crop.name}`);
                      }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sell;
