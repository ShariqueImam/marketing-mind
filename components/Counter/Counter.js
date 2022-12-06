import React from "react";
import SingleCounter from "./SingleCounter";

const style = {
  wrapper: "h-[60%] flex flex-col py-8",
  singleCounter: "flex flex-col items-center justify-center w-[45%] p-4",
  details: " text-gray-900 text-sm md:text-2xl",
  details1:
    " text-gray-900 text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold",
};
const Counter = () => {
  return (
      <div className={style.wrapper}>
        <section className="m-auto h-[20%] flex py-7 md:py-12">
          <h2 className="text-3xl sm:text-5xl md:text-5xl text-gray-900 m-auto font-semibold">
            ACHIEVEMENTS
          </h2>
        </section>
        <div className=" flex justify-around my-6 flex-wrap">
          <div className={style.singleCounter}>
            <p className={style.details1}>Established</p>
            <p className="text-sm md:text-2xl text-gray-900 ">December 2021</p>
          </div>

          <div className={style.singleCounter}>
            <SingleCounter start={0} end={800} duration={1} />
            <p className={style.details}>Products Sold</p>
          </div>

          <div className={style.singleCounter}>
            <SingleCounter start={0} end={300} duration={1} />
            <p className={style.details}>Happy Customers</p>
          </div>
          <div className={style.singleCounter}>
            <SingleCounter start={0} end={50} duration={2} />
            <p className={style.details}>Brands</p>
          </div>
        </div>
      </div>
  );
};

export default Counter;
