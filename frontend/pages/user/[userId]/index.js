import Head from "next/head";

import Header from "../../../components/layouts/Header";
import UserDisplay from "../../../components/block/UserDisplay";
import Footer from "../../../components/layouts/Footer";

const User = () => {
  return (
    <>
      <Head>
        <title>User - BESTDISH</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="BESTDISH user page"
          content="User - BESTDISH"
          key="title"
        />
      </Head>
      <Header />
      <UserDisplay />
      <Footer />
    </>
  );
};

export default User;
