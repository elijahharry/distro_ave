import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  img: {
    cursor: "zoom-in",
    [theme.breakpoints.down("sm")]: {},
  },
  grid: {
    padding: "10px",
  },
}));
