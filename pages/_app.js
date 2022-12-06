import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {


  return (
    <div className="overflow-x-hidden" style={{ fontFamily: "Poppins,serif" }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
// export async function getStaticProps(context) {
//   return {
//     // the data in the props will be passed to the above function at the build time
//     props: {}, // will be passed to the page component as props
//   }
// }