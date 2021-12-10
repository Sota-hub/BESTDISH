import { useContext } from "react";
import Head from "next/head";

import { UserAuthContext } from "../../../../contexts/UserAuthContext";
import Header from "../../../../components/layouts/Header";
import NotAuthenticated from "../../../../components/foundations/NotAuthenticated";
import PostDisplay from "../../../../components/block/posts/PostDisplay";
import Footer from "../../../../components/layouts/Footer";

const Post = () => {
  const { isAuth } = useContext(UserAuthContext);

  return (
    <>
      {!isAuth && <NotAuthenticated />}
      {isAuth && (
        <>
          <Head>
            <title>Post - BESTDISH</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
              property="BESTDISH post page"
              content="Post - BESTDISH"
              key="title"
            />
          </Head>
          <Header />
          <PostDisplay />
          <Footer />
        </>
      )}
    </>
  );
};

export default Post;
