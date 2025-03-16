import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BarterForm from "@/components/BarterForm";
import { getEquipment, addEquipment, Equipment, EquipmentFormData } from "@/services/api";
import { toast } from "sonner";

const Barter = () => {
  // State for equipment list
  const [equipmentList, setEquipmentList] = useState<Equipment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch equipment on component mount
  useEffect(() => {
    const fetchEquipment = async () => {
      setIsLoading(true);
      try {
        const data = await getEquipment();
        setEquipmentList(data);
        setError(null);
      } catch (err) {
        setError("Failed to load equipment. Please try again later.");
        toast.error("Failed to load equipment");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEquipment();
  }, []);

  // Function to add new equipment to the list
  const handleAddEquipment = async (formData: EquipmentFormData) => {
    try {
      const newEquipment = await addEquipment(formData);
      if (newEquipment) {
        setEquipmentList([...equipmentList, newEquipment]);
        toast.success("Equipment listed successfully!");
      }
    } catch (err) {
      toast.error("Failed to add equipment");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-32 px-4 pb-12 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Equipment Barter
          </h1>
          <p className="text-lg text-gray-600">
            List your farming equipment for exchange with other farmers. Help build
            a collaborative farming community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">List Your Equipment</h2>
            <BarterForm onSubmit={handleAddEquipment} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Available Equipment</h2>
            {isLoading ? (
              <div className="text-center py-8">
                <p>Loading equipment...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8 text-red-500">
                <p>{error}</p>
              </div>
            ) : equipmentList.length === 0 ? (
              <div className="text-center py-8">
                <p>No equipment available for barter yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {equipmentList.map((equipment) => (
                  <div key={equipment.id} className="border p-4 rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg">{equipment.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{equipment.description}</p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
                          <p className="text-sm text-gray-600">Condition: {equipment.condition}</p>
                          <p className="text-sm text-gray-600">Value: ₹{equipment.expectedValue}</p>
                          <p className="text-sm text-gray-600">Location: {equipment.location}</p>
                          <p className="text-sm text-gray-600">Owner: {equipment.owner}</p>
                        </div>
                      </div>
                      <button 
                        className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-colors"
                        onClick={() => {
                          toast.info(`Contact ${equipment.owner} to barter for ${equipment.name}`);
                        }}
                      >
                        Barter
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Barter;
