import { useRouter } from "next/router";
import Head from "next/head";
import { backendImages } from "../constants/backend";
import { brands } from "../constants/brands";

import Nav from "../src/components/nav/Nav";
import Brand from "../src/components/pages/brands/Brand";

const StrainFullpage = ({ brand }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          {brand.name} | {brand.tagline} | DistroAve
        </title>
        <meta name="description" content={`${brand.sub}`} />
        <link rel="icon" href={`images/${brand.squareLogo}`} />
        <script
          src="https://app.distru.com/embed/menu/index.js"
          type="text/javascript"
        />
      </Head>
      <Nav />
      <Brand brand={brand} />
    </>
  );
};

export default StrainFullpage;

export async function getStaticPaths() {
  const paths = brands.map((brand) => ({
    params: { brand: brand.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const brandArray = brands.filter((brand) => params.brand === brand.slug);
  const brandObject = brandArray[0];
  return { props: { brand: brandObject } };
}
