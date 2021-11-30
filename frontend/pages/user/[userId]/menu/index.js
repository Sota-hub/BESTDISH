// ========= sampleData will be data =========
import BG1 from "../../../../public/bg-1.jpg";
const sampleData = [
  {
    id: 1,
    dish_name: "Tacos",
    evaluation: 3,
    price: 5,
    location: "Yaletown",
    description: "this is good",
    saved: 20,
    looked: 234,
    image: BG1,
  },
  {
    id: 2,
    dish_name: "Nachos",
    evaluation: 4,
    price: 9,
    location: "Cairo",
    description: "this is so good",
    saved: 43,
    looked: 301,
    image: BG1,
  },
  {
    id: 3,
    dish_name: "Pasta",
    evaluation: 3.5,
    price: 10,
    location: "Pali",
    description: "this is so bono",
    saved: 13,
    looked: 581,
    image: BG1,
  },
];
// ===========================================

import Head from "next/head";

import Header from "../../../../components/layouts/Header";
import UserMenuTopPart from "../../../../components/parts/UserMenuTopPart";
import DishTileList from "../../../../components/parts/tile/DishTileList";
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
      <DishTileList sampleData={sampleData} />
      <Footer />
    </>
  );
};

export default UserMenu;
