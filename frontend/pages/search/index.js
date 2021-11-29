import Head from "next/head";

import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";

const Search = () => {
  return (
    <div>
      <Head>
        <title key="title">Search - BESTDISH</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="DESTDISH search page"
          content="Search - BESTDISH"
          key="title"
        />
      </Head>
      <Header />
      <Footer />
    </div>
  );
};

export default Search;
