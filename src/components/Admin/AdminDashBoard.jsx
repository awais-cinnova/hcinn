import  { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import AdminTable from './AdminTable';
import AdminTableActions from './AdminTableActions';
import { PaginationDemo } from '../HelpingUI/Pagination';
import { useDataStore } from '../../store/dataStore'; 

export default function AdminDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");

  const owners = useDataStore((state) => state.owners);
  const totalOwners = owners.length;

  return (
    <div className="flex flex-col bg-[#F7F7F7] gap-[24px] min-h-screen w-screen absolute box-border pt-4 pl-4 pr-2">
      <Navbar />
      
      <div className="flex items-center justify-between h-[48px]">
        <div>Hostels ({totalOwners})</div>
        <AdminTableActions />
      </div>


      <AdminTable   data={owners}   currentPage={currentPage}   rowsPerPage={rowsPerPage} />

      <PaginationDemo
        totalItems={totalOwners}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
