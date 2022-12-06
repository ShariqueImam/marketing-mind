import Head from "next/head";
import React, { useState } from "react";
import Home from "../components/Home/Home";
import Card from "../components/Card/Card";
import Infrastructure from "../components/Infrastructure/Infrastructure";
import Future from "../components/Future/Future";
import Explain from "../components/Explain/Explain";
import Counter from "../components/Counter/Counter";
import Footer from "../components/Footer/Footer";
import Animator from "../components/UI/Animator";
import { scroller } from "react-scroll";

const style = {
  wrapper: "",
};
export default function Main() {
  const onScroll = (value) => {
    if (typeof window !== "undefined") {
      // browser code
      scroller.scrollTo(`${value}`, {
        duration: 900,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };
  return (
    <Animator>
      <div className={style.container}>
        <Head>
          <title>MARKETING MIND | Develop Website, SEO , LEADS</title>
          <meta
            name="description"
            content="MARKETING MIND | Develop Website, SEO , LEADS"
          />
          <link rel="icon" href="/logo.png" />
        </Head>
        <Home onScroll={onScroll} />
        <div className="services">
          <Card />
        </div>
        <Infrastructure />
        <Future />
        <div className="why">
          <Explain />
        </div>
        <div className="achievements">
          <Counter />
        </div>
        <Footer onScroll={onScroll}/>
      </div>
    </Animator>
  );
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
