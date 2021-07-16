import Link from "next/link";

import Hero from "../../hero/Hero";

import { Button, Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import { contact, menu } from "../../../../constants/frontend";
import Distru from "./distru/Distru";

const Brand = ({ brand }) => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Hero
          title={brand.title}
          sub={brand.sub}
          image={brand.image}
          color={brand.color}
          logo={brand.squareLogo}
          height="500"
        />
      </Container>
      <div className="grey">
        <Container style={{ marginTop: "-32px" }} maxWidth="lg">
          <Distru />
        </Container>
      </div>
    </>
  );
};

export default Brand;
