import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="text-white py-6 flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold pb-6">
          Find me on Social Media and Github
        </h1>

        <div className="flex justify-center items-center space-x-8">
          <a href="https://www.facebook.com/vandari.aashis">
            <FaFacebookSquare size={30} />
          </a>
          <a href="https://github.com/Ashish067">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/ashish-bhandari-941b132a8/">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
