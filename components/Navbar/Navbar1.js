import React, { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Image from "next/image";
import { AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";
import NavDrawer from "./NavDrawer";
import "animate.css";

const Navbar1 = () => {
  const style = {
    navDrawer: "flex sm:hidden items-center justify-center ",
    wrapper:
      "absolute sm:relative text-gray-200 pt-1 md:pt-4 z-10  bg-gray-900",
    mainNav:
      "flex items-center justify-between py-1 md:py-1 hidden sm:flex w-[100%] md:w-[90%] mx-auto",
    list: "list-none cursor-pointer text-primary md:mx-4 hover:opacity-[0.8] text-sm",
    navContainer: "flex items-center justify-center",
    cartButton:
      "flex items-center justify-center mx-5 bg-gray-200 text-gray-900 px-3 py-2 text-sm rounded hover:opacity-[0.9]",
    img: "cursor-pointer",
  };
  const [Enter, setEnter] = useState(false);
  return (
    // install the mui first
    <div className={style.wrapper}>
      <nav className={style.mainNav}>
        <div className={style.img}>
          <Link href="/">
            <Image src={"/logo.png"} height={100} width={100} />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className={style.navContainer}>
            <Link href="/">
              <li className={style.list}>HOME</li>
            </Link>{" "}
            <Link href="/">
              <li className={style.list}>SERVICES</li>
            </Link>{" "}
            <Link href="/">
              <li className={style.list}>WHY US</li>
            </Link>
            <Link href="/">
              <li className={style.list}>ACHIEVEMENTS</li>
            </Link>
          </div>
          <Link href="/contact">
            <button
              className={style.cartButton}
              onMouseEnter={() => setEnter(true)}
              onMouseLeave={() => setEnter(false)}
            >
              <h2>CONTACT</h2>
              <AiOutlinePhone
                className={`text-2xl md:text-xl text-gray-900 mx-2 ${
                  Enter && "animate__animated animate__tada"
                }`}
              />
            </button>
          </Link>
        </div>
      </nav>
      <div className={style.navDrawer}>
        <NavDrawer />
      </div>
    </div>
  );
};

export default Navbar1;
