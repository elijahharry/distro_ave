import { Container, Grid, Grow, Slide, Typography } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import useStyles from "./styles";

import React from "react";
import Strains from "../../../strains/list/Strains";
import Hero from "../../../hero/Hero";
import Form from "../../../contact/buyers/Form";

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Hero
          title="Interested in Growing a Business Relationship?"
          sub="Reach out anytime via the form/info below to plant the first seed."
          vari="small"
          height="350"
          image="buyers-contact.jpg"
          color="black"
          border="purple"
        />
      </Container>

      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={0}
          className={classes.grid}
        >
          <Grow in timeout={400}>
            <Grid xs={12} md={6} item>
              <div className={classes.text}>
                <Typography variant="h5" style={{ marginBottom: "7px" }}>
                  <strong>Located in Sacramento.</strong>
                </Typography>
                <Typography variant="body1">
                  The fastest, most efficient way to get in touch with us is via
                  the form on this page. We will respond within 24 hours to
                  set-up a <strong>one-on-one meeting</strong> between our
                  budtender and your team.
                </Typography>
              </div>
              <div className={classes.contact}>
                <div id="first" className={classes.item}>
                  <PhoneInTalkIcon className={classes.icon} color="secondary" />
                  <div className={classes.info}>
                    <Typography variant="button">og@distro-ave.com</Typography>
                    <Typography variant="button">(916) 293-1253</Typography>
                  </div>
                </div>
                <div className={classes.item}>
                  <img
                    src="/icons/green/cannabiscontrolmin.svg"
                    className={classes.icon}
                    color="primary"
                  />
                  <div className={classes.info}>
                    <Typography variant="button">
                      Distributor license:
                    </Typography>
                    <Typography variant="button">#C11-0001225-LIC</Typography>
                  </div>
                </div>
              </div>
            </Grid>
          </Grow>
          <Slide in direction="up" timeout={400}>
            <Grid xs={12} md={6} style={{ padding: "0" }} item>
              <div className={classes.form}>
                <Form
                  title="Schedule a Meeting"
                  subtitle="Our budtender will answer your questions, showcase products & more."
                  origin="buyers"
                />
              </div>
            </Grid>
          </Slide>
        </Grid>
      </Container>
      <div className={classes.grey} />
    </>
  );
};

export default Contact;
