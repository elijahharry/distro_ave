import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0 8px 0",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0 20px 0",
    },
  },
  camera: {
    width: "20px",
    height: "20px",
    margin: "0 -6px 2px 10px",
    opacity: ".8",
    cursor: "pointer",
  },
  poundtown: {
    textTransform: "uppercase",
    letterSpacing: "7px",
    fontWeight: "500",
    marginBottom: "30px",
    opacity: ".4",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
      marginTop: "-40px",
      marginBottom: "40px",
      opacity: ".6",
    },
  },
  subhead: {
    fontSize: "1.6rem",
    marginBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  contactUs: {
    marginLeft: "10px",
    cursor: "pointer",
  },
  card: {
    height: "100px",
    minWidth: "200px",
    margin: "30px",
    [theme.breakpoints.down("sm")]: {
      height: "50px",
      minWidth: "100px",
      margin: "10px",
    },
  },
  main: {
    marginBottom: "100px",
    marginTop: "80px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "25px",
      marginTop: "50px",
    },
  },
  textContent: {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
    },
  },
  grey: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    height: "92px",
    right: 0,
    top: "785px",
    position: "absolute",
    zIndex: "-1",
    [theme.breakpoints.down("sm")]: {
      height: "620px",
      top: "450px",
    },
  },
}));
