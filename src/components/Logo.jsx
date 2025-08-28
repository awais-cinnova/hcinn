
import React from "react";
import { Button } from "./ui/button";
import Image from './ui/image'
export const Logo = () => {
  return (
    <Button className="">
       <Image src="/logo.svg" alt="My Logo" className="w-[15.92px] h-[12.02px]" />
    </Button>
  );
};

export default Logo;

