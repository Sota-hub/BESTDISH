import { useContext } from "react";
import Head from "next/head";

import { UserAuthContext } from "../../../contexts/UserAuthContext";
import Header from "../../../components/layouts/Header";
import NotAuthenticated from "../../../components/foundations/NotAuthenticated";
import UserDisplay from "../../../components/block/UserDisplay";
import Footer from "../../../components/layouts/Footer";

const User = () => {
  const { isAuth } = useContext(UserAuthContext);

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
          <Footer />
        </>
      )}
    </>
  );
};

// export async function getServerSideProps({ query }) {
//   const response = await fetch();
//   const data = await response.json();

//   return {
//     props: {},
//   };
// }

export default User;
