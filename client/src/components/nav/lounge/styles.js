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
  },
  logo: {
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      height: "50px",
    },
  },
  loungeLogo: {
    margin: "5px 0 0 0",
    height: "40px",
    [theme.breakpoints.down("sm")]: {
      margin: "3px 0 0 3px",
      height: "30px",
    },
  },
  links: {
    width: "300px",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "Row",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  contact: {
    marginLeft: "20px",
    color: "#FFF",
  },
  mobileMenu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
