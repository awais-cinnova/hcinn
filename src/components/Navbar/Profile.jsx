import React from 'react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';
import { useAuthStore } from '../../store/authStore';
import { getInitials } from '../../lib/utils';
import Image from '../ui/image';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  
const navigate = useNavigate();

  return (
    <div className="w-[20%] max-w-[30%] flex items-center gap-[8px] relative">
         <Button className='h-[40px] w-[40px] border-2 border-white '> {getInitials(user?.name)}</Button>

      <div className="flex flex-col items-start justify-center tracking-tighter leading-none">
        <h6 className="mb-0.5 font-semibold">{user?.name}</h6>
        <h4 className="text-sm capitalize text-gray-400">{user?.role}</h4>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-transparent">
            <Image
              src="/arrow-down.svg"
              alt="arrow-down"
              className="w-[18px] h-[18px] cursor-pointer"
            />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>
            <div className="flex flex-col items-start px-2">
              <h6 className="mb-0.5 font-semibold text-black">{user?.name}</h6>
              <h4 className="text-sm capitalize text-gray-600">{user?.role}</h4>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem className={"cursor-pointer"} onSelect={() => navigate(`/owner-detail/${user?.id}`)}> Profile </DropdownMenuItem>
          <DropdownMenuItem  className={"cursor-pointer"} onSelect={() => alert('Go to Settings')}> Settings  </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onSelect={() => logout()} className="text-red-600 cursor-pointer hover:text-red"> Logout </DropdownMenuItem>
          
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
