import Head from "next/head";

import Header from "../../../../components/layouts/Header";
import MenuDetailDisplay from "../../../../components/block/MenuDetailDisplay";
import Footer from "../../../../components/layouts/Footer";

const MenuDetail = ({ dish }) => {
  console.log(dish);

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
      <MenuDetailDisplay dish={dish} />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const response = await fetch(
    `http://localhost:8000/dishes/${query.userId}/${query.menuId}`
  );
  console.log(response);
  const dish = await response.json();

  return {
    props: {
      dish,
    },
  };
}

export default MenuDetail;
