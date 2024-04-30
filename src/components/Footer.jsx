import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#020617] h-[72px] flex justify-center items-center">
        <div className="flex justify-around items-center w-[1180px] ">
          <h1 className="text-white">
            Copyright @Ashish Bhandari All Rights Reserved
          </h1>
          <a href="#" className="">
            <FaArrowCircleUp size={40} color="white" className="hover:" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
