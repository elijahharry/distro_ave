import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    width: "100%",
    minHeight: "170px",
    backgroundColor: "#1c1c1c",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#FFF",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      padding: "20px 0 20px 0",
    },
  },
  logo: {
    height: "70px",
    [theme.breakpoints.down("sm")]: {
      height: "60px",
    },
  },
  buyers: {
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      height: "40px",
    },
  },
  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  brand: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      justifyContent: "center",
    },
  },
  brandRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    cursor: "pointer",
    color: "#FFF",
    margin: "0 0 0 8px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  copyright: {
    color: "#FFF",
    margin: "0px 0px 0px 8px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  button: {
    color: "#FFF",
  },
  icon: {
    color: "#FFF",
    width: "40px",
    height: "40px",
  },
  contacticon: {
    marginLeft: "20px",
    color: "#FFF",
    width: "30px",
    height: "30px",
  },
  partners: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      justifyContent: "center",
      padding: "30px",
    },
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingBottom: "30px",
    },
  },
  budfather: {
    height: "40px",
    margin: "0 10px 0 10px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 10px 20px 10px",
    },
  },
  kushboys: {
    height: "60px",
    margin: "0 10px 0 10px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 10px 20px 10px",
    },
  },
  whiterabbit: {
    height: "55px",
    margin: "0 10px 12px 10px",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 10px 12px 10px",
    },
  },
  huds: {
    height: "51px",
    margin: "6px 10px 0 10px",
    [theme.breakpoints.down("sm")]: {
      margin: "26px 10px 0 10px",
    },
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
}));
