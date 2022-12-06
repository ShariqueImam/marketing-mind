import React, { useState, useEffect } from "react";
import Image from "next/image";
import Signature from "./Signature";
import axios from "axios";
import Link from "next/link";
const style = {
  wrapper: "ml-0 bg-gray-900",
  footerNav: "flex flex-col md:flex-row mt-2 md:mt-8 w-[100%] pt-12 md:py-24 ",
  btnContainer: "flex md:flex-row mb-7 mt-7 justify-around",
  left: "flex flex-col items-center md:items-start justify-between md:w-[50%] mx-3 md:mx-12",
  right:
    "flex flex-col md:flex-row md:w-[50%] md:items-start md:justify-center",
  col1: "md:w-[50%] flex flex-col items-start justify-start mx-8 md:mx-0",
  col2: "md:w-[50%] flex flex-col items-start justify-start mx-8 md:mx-0",
  list: "text-white decoration-none list-none my-2 cursor-pointer border-move-animation1 hover:opacity-[0.85]",
  list1:
    "text-white decoration-none list-none my-2 cursor-pointer border-move-animation1  hover:opacity-[0.85]",
};
const Footer = (props) => {
  const [Email, setEmail] = useState("");
  const tokenWithWriteAccess =
    "ski1HTp5AW9fFrV1eLJDUfwsda3UGso5dafXgaNicwqeopE5aYNAFayHx8j7Oxq4S6U6KqY27ssDHdo1uAxY8fIXbHo9H7EuneTC4f5zkrr2gu21Pk7jpgedUpO8XE5Yd3GaIgTsf9Thz1gRSsF5Hwd7CQQL8bpBuqvZjW0XACWRx3IxUNMQ";
  const submitHandler = (event) => {
    event.preventDefault();
    const sendData = async () => {
      const { data } = await axios.post(
        `https://nxg2q82s.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "newsletter",
                createdAt: new Date().toISOString(),
                email: Email,
              },
            },
          ],
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        }
      );
    };
    sendData();
    setEmail("");
  };
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <div className={style.footerNav}>
        <div className={style.left}>
          <Image width={190} height={190} src="/logo.png" />
          <div className={style.btnContainer}></div>
        </div>
        <div className={style.right}>
          <div className={style.col1}>
            <li className={style.list} onClick={() => props.onScroll("home")}>
              HOME
            </li>
            <li className={style.list} onClick={() => props.onScroll("services")}>
              SERVICES
            </li>
            <li className={style.list} onClick={() => props.onScroll("why")}>
              WHY US
            </li>
          </div>
          <div className={style.col2}>
            <li className={style.list1} onClick={() => props.onScroll("achievements")}>
              ACHIEVEMENTS
            </li>
            <Link href="/contact">
              <li className={style.list1}>CONTACT</li>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto items-center justify-center">
        <p className="font text-white my-2">Sign up for newsletter</p>
        <div className="flex flex-col md:flex-row items-center justify-center mb-7">
          <input
            type="email"
            className="px-4 md:px-6 py-2 md:py-2 w-[80vw] md:w-[15vw] outline-none my-3 rounded"
            placeholder="Email..."
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={submitHandler}
            className="bg-white text-primary px-4 md:px-6 py-2 md:py-2 mx-3 my-2 w-[100%] md:w-auto hover:opacity-[0.85] rounded"
          >
            SEND
          </button>
        </div>
      </div>
      <Signature />
    </div>
  );
};

export default Footer;
