import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form
        action="https://formsubmit.co/coolboyashish5@gmail.com"
        method="POST"
        className="flex flex-col space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="bg-[#1b253a] w-[300px] md:w-[450px] p-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-[#1b253a] w-[300px] md:w-[450px] p-2"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="bg-[#1b253a] w-[300px] md:w-[450px] p-2"
        />

        <textarea
          name="message"
          id="message"
          cols="45"
          rows="5"
          placeholder="Message"
          className="bg-[#1b253a] p-2 w-[300px] md:w-[450px]"
        />
        <button className="bg-[#FACC15] text-[#2F2604] px-4 py-2 rounded-md hover:bg-[#facc15e1]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
