import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Button } from "../ui/button";
import Image from "../ui/image";
import { useDataStore } from "../../store/dataStore"; 
import Personal from "../Bio/Personal";
import Contact from "../Bio/Contact";
import OwnedProperties from "../Bio/OwnedProperties";

const OwnerDetail = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 2;
  const { id } = useParams();
  const navigate = useNavigate();

  const owners = useDataStore((state) => state.owners);
  const hostels = useDataStore((state) => state.hostels);

  const owner = owners.find((o) => o.id === id && o.role === "owner");
  if (!owner) return <div className="p-4">Owner not found!</div>;

  const ownedProperties = hostels.filter((h) => h.ownerId === owner.id);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = ownedProperties.slice(indexOfFirstProperty, indexOfLastProperty);

  return (
    <div className="flex flex-col bg-[#F7F7F7] gap-6 min-h-screen w-screen absolute box-border pt-4 pl-4 pr-2">
      <Navbar />

      {/* Same component of Owner Detail */}
      <div className="flex items-center justify-start h-12 gap-4">
        <Button onClick={() => navigate(-1)} className="bg-transparent">
          <Image src="/back-icon.svg" alt="Back" className="w-[18px] h-[18px] cursor-pointer" />
        </Button>
        <div className="text-xl font-bold">Owner Detail</div>
      </div>

      {/* Main Layout Grid */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6 flex-[250%]">
          <Personal owner={owner} />
          <Contact owner={owner} />
        </div>

        {/* Right Column */}
        <OwnedProperties
          ownedProperties={ownedProperties}
          currentProperties={currentProperties}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          propertiesPerPage={propertiesPerPage}
        />
      </div>
    </div>
  );
};

export default OwnerDetail;
