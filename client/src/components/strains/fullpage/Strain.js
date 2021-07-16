import Link from "next/link";
import { contact, menu } from "../../../../constants/frontend";

import Media from "./media/Media";
import Description from "./info/Description";

import { Grid, Grow, Container, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

const Strain = ({ strain }) => {
  const classes = useStyles();
  return (
    <>
      <Grow in timeout={500}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            alignItems="stretch"
            justify="space-between"
          >
            <Grid item xs={12} md={5}>
              <Media strain={strain} />
            </Grid>

            <Grid item xs={12} md={7}>
              <Description strain={strain} />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            alignItems="stretch"
            justify="space-between"
          >
            <Grid item xs={12} md={12}>
              <div className={classes.cta}>
                <Typography
                  align="center"
                  variant="h5"
                  className={classes.subhead}
                >
                  <strong>Want to Learn More About {strain.strain}?</strong>
                </Typography>
                <Typography align="center" variant="body1">
                  Hop on a call with our budtender and get your questions
                  answered.
                </Typography>
                <div className={classes.buttons}>
                  <Link href={contact}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ color: "#FFF" }}
                    >
                      Schedule Meeting
                    </Button>
                  </Link>
                  <Link href={menu}>
                    <Typography
                      className={classes.contactUs}
                      variant="overline"
                    >
                      Or revisit menu
                    </Typography>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <div className={classes.grey} />
    </>
  );
};

export default Strain;
