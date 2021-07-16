import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  holder: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      margin: "10px 5px 10px 5px",
    },
  },
  growText: {
    display: "inline",
    marginLeft: "6px",
    fontSize: "1rem",
    lineHeight: "1.4rem",
  },
  growLabel: {
    fontSize: "1.2rem",
    lineHeight: "1.5rem",
    color: "#4f268c",
  },
  growAvatar: {
    marginLeft: "25px",
    marginBottom: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "46px",
      height: "46px",
      marginLeft: "0px",
    },
  },
  grow: {
    fontSize: "1rem",
    lineHeight: "1rem",
  },
  hideMobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
      visibility: "none",
    },
  },
}));
