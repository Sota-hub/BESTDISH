import { useContext, useEffect } from "react";
import Head from "next/head";

import { UserAuthContext } from "../../../contexts/UserAuthContext";
import Header from "../../../components/layouts/Header";
import NotAuthenticated from "../../../components/foundations/NotAuthenticated";
import UserDisplay from "../../../components/block/UserDisplay";
import DishCardList from "../../../components/parts/card/DishCardList";
import Footer from "../../../components/layouts/Footer";
import { sortByDate } from "../../../helperFunctions";

const User = ({ posts }) => {
  const { isAuth } = useContext(UserAuthContext);

  posts && sortByDate(posts);

  return (
    <>
      {!isAuth && <NotAuthenticated />}
      {isAuth && (
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
          {posts && <DishCardList posts={posts} />}
          <Footer />
        </>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:8000/dishes/posts", {
    method: "GET",
  });
  const posts = await response.json();
  return {
    props: { posts },
    // revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default User;
