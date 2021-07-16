import Link from "next/link";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

import HeroCentered from "../hero/HeroCentered";

import { Button, Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import Gallery from "../gallery/Gallery";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const Home = () => {
  const { openLightbox, closeLightbox } = useLightbox();

  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <HeroCentered
          title="Licensed Cannabis Distributor in California"
          sub="From top shelf flower to potent extracts and beverages, DistroAve has wholesale cannabis products to stock your shelves."
          image="home.jpg"
          height="550"
          color="black"
        />
      </Container>
      <div className={classes.main}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            alignItems="center"
            justify="space-between"
          >
            <Grid item xs={12} md={6} className={classes.textContent}>
              <Typography
                align="center"
                className={classes.poundtown}
                variant="body1"
              >
                Powered by Poundtown
              </Typography>
              <Typography
                align="center"
                variant="h5"
                className={classes.subhead}
              >
                <strong>Quality Products from Recognizable Brands</strong>
              </Typography>
              <Typography
                align="center"
                variant="body1"
                style={{ marginBottom: "10px" }}
              >
                DistroAve is a leading cannabis distributor in Sacramento (and
                all of California). Offering the best in bud, extracts,
                concentrates, prerolls & more, our goal is to help you meet your
                bulk needs. Contact us today for more info.
              </Typography>
              <div className={classes.buttons}>
                <Link href="/contact">
                  <Button
                    variant="contained"
                    style={{ color: "#FFF" }}
                    color="primary"
                  >
                    Contact us
                  </Button>
                </Link>
                <PhotoCameraIcon
                  onClick={() => openLightbox(0)}
                  className={classes.camera}
                  size="small"
                />
                <Typography
                  onClick={() => openLightbox(0)}
                  className={classes.contactUs}
                  variant="overline"
                >
                  View photos
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Gallery />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.grey} />
    </>
  );
};

export default Home;
