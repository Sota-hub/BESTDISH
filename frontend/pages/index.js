import { useState, useEffect } from "react";
import Head from "next/head";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const Home = () => {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   const fetchFunction = async () => {
  //     const response = await fetch("/api");
  //     const data = await response.json();
  //     setMessage(data.message);
  //   };
  //   fetchFunction();
  // }, []);

  return (
    <div>
      <Head>
        <title>Home - BESTDISH</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="BESTDISH home page"
          content="Home - BESTDISH"
          key="title"
        />
      </Head>
      <Header />
      HOME DISPLAY
      <Footer />
    </div>
  );
};

export default Home;
