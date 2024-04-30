import React from "react";

const Skills = () => {
  return (
    <>
      <div className="bg-[#111827]  h-[300px] text-white flex flex-col justify-between items-center pt-3">
        <h1 className="text-center text-2xl pt-12">Skills</h1>
        <div className="flex justify-around w-[1000px] h-[390px]">
          <div>
            <h1 className="text-[20px] pb-4">Languages</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[20px] pb-4">Qualification</h1>
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
            <h1 className="text-[20px] pb-4">Frameworks</h1>
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
