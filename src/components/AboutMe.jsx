import { useNavigate } from "react-router-dom";
import ProfilePhoto2 from "../assets/img-2.jpg";
import Skills from "./Skills";

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-[#020617] flex justify-center items-center">
        <div className="lg:w-[1080px] lg:min-h-[600px] my-20 flex flex-col lg:flex-row justify-around items-center">
          <div className="mt-6 md:mt-0 border-[12px] border-yellow-400 w-[330px] h-[330px] md:h-[400px] md:w-[370px] relative rounded-lg">
            <img
              src={ProfilePhoto2}
              alt="image"
              loading="lazy"
              className="w-[340px] h-[330px] md:w-[370px] md:h-[400px] object-cover rounded-lg absolute -top-16 left-6 md:-top-12 md:left-6"
            />
          </div>

          <div className="w-[80%] md:w-[530px]  text-justify space-y-5 ">
            <h1 className="text-white text-[24px] pt-6 lg:pt-0">
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
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#FACC15] text-[#2F2604] px-4 py-2 rounded-md hover:bg-[#facc15e1]"
            >
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
