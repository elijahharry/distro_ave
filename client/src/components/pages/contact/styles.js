import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  text: {
    padding: "0 30px 0 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
      height: "140px",
      justifyContent: "space-around",
      marginTop: "20px",
      padding: "0 5px 0 5px",
    },
  },
  icon: { width: "45px", height: "45px", marginRight: "5px" },
  contact: {
    padding: "0 20px 0 20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: "20px 0 100px 0",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "20px 0 20px 0",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      height: "150px",
    },
  },
  item: {
    display: "flex",
    flexDirection: "row",
    margin: "0 20px 0 0",
    [theme.breakpoints.down("sm")]: {
      margin: "0 0 0 0",
    },
  },
  info: { display: "flex", flexDirection: "column", justifyContent: "center" },
  grey: {
    width: "100%",
    height: "500px",
    backgroundColor: "#f8f8f8",
    position: "absolute",
    top: "550px",
    right: 0,
    zIndex: "-1",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      display: "none",
    },
  },
  grid: {
    margin: "50px 0 100px 0",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px 0 0",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
}));
