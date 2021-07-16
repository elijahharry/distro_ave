import Link from "next/link";
import { buyers, contact, menu } from "../../../../constants/frontend";

import {
  AppBar,
  Button,
  Container,
  ListItem,
  ListItemText,
  Slide,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import Drawer from "./mobile/Drawer";

const LoungeNav = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <nav className={classes.nav}>
        <div className={classes.brand}>
          <Link href="/">
            <img src="/images/logo.png" className={classes.logo} />
          </Link>
          <Link href={buyers}>
            <img src="/images/lounge.png" className={classes.loungeLogo} />
          </Link>
        </div>

        <div className={classes.links}>
          <Link href={menu}>
            <Button>Menu / Strains</Button>
          </Link>
          <Link href={contact}>
            <Button
              variant="contained"
              color="primary"
              className={classes.contact}
            >
              Contact
            </Button>
          </Link>
        </div>
        <div className={classes.mobileMenu}>
          <Drawer />
        </div>
      </nav>
    </Container>
  );
};

export default LoungeNav;
