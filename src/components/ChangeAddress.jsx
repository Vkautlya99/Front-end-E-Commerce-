import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState(" ");

  const onClose = () => {
    setAddress(newAddress);
    setIsModelOpen(false); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type New Address "
        className="border p-2 mb-4 w-full"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end ">
        <button
          className="bg-gray-500 text-white py-2 px-2 font-bold rounded mr-2"
          onClick={() => setIsModelOpen(false)} // Close the modal on cancel
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 font-bold rounded mr-2"
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
