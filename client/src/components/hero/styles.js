import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  holder: {
    width: "100%",
    padding: "0",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "400px",
    },
  },
  hero: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    borderRadius: "5px",
  },
  gradient: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    padding: "5%",
    color: "#FFF",
    width: "100%",
    height: "100%",
  },
  text: {
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  textCentered: {
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  heading: {
    filter: "drop-shadow(0 0 1rem #000)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "2.125rem",
      textAlign: "center",
    },
  },
  sub: {
    filter: "drop-shadow(0 0 0.75rem #000)",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  grey1: {
    width: "100%",
    height: "500px",
    backgroundColor: "#f8f8f8",
    position: "absolute",
    top: "350px",
    right: 0,
    zIndex: "-1",
  },
  logoHolder: {
    height: "100%",
    position: "absolute",
    right: 0,
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "50px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      position: "static",
      width: "100%",
      marginRight: "0px",
    },
  },
  logo: {
    height: "300px",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
  },
  greenBorder: {
    backgroundColor: "#49b954",
    height: "9px",
    width: "100%",
    position: "absolute",
    bottom: -2,
    right: 0,
    borderRadius: "0 0 5px 5px",
    zIndex: 1,
  },
  purpleBorder: {
    backgroundColor: "#4F268C",
    height: "9px",
    width: "100%",
    position: "absolute",
    bottom: -2,
    right: 0,
    borderRadius: "0 0 5px 5px",
    zIndex: 1,
  },

  budsHolder: {
    height: "100%",
    position: "absolute",
    right: 0,
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "50px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      position: "static",
      width: "100%",
      marginRight: "0px",
    },
  },
  buds: {
    height: "75%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      height: "140px",
    },
  },
  followTheRabbit: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  rabbit: {
    height: "80px",
  },
}));

// "linear-gradient(270deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 100%)",
