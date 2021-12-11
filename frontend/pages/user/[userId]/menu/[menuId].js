import Head from "next/head";

import Header from "../../../../components/layouts/Header";
import MenuDetailDisplay from "../../../../components/block/MenuDetailDisplay";
import Footer from "../../../../components/layouts/Footer";

const MenuDetail = () => {
  return (
    <>
      <Head>
        <title>MenuDetail - BESTDISH</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="BESTDISH menu detail page"
          content="MenuDetail - BESTDISH"
          key="title"
        />
      </Head>
      <Header />
      <MenuDetailDisplay />
      <Footer />
    </>
  );
};

export default MenuDetail;
