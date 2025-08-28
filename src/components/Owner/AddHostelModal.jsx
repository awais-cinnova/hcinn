import { useState, useEffect, use } from "react";
import { useDataStore } from "../../store/dataStore";
import { Button } from "../ui/button";

const AddHostelModal =  ({ isOpen, onClose, ownerId  })  => {

  const addRoom = useDataStore((state) => state.addRoom);
  const addBed = useDataStore((state) => state.addBed);
  const roomTypes = useDataStore((state) => state.roomTypes);
  const addHostel = useDataStore((state) => state.addHostel);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    protocol: "Bed/Room", 
    beds: 0,
    roomTypes: roomTypes.map((rt) => ({id:rt.id, type: rt.name, rooms: 0 })),
  });
  const [step, setStep] = useState(1);


  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleRoomTypeChange = (index, value) => {
    const updatedRoomTypes = [...formData.roomTypes];
    updatedRoomTypes[index].rooms = Number(value);
    setFormData({ ...formData, roomTypes: updatedRoomTypes });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let totalRooms = 0;
    let totalBeds = 0;

    if (formData.protocol === "Bed") totalBeds = formData.beds;
    else if (formData.protocol === "Room") totalRooms = formData.roomTypes.reduce((sum, rt) => sum + rt.rooms, 0);
    
    else if (formData.protocol === "Bed/Room") {
      totalBeds = formData.beds;
      totalRooms = formData.roomTypes.reduce((sum, rt) => sum + rt.rooms, 0);
    }
    const hostelId = Date.now().toString();
    addHostel({
      id:hostelId,
      ownerId: ownerId || "temp-owner",
      name: formData.name || "Unnamed Hostel",
      location: formData.location || "Unknown",
      totalRooms: totalRooms,
      protocol: formData.protocol,
      image: "/hh.png",
    });
  // 2️⃣ Add rooms if protocol includes "Room"
  if (formData.protocol === "Room" || formData.protocol === "Bed/Room") {
    formData.roomTypes.forEach((rt) => {
        addRoom({
          id:`${Date.now()}-${Math.random()}`,
          hostelId,
          typeId: rt.id, // or typeName if that's how your store works
          rooms:  rt.rooms,
          roomsAvailable:  rt.rooms,
          roomsOccupied: 0,
        });
    });
  }

  // 3️⃣ Add beds if protocol includes "Bed"
  if (formData.protocol === "Bed" || formData.protocol === "Bed/Room") {
      addBed({
        id: `${Date.now()}-${Math.random()}`,
        hostelId,
        beds: totalBeds,
        bedsAvailable: totalBeds,
        bedsOccupied: 0,
      });
  }

    console.log("Hostel added:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[500px] shadow-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Add New Hostel</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* STEP 1: Basic Info */}
          {step === 1 && (
            <>
              <input name="name" placeholder="Hostel Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" required />
              <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="border p-2 rounded"/>

              <select name="protocol" value={formData.protocol} onChange={handleChange} className="border p-2 rounded">
                 <option value="Bed">Bed</option>
                 <option value="Room">Room</option>
                 <option value="Bed/Room">Bed/Room</option>
              </select>

              <div className="flex justify-end gap-3 mt-4">
                <Button type="button" className="bg-[var(--primary-color)] text-white"  onClick={() => setStep(2)} >
                    Next
                </Button>
              </div>
            </>
          )}

          {/* STEP 2: Protocol-specific */}
          {step === 2 && (
            <>
              {/* Beds input (for Bed or Bed/Room) */}
              {(formData.protocol === "Bed" ||
                formData.protocol === "Bed/Room") && (
                <div>
                  <label className="block mb-2 font-semibold">
                    Number of Beds
                  </label>
                  <input
                    type="number"
                    name="beds"
                    min="0"
                    value={formData.beds}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                </div>
              )}

              {/* Room types input (for Room or Bed/Room) */}
              {(formData.protocol === "Room" ||
                formData.protocol === "Bed/Room") && (
                <div>
                  <h3 className="text-lg font-semibold mt-4">Room Types</h3>
                  {formData.roomTypes.map((room, index) => (
                    <div key={room.type} className="flex items-center gap-2">
                      <label className="w-24">{room.type}</label>
                      <input type="number" min="0" value={room.rooms}
                        onChange={(e) => handleRoomTypeChange(index, e.target.value)}
                        className="border p-2 rounded w-24"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-between gap-3 mt-4">
                  <Button type="button" className="bg-gray-300 text-black" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" className="bg-[var(--primary-color)] text-white" >
                    Save Hostel
                  </Button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddHostelModal;
