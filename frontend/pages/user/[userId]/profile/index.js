import { useContext } from "react";
import Head from "next/head";

import { UserAuthContext } from "../../../../contexts/UserAuthContext";
import Header from "../../../../components/layouts/Header";
import NotAuthenticated from "../../../../components/foundations/NotAuthenticated";
import ProfileDisplay from "../../../../components/block/ProfileDisplay";
import Footer from "../../../../components/layouts/Footer";

const Profile = () => {
  const { isAuth } = useContext(UserAuthContext);

  return (
    <>
      {!isAuth && <NotAuthenticated />}
      {isAuth && (
        <>
          <Head>
            <title>Profile - BESTDISH</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
              property="BESTDISH profile page"
              content="Profile - BESTDISH"
              key="title"
            />
          </Head>
          <Header />
          <ProfileDisplay />
          <Footer />
        </>
      )}
    </>
  );
};

export default Profile;
