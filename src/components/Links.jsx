import React from "react";
import { Link } from "react-router-dom";

export const Links = ({ onClick, className, links=[] }) => (
  <div className={className}>
{links.map(({ label, path, type }) =>
  type =="internal" ? (
    <Link key={label} to={path} onClick={onClick} className="relative group inline-block text-sm font-medium capitalize hover:text-[#389cff]">
      {label}
      <span className="block h-[2px] text-[#389cff] w-0 bg-current transition-all duration-500 group-hover:w-full"></span>
    </Link>
  ) : (
    <div className="flex items-center gap-2" key={label}>
    <span className="text-[#5daff2] text-[1.1rem]" key={label} >{type} : </span>
    <a href={path} onClick={onClick} target="_blank"  className="text-sm font-medium hover:text-[#389cff]">
     {label}
    </a>
    </div>
  )
)}
  </div>
);
export default Links;