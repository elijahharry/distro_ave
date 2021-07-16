import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    margin: "15px",
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    minWidth: "120px",
  },
  avatar: {
    height: "40px",
    width: "40px",
    marginRight: "15px",
  },
  controls: {
    marginTop: "5px",
    marginLeft: "15px",
  },
  icon: {
    marginLeft: "5px",
    opacity: ".8",
    cursor: "pointer",
  },
  iconActive: {
    marginLeft: "5px",
    opacity: ".3",
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
}));
