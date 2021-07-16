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
    fontSize: "1.4rem",
    lineHeight: "1.5rem",
    color: "#46b652",
  },
  growAvatar: {
    height: "60px !important",
    width: "60px !important",
    color: "#fff",
    background: "linear-gradient(90deg, #41ae4d 0%, #46b652 100%)",
    cursor: "pointer",
    "&#growHover": {
      opacity: ".9",
    },
    [theme.breakpoints.down("sm")]: {
      width: "48px !important",
      height: "48px !important",
    },
  },
  avatarIcon: {
    width: "40px",
    height: "40px",
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
  grow: {
    fontSize: "1.2rem",
  },
  hideMobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
      visibility: "none",
    },
  },
}));
