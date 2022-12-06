import React, { useState, useEffect } from "react";
import client from "../api/client";
const style = {
  wrapper: "py-12 md:py-16 px-2",
};
const index = () => {
  const [Newsletter, setNewsletter] = useState([]);
  const [Contact, setContact] = useState([]);
  const [IsPassword, setIsPassword] = useState(false);
  const [Pass, setPass] = useState("");
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
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = () => {
    if (Pass == "admin.mm") {
      setIsPassword(true);
    }
  };
  const handleSubmit1 = () => {
    setPass("");
    setIsPassword(false);
  };
  return (
    <div className={style.wrapper}>
      {IsPassword ? (
        <div>
          <button
            onClick={handleSubmit1}
            className="text-white px-8 md:px-12 py-2 md:py-2 bg-gray-900"
          >
            LOGOUT
          </button>
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
      ) : (
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-gray-900 text-center text-3xl md:text-4xl">
            Enter Details
          </h2>
          <input
            type="password"
            value={Pass}
            onChange={handlePassChange}
            className=" outline-none rounded my-4 border-2 border-black placeholder:text-xs p-2"
            placeholder="PASS..."
          />
          <button
            onClick={handleSubmit}
            className="text-white px-8 md:px-12 py-2 md:py-2 bg-gray-900"
          >
            SEND
          </button>
        </div>
      )}
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
