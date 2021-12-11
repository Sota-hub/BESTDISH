import Head from "next/head";

import Header from "../components/layouts/Header";
import HomeDisplay from "../components/block/HomeDisplay";
import Footer from "../components/layouts/Footer";

const Home = () => {
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
      <HomeDisplay />
      <Footer />
    </div>
  );
};

export default Home;
