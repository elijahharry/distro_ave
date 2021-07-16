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
import { buyers, contact, menu } from "../../../../../constants/frontend";

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
              <img className={classes.logo} src="/images/mobile-lounge.png" />
            </Link>
          </div>
          <div>
            <List>
              <Link href="/">
                <ListItem className={classes.button} button>
                  <Typography className={classes.link}>Back Home</Typography>
                </ListItem>
              </Link>
              <Link href={menu}>
                <ListItem className={classes.button} button>
                  <Typography className={classes.link}>
                    Menu / Strains
                  </Typography>
                </ListItem>
              </Link>
              <ListItem button className={classes.button}>
                <Link href={contact}>
                  <Button variant="contained" color="secondary">
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
