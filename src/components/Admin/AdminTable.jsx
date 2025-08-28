import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import Image from "../ui/image";
import { useNavigate } from "react-router-dom";

export function AdminTable({ data, currentPage, rowsPerPage }) {
  const navigate = useNavigate();

  const owners = data || [];

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const displayedOwners = owners.slice(start, end);

  return (
    <div className="p-[22px] pb-[15px] w-full rounded-[12px] bg-[#FFFFFF] ">
      <Table className="table-auto w-full text-left font-normal text-base leading-[120%] tracking-[-0.05em]">
        <TableHeader>
          <TableRow className="py-12 border-none">
            <TableHead>Names</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedOwners.map((owner) => (
            <TableRow className="[&>td]:py-4" key={owner.id}>
              <TableCell className="font-medium">{owner.name}</TableCell>
              <TableCell>{owner.email}</TableCell>
              <TableCell>{owner.phoneNumber}</TableCell>
              <TableCell>{owner.role}</TableCell>
              <TableCell className="text-right">

                <Button variant="default" className="bg-transparent cursor-pointer" onClick={() => navigate(`/admin-dashboard/owner/${owner.id}`)}>
                  <Image src="detail-icon.svg" alt="View Details" className="w-6 h-6" />
                </Button>
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminTable;
