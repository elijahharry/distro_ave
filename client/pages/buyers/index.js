import { Container, Grow } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import Head from "next/head";
import Buyers from "../../src/components/pages/buyers/Buyers";
import LoungeNav from "../../src/components/nav/lounge/LoungeNav";
import Strains from "../../src/components/strains/list/Strains";
import * as api from "../api/strains/index";

const BuyersLounge = ({ strains }) => {
  return (
    <>
      <Head>
        <title>Buyer's Lounge | DistroAve</title>
        <meta
          name="description"
          content={
            "Welcome to the Buyer's Lounge at DistroAve! Proudly serving the best in cannabis to wholesale clients across California."
          }
        />
        <link rel="icon" href="/fav/buyers.png" />
      </Head>
      <LoungeNav />
      <Buyers strains={strains} />
    </>
  );
};

export default BuyersLounge;

// export async function getServerSideProps() {
//   const { data } = await api.fetchStrains();
//   const strains = data.filter((strain) => !strain.hidden);
//   return { props: { strains: strains } };
// }

export async function getStaticProps() {
  const { data } = await api.fetchStrains();
  const strains = data.filter((strain) => !strain.hidden);
  return { revalidate: 60, props: { strains: strains } };
}
