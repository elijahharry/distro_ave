import Link from "next/link";

import Hero from "../../hero/Hero";
import Snippets from "../../strains/snippet/Snippets";

import { Button, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import { contact, menu } from "../../../../constants/frontend";
import Featured from "../../strains/featured/Featured";

const Buyers = ({ strains }) => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Hero
          title="Welcome to the Buyer's Lounge"
          sub="Various strains of top-quality cannabis, all available in bulk. Treat your customers by providing them with the high only DistroAve can provide."
          image="buyers-home.jpg"
          height="500"
          color="black"
          border="purple"
        />
      </Container>
      <div className={`${classes.strains} grey`}>
        <Container maxWidth="lg">
          <Typography align="center" variant="h5" className={classes.subhead}>
            <strong>Premium Cannabis:</strong> All Strains Grown Locally in
            California
          </Typography>
          <Typography align="center" variant="body1">
            Visit our menu for an in-depth look at each strain: images,
            genetics, ratings & more.
          </Typography>
          <div className={classes.buttons}>
            <Link href={menu}>
              <Button variant="contained" color="secondary">
                View Menu
              </Button>
            </Link>
            <Link href={contact}>
              <Typography className={classes.contactUs} variant="overline">
                Or contact us
              </Typography>
            </Link>
          </div>
          <Snippets strains={strains} />
        </Container>
      </div>
    </>
  );
};

export default Buyers;
