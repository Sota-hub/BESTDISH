import Head from "next/head";
// import { useRouter } from "next/router";

import Header from "../../../components/layouts/Header";
import UserDisplay from "../../../components/block/UserDisplay";
import Footer from "../../../components/layouts/Footer";

const User = () => {
  // const router = useRouter();

  // send a request to the backend API
  // to fetch user data with userId

  return (
    <div>
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
      <Footer />
    </div>
  );
};

export default User;
