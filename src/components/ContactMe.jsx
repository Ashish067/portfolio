const ContactMe = () => {
  return (
    <>
      <div className="bg-[#111827] text-white lg:h-[520px] rounded-3xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-xl pt-6 lg:pt-10">
            Contact<span className="text-[#eab308]">Me</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around pt-12 lg:pt-16">
          <div className="flex items-center order-1 mt-8 lg:mt-0">
            <ul className="space-y-3">
              <li>
                <span className="font-bold text-[#eab308]">Address: </span>
                Tulsipur -05-Dang, Nepal
              </li>
              <li>
                <span className="font-bold text-[#eab308]">Phone: </span>
                +977 9812812367
              </li>
              <li>
                <span className="font-bold text-[#eab308]">Email: </span>
                bhandariaashish54@gmail.com
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="bg-[#1b253a] w-[363px] p-2"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="bg-[#1b253a] w-[363px] p-2"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                cols="45"
                rows="5"
                placeholder="Message"
                className="bg-[#1b253a] p-2"
              ></textarea>
            </div>
            <div>
              <button className="bg-[#FACC15] text-[#2F2604] px-4 py-2 rounded-md hover:bg-[#facc15e1]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
