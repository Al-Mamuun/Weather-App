import { X } from "lucide-react";
const LocationModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="h-95 w-95 rounded-2xl p-5 bg-gray-100 shadow-2xl">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Where are you today?</h2>
          <button onClick={onClose} className="cursor-pointer">
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
