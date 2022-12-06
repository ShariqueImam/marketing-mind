import React, { useState } from "react";
import Link from "next/link";

const style = {
  card: "transition duration-[400ms] rounded flex flex-col flex-wrap md:no-wrap items-center justify-center border-2 border-white  w-[70%] md:w-[25%] py-4 md:py-8",
  icon: "mx-auto text-4xl md:text-5xl text-gray-900",
  heading:
    "my-4 text-gray-900 text-center text-2xl sm:text-lg md:text-3xl lg:text-4xl",
  details: "text-gray-500  text-center text-md sm:text-sm md:text-lg lg:text-md",
};

const SingleCard = ({ heading, details, icon }) => {
  return (
    <div
      // href="/properties"
      className={style.card}
    >
      <div className={style.icon}>{icon}</div>
      <div className={style.heading} style={{ fontFamily: "Poppins, serif" }}>
        {heading}
      </div>
      <div className={style.details} style={{ fontFamily: "Poppins, serif" }}>
        {details}
      </div>
    </div>
  );
};

export default SingleCard;
