import Head from "next/head";
import Home from "../src/components/pages/Home";
import Nav from "../src/components/nav/Nav";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>
          DistroAve | Licensed Cannabis Distributor in Sacramento, CA
        </title>
        <meta
          name="description"
          content={
            "From top shelf flower to potent extracts and beverages, DistroAve has wholesale cannabis products to stock your shelves."
          }
        />
        <link rel="icon" href="/fav/distroave.png" />
      </Head>
      <Nav />
      <Home />
    </>
  );
};

export default HomePage;
