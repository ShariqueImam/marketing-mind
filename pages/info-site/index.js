import React, { useState, useEffect } from "react";
import client from "../api/client";
const style = {
  wrapper: "py-12 md:py-16",
};
const index = () => {
  const [Newsletter, setNewsletter] = useState([]);
  const [Contact, setContact] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const p = await client.fetch(`*[_type == "contact"]`);
      setContact(p);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const p = await client.fetch(`*[_type == "newsletter"]`);
      setNewsletter(p);
    };
    fetchData();
  }, []);

  return (
    <div className={style.wrapper}>
      <h2 className="text-3xl md:text-4xl font text-center text-gray-900 font-semibold">
        Contact Details
      </h2>
      <div className="flex flex-col w-[100%] md:w-[60%] mx-auto ">
        {Contact.map((item) => (
          <SingleContact
            name={item.name}
            email={item.email}
            message={item.message}
            createdAt={item.createdAt}
          />
        ))}
      </div>
      <h2 className="text-3xl md:text-4xl font text-center text-gray-900 font-semibold my-12">
        NEWSLETTER Details
      </h2>
      <div className="flex flex-col w-[100%] md:w-[60%] mx-auto ">
        {Newsletter.map((item) => (
          <SingleContact
            name={item.name}
            email={item.email}
            message={item.message}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default index;

const SingleContact = ({ createdAt, name, email, message }) => {
  return (
    <div className="flex flex-wrap flex-col border-2 border-gray-200 shadow-md p-2 my-2">
      <h2 className="text-md md:text-lg text-gray-900">
        <span className="font-bold">NAME : </span> {name}
      </h2>
      <h2 className="text-md md:text-lg text-gray-900">
        <span className="font-bold">EMAIL : </span> {email}
      </h2>
      <h2 className="text-md md:text-lg text-gray-900">
        <span className="font-bold">MESSAGE : </span> {message}
      </h2>
      <h2 className="text-md md:text-lg text-gray-900">
        <span className="font-bold">SENT AT : </span> {createdAt}
      </h2>
    </div>
  );
};
