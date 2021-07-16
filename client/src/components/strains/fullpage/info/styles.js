import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "0 5px 0 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      height: "100%",
      padding: "0 0 0 0",
    },
  },
  topHalf: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: "15px",
  },
  crumbs: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      display: "none",
    },
  },
  titleRow: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    margin: "10px 0 8px 0",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      alignItems: "center",
      margin: "-18px 0 15px 0",
    },
  },
  title: {
    display: "flex",
    marginBottom: "8px",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  subtitleRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "15px 0 0 0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "15px",
      marginTop: "5px",
    },
  },
  labelsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: "40px 0 30px -3px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexWrap: "wrap-reverse",
      justifyContent: "center",
      margin: "0 0 15px 0",
    },
  },
  label: {
    color: "#FFF",
    margin: "0 6px 0 6px",
  },
  labelText: {
    letterSpacing: "1.3px",
    color: "#FFF",
    textTransform: "uppercase",
  },
  descriptionText: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  geneticsText: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  columnB: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },

  paper: {
    padding: "2px 20px 20px 20px",
    marginTop: "10px",
    width: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  dataHolder: {
    marginTop: "-10px",
    // [theme.breakpoints.down("sm")]: {
    //   flexDirection: "column-reverse",
    // },
  },
}));
