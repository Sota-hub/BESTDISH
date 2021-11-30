import Head from "next/head";

import Header from "../../../../components/layouts/Header";
import PostDisplay from "../../../../components/block/PostDisplay";
import Footer from "../../../../components/layouts/Footer";

const Post = () => {
  return (
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
  );
};

export default Post;
