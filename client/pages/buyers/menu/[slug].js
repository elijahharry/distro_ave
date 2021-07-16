import Head from "next/head";
import * as api from "../../api/strains/index";
import { backendImages } from "../../../constants/backend";

import Strain from "../../../src/components/strains/fullpage/Strain";
import LoungeNav from "../../../src/components/nav/lounge/LoungeNav";

const StrainFullpage = ({ strain }) => {
  return (
    <>
      <Head>
        <title>{strain.strain} | Buyer's Lounge | DistroAve</title>
        <meta
          name="description"
          content={`${strain.strain}, grown locally here in California, is an excellent strain that provides a euphoric high.`}
        />
        <link rel="icon" href={backendImages + strain.images[0].filename} />
      </Head>
      <LoungeNav />
      <Strain strain={strain} />
    </>
  );
};

export default StrainFullpage;

// export async function getServerSideProps({ params }) {
//   const { data } = await api.fetchStrain(params.slug);
//   const strain = data[0];
//   return { props: { strain: strain } };
// }

export async function getStaticPaths({ params }) {
  const { data } = await api.fetchStrains();

  const paths = data.map((strain) => ({
    params: { slug: strain.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { data } = await api.fetchStrain(params.slug);
  const strain = data[0];

  if (!strain) {
    return {
      notFound: true,
    };
  }

  return { revalidate: 60, props: { strain: strain } };
}
