import React from "react";
import ProfilePhoto from "../assets/img-1.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#111827] w-full h-screen flex justify-center items-center">
        <div className="text-white flex items-center justify-between w-[1080px] ">
          <div className="w-[500px]">
            <h1 className="text-[#f3ce53f5] pb-2">Hello! Welcome </h1>
            <h3 className="text-2xl">I am Ashish Bhandari</h3>
            <p className="py-6 text-justify">
              I am a CSIT graduate from Tribhuwan University. I am really
              excited to say hello to you through this website. I am currently
              working in some personal projects using HTML, CSS'tailwind css'
              and javascript 'react'. If you want to get in touch with me for
              hiring or collaborating in projects please click on the button
              below.
            </p>
            <button className="bg-[#FACC15] text-[#2F2604] px-4 py-2 rounded-md hover:bg-[#dcc462ed]">
              Contact me
            </button>
          </div>
          <img
            src={ProfilePhoto}
            alt="here need to be my photo"
            className="w-[340px] h-[380px] object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
