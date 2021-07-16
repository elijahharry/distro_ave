import { useRouter } from "next/router";
import Link from "next/link";

import {
  budfather,
  kushboys,
  whiterabbit,
  hudsbuds,
} from "../../../constants/brands";
import { menu, contact } from "../../../constants/frontend";

import { Container, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import ListIcon from "@material-ui/icons/List";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  const router = useRouter();
  const classes = useStyles();
  const year = new Date().getFullYear();

  const page = router.pathname;
  const onBuyers = page.slice(0, 7) === "/buyers" ? true : false;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.content}>
          <div className={classes.info}>
            <div className={classes.brand}>
              <img className={classes.logo} src="/images/logo-white.png" />
            </div>
            <div className={classes.policy}>
              <Typography variant="body2" className={classes.copyright}>
                License Number: C11-0001225-LIC
              </Typography>
              <Typography variant="body2" className={classes.copyright}>
                Copyright © {year} • All Rights Reserved
              </Typography>
              <Link href="/privacy" className={classes.link}>
                <Typography variant="body2" className={classes.link}>
                  Privacy Policy
                </Typography>
              </Link>
            </div>
          </div>
          {onBuyers ? (
            <div className={classes.menu}>
              <Link href={menu}>
                <Button
                  className={classes.button}
                  startIcon={<ListIcon className={classes.icon} />}
                >
                  Menu / Strains
                </Button>
              </Link>
              <Link href={contact}>
                <Button
                  className={classes.button}
                  startIcon={<EmailIcon className={classes.contacticon} />}
                >
                  Contact
                </Button>
              </Link>
            </div>
          ) : (
            <div className={classes.partners}>
              <div className={classes.brandRow}>
                <Link href={budfather}>
                  <img
                    src="/images/budfather-white.png"
                    className={classes.budfather}
                  />
                </Link>
                <Link href={kushboys}>
                  <img
                    src="/images/kushboys-white.png"
                    className={classes.kushboys}
                  />
                </Link>
              </div>
              <div className={classes.brandRow}>
                <Link href={whiterabbit}>
                  <img
                    src="/images/whiterabbit-white.png"
                    className={classes.whiterabbit}
                  />
                </Link>
                <Link href={hudsbuds}>
                  <img
                    src="/images/hudsbuds-white.png"
                    className={classes.huds}
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
