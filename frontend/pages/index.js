import { useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { UserAuthContext } from "../contexts/UserAuthContext";
import Header from "../components/layouts/Header";
import HomeDisplay from "../components/block/HomeDisplay";
import Footer from "../components/layouts/Footer";

const Home = () => {
  const { userInfo } = useContext(UserAuthContext);
  const router = useRouter();

  if (userInfo) router.replace(`/user/${userInfo.user._id}`);

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
