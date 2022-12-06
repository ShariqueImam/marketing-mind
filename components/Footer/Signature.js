import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
const style = {
  wrapper:
    " flex flex-col md:flex-row items-start md:items-start md:mt-8  md:w-[100%] border-t-2 border-gray-200 py-5 p-3 md:p-3",
  social: "flex md:w-[30%] my-3 mx-0 md:mx-12",
  nav: " md:w-[50%]",
  list: "mr-8 md:mx-5 text-xs text-white decoration-none list-none my-7 cursor-pointer hover:border-primary border-b-[1px]  border-transparent max-w-fit font font-semibold",
  para: "text-xs text-white text-start md:text-end",
  infoNav:
    "flex flex-col items-end justify-around  md:w-[40%] my-5 md:my-2 mx-0 md:mx-12",
  info: "text-md text-white",
};
const Signature = () => {
  return (
    <div className={style.wrapper}>
      {/* adding the social icons */}
      <div className={style.social}>
        <Link href="">
          <AiFillFacebook className="text-2xl md:text-3xl mr-6 cursor-pointer text-white" />
        </Link>
        <Link href="">
          <AiFillTwitterCircle className="text-2xl md:text-3xl mr-6 cursor-pointer text-white" />
        </Link>
        <Link href="">
          <AiOutlineInstagram className="text-2xl md:text-3xl mr-6 cursor-pointer text-white" />
        </Link>
      </div>
      <div className={style.nav}>
        <p className={style.para}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
      <div className={style.infoNav}>
        {/* <h2 className={style.info}>Do not sell my info (California)</h2> */}
        <h2 className={style.info}>© 2021 MARKETING MIND (Pty) Ltd</h2>
      </div>
    </div>
  );
};

export default Signature;
