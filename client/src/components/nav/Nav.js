import { useState, useEffect } from "react";
import Link from "next/link";
import { buyers, contact, menu } from "../../../constants/frontend";
import {
  budfather,
  kushboys,
  whiterabbit,
  hudsbuds,
} from "../../../constants/brands";
import Drawer from "./mobile/Drawer";

import { Button, Container } from "@material-ui/core";
import useStyles from "./styles";

const Nav = () => {
  const [buyer, setIsBuyer] = useState(false);
  const classes = useStyles();

  const checkLocal = () => {
    if (localStorage.getItem("user") !== null) {
      const grabbed = JSON.parse(localStorage.getItem("user"));
      grabbed.buyer === "true" && setIsBuyer(true);
    }
  };

  useEffect(() => {
    checkLocal();
  }, []);

  return (
    <Container maxWidth="lg">
      <nav className={classes.nav}>
        <div className={classes.brand}>
          <Link href="/">
            <img src="/images/logo.png" className={classes.logo} />
          </Link>
        </div>
        <div className={classes.partners}>
          <Link href={budfather}>
            <img src="/images/budfather.png" className={classes.budfather} />
          </Link>
          <Link href={kushboys}>
            <img src="/images/kushboys.png" className={classes.kushboys} />
          </Link>
          <Link href={whiterabbit}>
            <img
              src="/images/whiterabbit.png"
              className={classes.whiterabbit}
            />
          </Link>
          <Link href={hudsbuds}>
            <img src="/images/hudsbuds.png" className={classes.huds} />
          </Link>
        </div>
        <div className={classes.links}>
          {buyer ? (
            <Link href={buyers}>
              <img
                src="/images/lounge-right.png"
                className={classes.loungeLogo}
              />
            </Link>
          ) : (
            <>
              <Button
                onClick={() => setIsBuyer(true)}
                style={{ marginRight: "20px" }}
              >
                For Buyers
              </Button>
              <Link href="/contact">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.contact}
                >
                  Contact
                </Button>
              </Link>
            </>
          )}
        </div>
        <div className={classes.mobileMenu}>
          <Drawer buyer={buyer} />
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
