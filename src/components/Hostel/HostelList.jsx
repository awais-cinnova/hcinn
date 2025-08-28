import HostelCard from "./HostelCard";
import { useNavigate } from "react-router-dom";


const HostelList = ({ hostels = [] }) => {
  const  navigate = useNavigate();
  if (!hostels.length) {
    return (
      <div className="text-center text-gray-500 mt-12">
        <p>You haven’t added any hostels yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {hostels.map((hostel) => (
         <div key={hostel.id}  className="border rounded-md p-4 shadow hover:shadow-lg transition cursor-pointer " onClick={() => navigate(`/hostel/${hostel.id}`)}>
            <HostelCard key={hostel.id} hostel={hostel} className="text-2xl" />
        </div>
      ))}
    </div>
  );
};

export default HostelList;
