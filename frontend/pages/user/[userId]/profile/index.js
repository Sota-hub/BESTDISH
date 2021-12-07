import Head from "next/head";

import Header from "../../../../components/layouts/Header";
import ProfileDisplay from "../../../../components/block/ProfileDisplay";
import Footer from "../../../../components/layouts/Footer";

const Profile = () => {
  return (
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
  );
};

export default Profile;
