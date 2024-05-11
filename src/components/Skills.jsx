import React from "react";

const Skills = () => {
  return (
    <>
      <div className="bg-[#111827]  lg:h-[300px] text-white flex flex-col justify-between items-center pt-6 lg:pt-3 rounded-3xl shadow-2xl">
        <h1 className="text-center text-2xl pb-8 lg:pb-0 lg:pt-12">Skills</h1>
        <div className="flex flex-col lg:flex-row lg:justify-around lg:w-[1000px] lg:h-[390px] space-y-8 lg:space-y-0 mx-10 lg:mx-0">
          <div>
            <h1 className="text-[20px] font-semibold pb-4">Languages</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold pb-4">Qualification</h1>
            <ul>
              <li>
                <p>Higher Level Education in Science</p>
              </li>
              <li>
                <p>
                  Bachelor of Science in Computer Science and Information
                  Technology(B.Sc. CSIT).
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold pb-4">Frameworks</h1>
            <ul>
              <li>Tailwind CSS</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
