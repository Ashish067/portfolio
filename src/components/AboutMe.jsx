import React from "react";
import ProfilePhoto2 from "../assets/img-2.jpg";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <>
      <div className=" bg-[#020617] flex justify-center items-center ">
        <div className="w-[1080px] min-h-[600px] flex justify-around items-center">
          <div className="border-[12px] border-yellow-400 h-[400px] w-[370px] relative rounded-lg">
            <img
              src={ProfilePhoto2}
              alt="my photo here"
              className="w-[370px] h-[400px] object-cover rounded-lg absolute -top-12 left-6"
            />
          </div>

          <div className="w-[530px]  text-justify space-y-5 ">
            <h1 className="text-white text-[24px]">
              About <span className="text-[#eab308]">Me</span>
            </h1>
            <p className="text-white">
              I am a CSIT graduate from Tribhuwan University. I am really
              excited to say hello to you through this website. I am currently
              working in some personal projects using HTML, CSS'tailwind css'
              and javascript 'react'. If you want to get in touch with me for
              hiring or collaborating in projects please click on the button
              below.
            </p>
            <button className="bg-[#FACC15] text-[#2F2604] px-4 py-2 rounded-md hover:bg-[#facc15e1]">
              Contact me
            </button>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default AboutMe;
