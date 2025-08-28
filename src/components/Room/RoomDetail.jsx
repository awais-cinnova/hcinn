import { Button } from "../ui/button";
import Image from "../ui/image";

const RoomDetail = ({ room, type, hostel, onEdit, onDelete }) => {
  return (
    <>
      <h3 className="text-xl 2xl:text-3xl font-semibold mb-2">{type?.name}</h3>
      <p>Total Rooms: {room.rooms}</p>

      {/* Room Info */}
      <p>
        Rooms Available: {room.roomsAvailable} / Occupied: {room.roomsOccupied}
      </p>

      <Button className="bg-transparent flex w-full justify-between mt-3">
        <div
          onClick={onDelete}
          className="min-w-[25px] max-w-[40px] w-[4%] h-[4%] flex items-center justify-center cursor-pointer"
        >
          <Image src="/delete-icon.svg" alt="Delete" className="w-4/5" />
        </div>
        <div
          onClick={onEdit}
          className="min-w-[25px] max-w-[40px] w-[4%] h-[4%] flex items-center justify-center cursor-pointer"
        >
          <Image src="/edit-icon.svg" className="w-4/5" />
        </div>
      </Button>
    </>
  );
};

export default RoomDetail;