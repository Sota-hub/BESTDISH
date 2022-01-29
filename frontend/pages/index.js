import { useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { UserAuthContext } from "../contexts/UserAuthContext";
import Header from "../components/layouts/Header";
import HomeDisplay from "../components/block/HomeDisplay";
import DishCardList from "../components/parts/card/DishCardList";
import Footer from "../components/layouts/Footer";
import { sortByDate } from "../helperFunctions";

const Home = ({ posts }) => {
  const { userInfo } = useContext(UserAuthContext);
  const router = useRouter();

  sortByDate(posts);

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
      <DishCardList posts={posts} />
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://best-dish.herokuapp.com/dishes/posts", {
    method: "GET",
  });
  const posts = await response.json();
  return {
    props: { posts },
    // revalidate: 60,
  };
};

export default Home;
