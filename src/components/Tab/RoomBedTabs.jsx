import { useState } from "react";
import RoomCard from "../Room/RoomCard";
import BedCard from "../Bed/BedCard";

const RoomBedTabs = ({ hostel, hostelRooms, hostelBeds, roomTypes }) => {
  const [activeTab, setActiveTab] = useState("rooms");

  return (
    <div className="mt-6">
      {/* ---- Tabs ---- */}
      <div className="flex gap-3 border-b">
        <button onClick={() => setActiveTab("rooms")}
          className={`px-4 py-2 cursor-pointer ${ activeTab === "rooms"
              ? "border-b-2 border-blue-500 font-semibold": "text-gray-500"}`}
        >
          Rooms
        </button>
        <button onClick={() => setActiveTab("beds")}
          className={`px-4 py-2 cursor-pointer ${ activeTab === "beds"
              ? "border-b-2 border-blue-500 font-semibold": "text-gray-500"}`}
        >
          Beds
        </button>
      </div>

      {/* ---- Tab Content ---- */}
      {activeTab === "rooms" ? (
        <>
          <h2 className="text-2xl font-semibold mt-4 mb-3">Room Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hostelRooms.length > 0 ? (
              hostelRooms.map((room) => {
                const type = roomTypes.find((t) => t.id === room.typeId);
                return (
                  <RoomCard key={room.id} room={room} type={type} hostel={hostel}/>
                );
              })
            ) : (
              <p className="text-gray-500">No rooms available.</p>
            )}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mt-4 mb-3">Bed Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hostelBeds?.length > 0 ? (
                    hostelBeds?.map((bed) => {
                      return (
                        <BedCard  key={bed.id}  bed={bed}  hostel={hostel} />
                      );
                    })
                  ) : (
                    <p className="text-gray-500">No beds available.</p>
                  )}
          </div>
        </>
      )}
    </div>
  );
};

export default RoomBedTabs;