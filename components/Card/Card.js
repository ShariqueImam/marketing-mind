import React from "react";
import SingleCard from "./SingleCard";
import { CgWebsite } from "react-icons/cg";
import { MdLeaderboard } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
const style = {
  card: "flex flex-col my-12 md:mb-24 md:mt-16 ",
  cardContainer: "flex flex-wrap md:no-wrap items-center justify-center gap-12",
  headingContainer: "flex items-center jusitfy-center flex-col my-8",
  heading:
    "max-w-fit mx-auto flex items-center jusitfy-center flex-col my-8 text-gray-900 text-3xl md:text-5xl font-semibold ",
};
const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.headingContainer}>
        <h2 className={style.heading}>OUR SERVICES</h2>
        <p className="border-b-[6px] border-pink-400 w-[8vw] md:w-[4vw] "></p>
      </div>
      {/* adding the cards */}
      <div className={style.cardContainer}>
        <SingleCard
          heading="Creating a website"
          details="We create responsive, attractive and highly converting websites for businesses"
          icon={<CgWebsite />}
        />
        <SingleCard
          heading="SEO"
          details="We enhances the website performance and boosts its reach by doing on page SEO and off page SEO"
          icon={<BiTrendingUp />}
        />
        <SingleCard
          heading="Lead Generation"
          details="We generate leads that converts people to long lasting clients"
          icon={<MdLeaderboard />}
        />
      </div>
    </div>
  );
};

export default Card;
