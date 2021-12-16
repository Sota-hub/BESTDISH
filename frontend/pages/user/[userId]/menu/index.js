import Head from "next/head";

import Header from "../../../../components/layouts/Header";
import UserMenuTopPart from "../../../../components/parts/UserMenuTopPart";
import MyMenuDishTileList from "../../../../components/parts/tile/MyMenuDishTileList";
import Footer from "../../../../components/layouts/Footer";

const UserMenu = () => {
  return (
    <>
      <Head>
        <title>Menu - BESTDISH</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="BESTDISH menu page"
          content="Menu - BESTDISH"
          key="title"
        />
      </Head>
      <Header />
      <UserMenuTopPart />
      <MyMenuDishTileList />
      <Footer />
    </>
  );
};

export default UserMenu;
