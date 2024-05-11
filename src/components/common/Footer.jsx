import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="text-white py-6 flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold pb-6">
          Find me on Social Media and Github
        </h1>

        <div className="flex justify-center items-center space-x-8">
          <Link
            to="https://www.facebook.com/vandari.aashis"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebookSquare size={30} />
          </Link>
          <Link
            to="https://github.com/Ashish067"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub size={30} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/ashish-bhandari-941b132a8/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
