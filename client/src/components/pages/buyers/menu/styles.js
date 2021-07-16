import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  nugs: {
    height: "370px",
    marginRight: "-25px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  removeMobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  overline: {
    marginBottom: "7px",
    letterSpacing: "2px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      letterSpacing: "1px",
      fontSize: ".7rem",
    },
  },
  text: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
      height: "140px",
      justifyContent: "space-around",
      marginTop: "50px",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
      height: "100%",
      justifyContent: "center",
      marginTop: "0",
    },
  },
  grey1: {
    width: "100%",
    height: "450px",
    backgroundColor: "#f8f8f8",
    position: "absolute",
    top: "315px",
    right: 0,
    zIndex: "-1",
    [theme.breakpoints.down("sm")]: {
      top: "250px",
    },
  },
  info: { display: "flex", flexDirection: "column", justifyContent: "center" },
  grid: {
    marginBottom: "0",
  },
}));
