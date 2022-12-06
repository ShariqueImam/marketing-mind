import React from "react";

const FutureDetails = () => {
  return (
    <div className="w-[80%] flex flex-col mx-auto">
      {/* first heading of the details content */}
      <section className="flex ">
        <HeadingAndContent
          heading={"OFF PAGE SEO"}
          paragraph={
            "We make our website more reachable than other website by performing off page using Link Building, Brand Building, Content Marketing, PR, Local SEO (GMB and Citations), Social Media,Forums."
          }
        />
      </section>
      {/* second heading and content */}
      <section className="flex">
        <HeadingAndContent
          heading={"ON PAGE SEO"}
          paragraph={
            "We offer the most important ON page SEO by Optimizing your title tags and meta descriptions and Writing in-depth, quality content, and cleaning up your site's code"
          }
        />
      </section>
    </div>
  );
};

const HeadingAndContent = (props) => {
  return (
    <div className="flex flex-col">
      <h2
        className="text-gray-900 text-lg sm:text-2xl md:text-4xl my-8 sm:my-8 md:my-12 font-normal"
        style={{
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        {props.heading}
      </h2>
      <p className="flex text-sm sm:text-md md:text-lg leading-[1.5rem] tracking-wide">
        {props.paragraph}
      </p>
    </div>
  );
};
export default FutureDetails;
