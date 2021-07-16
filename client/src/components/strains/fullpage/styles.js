import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  grey: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    height: "470px",
    right: 0,
    top: "430px",
    position: "absolute",
    zIndex: "-1",
    [theme.breakpoints.down("sm")]: {
      height: "850px",
      top: "460px",
    },
  },
  cta: {
    height: "320px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      height: "280px",
    },
  },
  buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0 8px 0",
  },
  subhead: {
    fontSize: "1.6rem",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  contactUs: {
    marginLeft: "10px",
    cursor: "pointer",
  },
}));
