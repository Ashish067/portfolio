import React from "react";
import ProfilePhoto from "../assets/img-1.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="lg:relative bg-[#111827] w-full h-auto flex justify-center items-center py-10 rounded-3xl shadow-2xl md:w-full">
        <div className=" text-white flex flex-col lg:flex-row items-start justify-between lg:w-[1080px] md:flex md:items-center">
          <div className="lg:w-[500px] min-w-[320px] flex flex-col items-start ">
            <h1 className="text-[#f3ce53f5] pb-2">Hello! Welcome </h1>
            <h3 className="text-2xl">I am Ashish Bhandari,</h3>
            <p className="py-6 text-justify">Front-end Developer</p>
          </div>
          <div className="lg:absolute -left-[0px] xl:left-[98px] top-[64%] flex justify-start space-x-4 items-start  pt-8 pb-0 md:py-6 order-2 md:flex md:justify-center lg:order-none">
            <button className="bg-[#FACC15] text-[#2F2604] px-4 py-2 rounded-md hover:bg-[#facc15e1]">
              Download Resume
            </button>
            <button className="bg-[#FACC15] text-[#2F2604] px-4 py-2 rounded-md hover:bg-[#facc15e1]">
              See My Work
            </button>
          </div>
          <img
            src={ProfilePhoto}
            alt="here need to be my photo"
            className="w-[340px] h-[340px] lg:w-[340px] lg:h-[380px] object-cover lg:rounded-lg max-w-full max-h-[500px] md:w-[300px] rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
