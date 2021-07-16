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
          <Grid xs={12} md={8} item>
            <div className={classes.text}>
              <Typography variant="h4" style={{ marginBottom: "7px" }}>
                <strong>
                  <span className={classes.removeMobile}>Introducing the </span>
                  Buyer's Menu
                </strong>
              </Typography>
              <Typography variant="body1">
                Browse our menu below. For an in-depth look at a strain's
                images, videos and ratings - <strong>just click on it!</strong>
              </Typography>
              <Typography variant="overline" className={classes.overline}>
                High-Quality Cannabis • Grown in California
              </Typography>
            </div>
          </Grid>
          <Grid xs={12} md={4} item>
            <div className={classes.image}>
              <img className={classes.nugs} src="/images/nugs.png" />
            </div>
          </Grid>
        </Grid>
        <div className={classes.grey1} />
      </Container>
      <div className="grey" style={{ paddingBottom: "80px" }}>
        <Container maxWidth="lg">
          <Strains strains={strains} />
        </Container>
      </div>
    </>
  );
};

// {/* <Hero
// title="High-Quality Cannabis Produced in California"
// sub="Browse our menu below. Click on a strain for an in-depth look at its images, videos and ratings."
// vari="small"
// height="350"
// image="buyers-menu.jpg"
// color="greentransparent"
// /> */}

export default Menu;
