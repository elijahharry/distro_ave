import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  snippets: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
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
  media: {
    height: "70%",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 30px 10px 30px",
    background: "rgba(0,0,0,0.4)",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  name: {
    color: "#FFF",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3em",
    },
  },
  strain: {
    minWidth: "120px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      minWidth: "300px",
      margin: "20px",
      flexDirection: "column",
      textAlign: "center",
    },
  },
  subtitle: {
    maxWidth: "150px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
    },
  },
  avatar: {
    width: "60px !important",
    height: "60px !important",
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "80px !important",
      height: "80px !important",
      marginRight: 0,
      marginBottom: 9,
    },
  },
  genetics: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  strainName: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
}));
