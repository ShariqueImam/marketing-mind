import Head from "next/head";
import Contact from "../../components/Contact/Contact";
import Navbar1 from "../../components/Navbar/Navbar1";
import Animator from "../../components/UI/Animator";
const style = {
  wrapper: "",
};
export default function Main() {
  return (
    <Animator>
      <div className={style.container}>
        <Head>
          <title>MARKETING MIND | Contact</title>
          <meta name="description" content="MARKETING MIND | Contact" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <Navbar1 />
        <Contact />
      </div>
    </Animator>
  );
}
