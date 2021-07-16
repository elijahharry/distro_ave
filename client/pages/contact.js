import Head from "next/head";
import * as api from "./api/strains/index";
import Contact from "../src/components/pages/contact/Contact";
import Nav from "../src/components/nav/Nav";

import { Container } from "@material-ui/core";

const MainContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Buyer's Lounge | DistroAve</title>
        <meta
          name="description"
          content={
            "Take an in-depth look at our menu to learn more about the top-quality strains we produce. We're proud to serve the absolute best in cannabis to our wholesale clients across California."
          }
        />
        <link rel="icon" href="/fav/buyers.png" />
      </Head>
      <Nav />
      <Contact />
    </>
  );
};

export default MainContactPage;
