import Head from "next/head";

import Nav from "../src/components/nav/Nav";
import Privacy from "../src/components/terms/Privacy";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | DistroAve</title>
        <link rel="icon" href="images/fav/distroave.png" />
      </Head>
      <Nav />
      <Privacy />
    </>
  );
};

export default PrivacyPolicy;
