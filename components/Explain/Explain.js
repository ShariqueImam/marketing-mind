import React from "react";
import Image from "next/image";
const Explain = () => {
  return (
    <div className="h-full w-full sm:w-[95%] md:w-[80%] h-[80%] flex mx-auto flex-col px-12 py-8 md:pb-24">
      <section className="m-auto h-[20%] flex py-7 md:py-12">
        <h2 className="text-3xl sm:text-5xl md:text-5xl text-gray-900 m-auto font-semibold">
          LEAD GENERATION
        </h2>
      </section>
      <div className="flex items-center justify-between flex-col md:flex-row flex-col-reverse ">
        <section className="flex w-[100%] sm:w-[50%] mx-auto h-[45vh] sm:h-[90%] my-6 sm:my-0 items-center justify-center">
          <Image src={"/svg1.svg"} height={300} width={300} />
        </section>
        <section className="flex w-[100%] sm:w-[50%] flex-col">
          <section className="flex">
            <HeadingAndContent
              heading={"QUALITY LEADS"}
              paragraph={
                "We enhance quality of leads through integrations, optimisations and features. Lead generation on Meta offers integrations with your CRM, email service provider, messaging software or call centre technology. Ads optimisation models enable marketers to discover people who may convert to sales. Lead generation customisation features help qualify prospects."
              }
            />
          </section>
        </section>
      </div>
    </div>
  );
};

const HeadingAndContent = (props) => {
  return (
    <div className="flex flex-col h-full w-full">
      <h2 className="text-gray-900 text-2xl sm:text-xl md:text-4xl my-8 sm:my-8 md:my-12 text-center sm:text-left ">
        {props.heading}
      </h2>
      <p className="flex text-md sm:text-md md:text-lg leading-[1.5rem] text-gray-800">
        {props.paragraph}
      </p>
    </div>
  );
};
export default Explain;
