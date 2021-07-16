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
  strains: {
    padding: "50px 0 100px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "25px 0 60px 0",
    },
  },
}));
