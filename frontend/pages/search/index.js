import Head from "next/head";

import Header from "../../components/layouts/Header";
import SearchDisplay from "../../components/block/SearchDisplay";
import Footer from "../../components/layouts/Footer";

const Search = ({ dishes }) => {
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
      <SearchDisplay dishes={dishes} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const response = await fetch(
    `http://localhost:3001/search?dishName=${query.dishName}&price=${query.price}`
  );
  const dishes = await response.json();

  return {
    props: {
      dishes,
    },
  };
}

export default Search;
