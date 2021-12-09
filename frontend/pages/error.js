import Head from "next/head";

import ErrorPage from "../components/foundations/ErrorPage";

const Error = () => {
  return (
    <div>
      <Head>
        <title>Error - BESTDISH</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="BESTDISH error page"
          content="Error - BESTDISH"
          key="title"
        />
      </Head>
      <ErrorPage />
    </div>
  );
};

export default Error;
