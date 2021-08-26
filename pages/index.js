import Head from "next/head";
import Welcome from "../components/content/Welcome";
import Service from "../components/content/Service";
import Portfolio from "../components/content/Portfolio";
import Capacity from "../components/content/Capacity";
import Footer from "../components/content/Footer";
import Testimonial from "../components/content/Testimonial";
import ExtraPart from "../components/content/ExtraPart";
import Contact from "../components/content/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          MitnogIT || Digital Marketing | Web Development | Graphic Design
        </title>
      </Head>
      <Welcome />
      <Service />
      <Capacity />
      <ExtraPart />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
