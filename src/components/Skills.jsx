const Skills = () => {
  return (
    <>
      <div className="bg-[#111827]  lg:h-[300px] text-white flex flex-col justify-between items-center pt-6 lg:pt-3 rounded-3xl shadow-2xl gap-x-2">
        <h1 className="text-orange-400 text-center text-2xl pb-8 lg:pb-0 lg:pt-12">
          Skills
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:w-[1000px] lg:h-[390px] space-y-8 lg:space-y-0 mx-10 lg:mx-0">
          <div>
            <h1 className="text-[20px] font-semibold pb-4">Languages</h1>
            <ul>
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS</li>
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
          <div className="pb-4">
            <h1 className="text-[20px] font-semibold pb-3">
              Frameworks/Libraries
            </h1>
            <ul>
              <li>Next.js</li>
              <li>React</li>
              <li>Axios, Reatc Query (Tanstack Query)</li>
              <li>State Management: Zustand</li>
              <li>CSS: Material UI (MUI), Tailwind CSS</li>
              <li>Form Validation: zod, yup, react-hook-form</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
