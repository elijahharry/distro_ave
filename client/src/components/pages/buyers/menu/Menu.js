import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

import React from "react";
import Strains from "../../../strains/list/Strains";
import Hero from "../../../hero/Hero";

const Menu = ({ strains }) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          spacing={3}
          className={classes.grid}
        >
          <Hero
            title="Introducing the Buyer's Menu"
            sub="Browse our menu below. For an in-depth look at a strain's images, videos and ratings - just click on it!"
            vari="small"
            height="250"
            image="gallery3.jpg"
            color="black"
            border="purple"
          />
        </Grid>
        <div className={classes.grey1} />
      </Container>
      <div className="grey" style={{ paddingBottom: "30px" }}>
        <Container maxWidth="lg">
          <Strains strains={strains} />
        </Container>
      </div>
    </>
  );
};

export default Menu;
