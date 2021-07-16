import Link from "next/link";
import {
  IconButton,
  List,
  SwipeableDrawer,
  Button,
  ListItem,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";

import React, { useState } from "react";
import { buyers, contact, menu } from "../../../../constants/frontend";
import {
  budfather,
  kushboys,
  whiterabbit,
  hudsbuds,
} from "../../../../constants/brands";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div className={classes.drawer}>
          <div className={classes.brand}>
            <Link href={buyers}>
              <img className={classes.logo} src="/images/logo.png" />
            </Link>
          </div>
          <div style={{ width: "80%" }}>
            <div className={classes.partners}>
              <div className={classes.row}>
                <Link href={budfather}>
                  <img
                    src="/images/budfather.png"
                    className={classes.budfather}
                  />
                </Link>
                <Link href={kushboys}>
                  <img
                    src="/images/kushboys.png"
                    className={classes.kushboys}
                  />
                </Link>
              </div>
              <div className={classes.row}>
                <Link href={hudsbuds}>
                  <img src="/images/hudsbuds.png" className={classes.huds} />
                </Link>
                <Link href={whiterabbit}>
                  <img
                    src="/images/whiterabbit.png"
                    className={classes.whiterabbit}
                  />
                </Link>
              </div>
            </div>
            <List>
              <Link href={buyers}>
                <ListItem className={classes.button} button>
                  <Typography className={classes.link}>
                    Buyer's Lounge
                  </Typography>
                </ListItem>
              </Link>
              <ListItem button className={classes.button}>
                <Link href="/contact">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ color: "#FFF" }}
                  >
                    <Typography variant="button" className={classes.link}>
                      Contact Us
                    </Typography>
                  </Button>
                </Link>
              </ListItem>
            </List>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
