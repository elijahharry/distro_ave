import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  ratings: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "20px 0 0 0",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      margin: "8px 0 0 0",
    },
  },
  paper: { padding: "2px 20px 20px 20px", marginTop: "10px", width: "100%" },
  text: {
    letterSpacing: "1.5px",
    marginLeft: "3px",
    textTransform: "uppercase",
  },
}));
