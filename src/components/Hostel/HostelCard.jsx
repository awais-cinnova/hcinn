const HostelCard = ({ hostel, className , imgClass }) => {
  return (
    <div className={className}>
      <img  src="/hh.png"  alt={hostel.name} className={` w-full ${imgClass}  max-w-[800px] max-h-[800px] object-fit rounded-md mb-3`}/>
    
    <div className="min-w-[250px] flex-1 flex flex-col items-center">
      <h2 className="text-[0.5em] sm:text-[0.75em] xl:text-[1em] 2xl:text-[1.25em] font-semibold">{hostel.name}</h2>
      <p className="text-[0.4em] text-gray-600 sm:text-[0.5em]">{hostel.location}</p>
      <p className="text-[0.4em] sm:text-[0.5em]">Total Rooms: {hostel.totalRooms}</p>
      <p className="text-[0.4em] sm:text-[0.5em]">Booking Protocol: {hostel.protocol}</p>
    </div>
    </div>
  );
};
export default HostelCard;