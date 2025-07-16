import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import NavItems from "../NavItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="px-[20px] md:px-[50px] lg:px-[90px] ">
        <div className="flex justify-between items-center min-h-[80px]">
          <h2
            className="text-[#EAB308] text-2xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            Ashish
          </h2>
          <div className="hidden lg:block">
            <NavItems />
          </div>
          <div className="lg:hidden">
            <button onClick={handleToggleMenu}>
              {!isOpen ? (
                <FaBars className="text-white" size={22} />
              ) : (
                <RxCross2 className="text-white" size={25} />
              )}
            </button>
          </div>
        </div>
      </header>
      <div className="lg:hidden bg-[#020617]">{isOpen && <NavItems />}</div>
    </>
  );
};

export default Navbar;
