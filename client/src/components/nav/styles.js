import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  nav: {
    height: "100px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 0 10px 0",
    [theme.breakpoints.down("sm")]: {
      height: "80px",
    },
  },
  brand: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    width: "33.33%",
  },
  partners: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    width: "33.33%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  links: {
    width: "300px",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "Row",
    alignItems: "center",
    width: "33.33%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logo: {
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      height: "50px",
    },
  },

  budfather: {
    height: "35px",
    margin: "0 10px 0 10px",
  },
  kushboys: {
    height: "55px",
    margin: "0 10px 0 10px",
  },
  whiterabbit: {
    height: "50px",
    margin: "0 10px 12px 10px",
  },
  huds: {
    height: "46px",
    margin: "6px 10px 0 10px",
  },

  loungeLogo: {
    margin: "5px 5px 0 0",
    height: "40px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      margin: "3px 0 0 3px",
      height: "30px",
    },
  },
  contact: {
    color: "#FFF",
  },
  mobileMenu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
