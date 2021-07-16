import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  calendar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "20px 0 0 0",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      margin: "8px 0 0 0",
    },
  },
  text: {
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    marginLeft: "3px",
  },
  date: {
    margin: "10px 0 10px 13px",
  },
  paper: {
    padding: "2px 20px 20px 20px",
    marginTop: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
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
