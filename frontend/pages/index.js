import { useState, useEffect } from "react";
import Head from "next/head";

import Header from "../components/layouts/Header";
import HomeDisplay from "../components/block/HomeDisplay";
import Footer from "../components/layouts/Footer";

export default function Home() {
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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeDisplay />
      <Footer />
    </div>
  );
}
