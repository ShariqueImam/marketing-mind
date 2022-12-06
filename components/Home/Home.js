import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import useWindowSize from "../../hooks/useWindowSize";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";

const style = {
  wrapper: "h-[100vh] w-[100vw] flex flex-col h-[70%]",
  heading:
    "text-5xl md:text-7xl text-white  my-2 md:my-3 w-[100%] md:w-[40%] text-center md:text-left font-semibold",
  para: "tracking-wider text-white text-lg md:text-xl my-3 md:my-8 text-center md:text-left mx-auto md:mx-0 w-[100%] md:w-[50%]",
  btn: " px-8 md:px-6 py-3 md:py-4 transition duration-[200ms] max-w-fit mx-auto md:mx-0 ",
  arrow: `text-xl`,
  btnContainer:
    "cursor-pointer hover:opacity-[0.9]  mx-auto md:mx-0 my-2 flex items-center justify-start bg-white   text-gray-900 w-[80%] md:w-[20%] px-4",
  mainContent:
    "w-[90%] md:w-[80%] h-[80%] flex flex-col items-start justify-center  mx-auto",
};

const Home = (props) => {
  const { width } = useWindowSize();
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(width < 500 && "/homebg.jpg") ||
      (width > 500 && width < 1000 && "/homebg.jpg") ||
      (width > 1000 && "/homebg.jpg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 100vh;
    width: 100vw;
  `;
  const onScroll = (val) => {
    props.onScroll(val);
  };
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <FeaturedBackground1>
        <Navbar onScroll={onScroll} />
        <div className={style.mainContent}>
          <h2 className={style.heading}>Take your business to the moon</h2>
          <p className={style.para}>
            We offer complete development of websites, seo services and lead
            generation.
          </p>
          <div className={style.btnContainer}>
            <button className={style.btn}>GET STARTED</button>
            <AiOutlineArrowRight className={style.arrow} />
          </div>
        </div>
      </FeaturedBackground1>
    </div>
  );
};

export default Home;
