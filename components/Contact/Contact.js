import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import ContactForm from "./ContactForm";

const style = {
  wrapper: " flex flex-col font",
  contactContainer:
    "px-3 md:px-5 py-5 md:py-6 w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white my-16",
  smallHeading:
    "border-b-2 border-primary text-2xl md:text-3xl max-w-fit mx-auto py-2 text-primary my-6 font-semibold",
  singleContactContainer: "flex items-center md:mx-8",
  para: "text-primary text-sm md:text-sm my-2 md:my-4 hover:text-primary font",
};
const Contact = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.contactContainer}>
        <h2 className={style.smallHeading}>Contact Details</h2>
        <a className={style.singleContactContainer} href = "mailto: customer.service@marketing-mind.nl">
          <AiOutlineMail className="text-3xl text-primary bg-white rounded-full p-1 mx-4" />
          <p className={style.para}>customer.service@marketing-mind.nl</p>
        </a>
        {/* contact form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
