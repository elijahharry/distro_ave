import Head from "next/head";
import * as api from "../api/strains/index";

import Admin from "../../src/components/admin/Admin";
import LoungeNav from "../../src/components/nav/lounge/LoungeNav";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Admin | Buyer's Lounge | DistroAve</title>
        <meta name="description" content={"Log-in to manage inventory."} />
        <link rel="icon" href="/fav/buyers.png" />
      </Head>
      <LoungeNav />
      <Admin />
    </>
  );
};

export default Dashboard;
