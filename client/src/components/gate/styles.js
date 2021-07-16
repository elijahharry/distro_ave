import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  whole: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "rgba(0, 0, 0, .4)",
    borderRadius: "5px",
    borderWidth: "0px",
    boxShadow: theme.shadows[4],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "400px",
    maxWidth: "600px",
    color: "#FFF",
    [theme.breakpoints.down("sm")]: {
      height: "500px",
    },
  },
  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: "1.5rem",
    margin: "20px 0 20px 0",
  },
  modalRoot: {
    backgroundImage: "url(/images/agegate.jpg)",
    backgroundSize: "cover",
  },
  largeRadio: {
    "& svg": {
      width: "1.5em",
      height: "1.5em",
    },
  },
  main: {
    height: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0 0 0",
  },
  buyer: {
    height: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  enter: {
    height: "10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  disclaimer: {
    color: "#d3d3d3",
    postion: "absolute",
    bottom: 0,
    textAlign: "center",
  },
}));
