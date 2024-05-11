import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <ul className="w-full text-white text-center flex  flex-col lg:flex-row  lg:space-x-8">
      <li className="py-4 lg:py-0 hover:bg-[#131c2d]">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="py-4 lg:py-0 hover:bg-[#131c2d]">
        <Link to={"/about"}>About</Link>
      </li>
      <li className="py-4 lg:py-0 hover:bg-[#131c2d]">
        <Link to={"/portfolio"}>Portfolio</Link>
      </li>
      <li className="py-4 lg:py-0 hover:bg-[#131c2d]">
        <Link to={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
};
export default NavItems;
