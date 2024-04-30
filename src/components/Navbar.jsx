import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-[#020617] h-[50px] flex justify-center items-center">
        <div className="flex justify-between items-center w-[1080px] mx-auto">
          <h2 className="text-[#EAB308] text-2xl ">Ashish</h2>
          <ul className="text-white flex space-x-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
