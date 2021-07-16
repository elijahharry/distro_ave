import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  starsHolder: {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  star: {
    width: "30px",
    height: "30px",
  },
}));
