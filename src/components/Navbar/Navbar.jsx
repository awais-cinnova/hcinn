import React, { useState } from 'react';
import Links from '../Links';
import MobileMenu from './MobileMenu';
import Logo from '../Logo'; 
import {Button} from '../ui/button'
import Profile from './Profile'
import { useAuthStore } from '../../store/authStore'; 

const adminLinks = [
  { label: "Dashboard", path: "/dashboard", type: "internal" },
  { label: "Manage Users", path: "/admin/users", type: "internal" },
  { label: "Hostels", path: "/dashboard/hostels", type: "internal" },
];

const userLinks = [
  { label: "Dashboard", path: "/dashboard", type: "internal" },
];


const Navbar = ({navlinks}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
   const user = useAuthStore((state) => state.user); 
  return (
      
    <nav className="flex items-center justify-between bg-[#000000]  text-[#f0f0f0]  h-[60px] rounded-[12px] pl-[24px] " >

        <div className="flex items-center justify-start max-w-[70%] gap-[24px]">
            <Logo/>
            <Links onClick={closeMenu} links = {user.role ==="admin"?adminLinks:userLinks} className = "w-screen hidden md:flex gap-[16px] item-start pl-[16px] pb-[20px] pr-[16px] pt-[20px]"/>
        </div>
        
        <Profile/>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} links = {navlinks}  className="md:hidden" />
    </nav>
  );
};

export default Navbar;