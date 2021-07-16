import Head from "next/head";
import LoungeNav from "../../../src/components/nav/lounge/LoungeNav";
import Menu from "../../../src/components/pages/buyers/menu/Menu";
import * as api from "../../api/strains/index";

const AllStrains = ({ strains }) => {
  return (
    <>
      <Head>
        <title>Buyer's Lounge | DistroAve</title>
        <meta
          name="description"
          content={
            "Take an in-depth look at our menu to learn more about the top-quality strains we produce. We're proud to serve the absolute best in cannabis to our wholesale clients across California."
          }
        />
        <link rel="icon" href="/fav/buyers.png" />
      </Head>
      <LoungeNav />
      <Menu strains={strains} />
    </>
  );
};

export default AllStrains;

// export async function getStaticProps() {
//   const { data } = await api.fetchStrains();
//   const strains = data.filter((strain) => !strain.hidden);
//   return { props: { strains: strains } };
// }

export async function getStaticProps() {
  const { data } = await api.fetchStrains();
  const strains = data.filter((strain) => !strain.hidden);
  return { revalidate: 60, props: { strains: strains } };
}
