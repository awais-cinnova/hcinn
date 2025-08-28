import{ useParams, useNavigate } from "react-router-dom";
import { useDataStore } from "../../store/dataStore"; 
import HostelCard from "./HostelCard";
import RoomBedTabs from "../Tab/RoomBedTabs";
import Navbar from "../Navbar/Navbar";
import { Button } from "../ui/button";
import Image from "../ui/image";
import EditHostelModal from "./EditHostelModal";
import { useState } from "react";

const HostelDetail = () => {
  const { hostelId } = useParams();
  const navigate = useNavigate();
  const hostels = useDataStore((state) => state.hostels);
  const rooms = useDataStore((state) => state.rooms);
  const roomTypes = useDataStore((state) => state.roomTypes);
  const beds = useDataStore((state) => state.beds);
  const hostel = hostels.find((h) => h.id === hostelId);
  const [isEditOpen, setIsEditOpen] = useState(false);


  if (!hostel) return <h2 className="text-center text-red-500">Hostel not found</h2>;
  

  const hostelRooms = rooms.filter((room) => room.hostelId === hostel.id);
  const hostelBeds = beds.filter((bed) => bed.hostelId === hostel.id);
  return (
    <div className="p-6 flex flex-col gap-3">
      <Navbar/>

      <div className="flex items-center justify-start h-12 gap-4">
        <Button onClick={() => navigate(-1)} className="bg-transparent">
          <Image src="/back-icon.svg" alt="Back" className="w-[18px] h-[18px] cursor-pointer" />
        </Button>
        <div className="text-xl font-bold">Hostel Detail</div>
        <Button onClick={() => setIsEditOpen(true)} className="bg-blue-600 text-white">
          Edit Hostel
        </Button>
      </div>
    <EditHostelModal
  isOpen={isEditOpen}
  onClose={() => setIsEditOpen(false)}
  hostel={hostel}
/>
      <div className="border rounded-md p-4 shadow hover:shadow-lg transition cursor-pointer">
        
        <HostelCard key={hostel.id} hostel={hostel} imgClass="xl:w-[60%]"
          className="flex flex-col xl:flex-row flex-1 gap-5 items-center text-5xl"
        />
      </div>

      <RoomBedTabs  hostel={hostel} hostelRooms={hostelRooms}  hostelBeds={hostelBeds} roomTypes={roomTypes} />
    </div>
  );
};

export default HostelDetail;
