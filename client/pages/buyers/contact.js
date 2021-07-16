import Head from "next/head";
import * as api from "../api/strains/index";
import Contact from "../../src/components/pages/buyers/contact/Contact";
import LoungeNav from "../../src/components/nav/lounge/LoungeNav";

import { Container } from "@material-ui/core";

const ContactPage = () => {
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
      <LoungeNav />
      <Contact />
    </>
  );
};

export default ContactPage;
