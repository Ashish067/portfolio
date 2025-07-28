import { useState } from "react";
import Coding from "../../../assets/coding.svg";
import { PortfolioProjects } from "../../../datas/portfolio";
import { truncateText } from "../../../utils/truncateText";

const ProjectCard = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="bg-[#020617] flex flex-col justify-center">
          <h1 className="text-center text-white text-2xl pb-10 pt-0">
            Portfolio Projects
          </h1>
          <p className="text-center text-white text-xl pt-6 pb-12">
            In this section you can find the works and projects I have worked on
            and also see the live demo. Thanks for being here!!
          </p>
          <div className="flex flex-col lg:flex lg:flex-row lg:justify-around lg:items-center lg:shadow-2xl space-y-4 items-center">
            {PortfolioProjects.map((project) => (
              <div>
                <div
                  key={project.id}
                  className=" bg-[#a0a5de] w-72 h-96 rounded-lg shadow-xl hover:animate-tiltshaking relative py-2"
                >
                  <img src={Coding} alt="picture" className="h-36 w-72" />
                  <h1 className="text-center font-bold text-green-100">
                    {project.title}
                  </h1>
                  <p className="w-72 h-32 px-2 my-3 overflow-hidden">
                    <span className="text-white inline-block">
                      (Uses: {truncateText(project.uses)})
                    </span>
                    <span className="text-lg font-medium"> Features:</span>{" "}
                    {truncateText(project.description, 120)}
                  </p>
                  <button
                    onClick={() => openModal(project)}
                    className="bg-[#0e2e4e] text-white rounded-xl p-2 hover:bg-[#3e5d7b] absolute left-1/2  transform -translate-x-1/2"
                  >
                    Read more
                  </button>
                </div>
                {showModal && selectedProject && (
                  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 relative">
                      <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
                      >
                        ×
                      </button>
                      <h2 className="text-2xl font-bold text-[#0e2e4e] mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-800 mb-2">
                        <strong>Uses:</strong> {selectedProject.uses}
                      </p>
                      <p className="text-gray-700">
                        <strong>Features:</strong> {selectedProject.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
