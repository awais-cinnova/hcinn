import { useState, useEffect } from "react";
import { useDataStore } from "../../store/dataStore";
import { Button } from "../ui/button";

const EditHostelModal = ({ isOpen, onClose, hostel }) => {
  const updateHostel = useDataStore((state) => state.updateHostel);
  const addRoom = useDataStore((state) => state.addRoom);
  const addBed = useDataStore((state) => state.addBed);
  const deleteRoom = useDataStore((state) => state.deleteRoom);
  const deleteBed = useDataStore((state) => state.deleteBed);
  const roomTypes = useDataStore((state) => state.roomTypes);
  
  const [prevProtocol , setprevProtocol] = useState(hostel?.protocol || "");

  const  newRoom = {
        id: Date.now() + Math.random(),
        hostelId: hostel.id,
        rooms: 0,   roomsAvailable: 0, roomsOccupied: 0,
    };
    const newBed = {
        id: Date.now()+ Math.random(),
        hostelId: hostel.id,
        beds: 0,    bedsAvailable: 0,   bedsOccupied: 0,
    };
  
  const [form, setForm] = useState({ name: "", location: "", protocol: "",});

  useEffect(() => {
    if (hostel) {
      setForm({ name: hostel.name, location: hostel.location, protocol: hostel.protocol, });
      setprevProtocol(hostel.protocol);
    }}, [hostel]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateHostel(hostel.id, form);
    if (prevProtocol !== form.protocol) 
    {
      const hostelRooms = useDataStore.getState().rooms.filter(r => r.hostelId === hostel.id);
      const hostelBeds = useDataStore.getState().beds.filter(b => b.hostelId === hostel.id);

        if(prevProtocol === "Room")
        {
            if(form.protocol === "Bed") {
                hostelRooms.forEach(r => deleteRoom(r.id)); }
            addBed({...newBed , id:Date.now()+ Math.random()});
        }
        else if(prevProtocol === "Bed")
        {
            if(form.protocol === "Room") {
                hostelBeds.forEach(b => deleteBed(b.id));}

            roomTypes.forEach((rt) => addRoom({ ...newRoom, id: Date.now() + Math.random(), typeId: rt.id}));
        }
        else 
        {
                if(form.protocol === "Room") {
                    hostelBeds.forEach(b => deleteBed(b.id));}
                else if(form.protocol === "Bed") {
                    hostelRooms.forEach(r => deleteRoom(r.id)); }
        }
    }
    onClose();
  };
    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Hostel</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Hostel Name" 
            className="border p-2 rounded" required/>

          <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="Location"
            className="border p-2 rounded"required/>

          <select name="protocol" value={form.protocol} onChange={handleChange} className="border p-2 rounded" required>
              <option value="">Select Protocol</option>
              <option value="Bed">Bed</option>
              <option value="Room">Room</option>
              <option value="Bed/Room">Bed/Room</option>
          </select>

          <div className="flex justify-end gap-3 mt-4">
              <Button type="button" onClick={onClose} className="bg-gray-200 text-black" > Cancel </Button>
              <Button type="submit" className="bg-blue-600 text-white"> Save </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditHostelModal;
