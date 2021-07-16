import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  priceAvatar: {
    cursor: "pointer",
    width: "2rem",
    height: "2rem",
    marginBottom: "2px",
    "&#growHover": {
      color: "rgb(70, 182, 82)",
    },
  },
  priceMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "20px 0 0 0",
    width: "auto",
    cursor: "pointer",
  },
  priceText: {
    "&#start": {
      marginLeft: "-2px",
    },
  },
  priceMoney: {
    // color: "rgb(70, 182, 82)",
    fontSize: "1.4rem",
    lineHeight: "10px",
    margin: "0 2px 0 5px",
    "&#moneyHover": {
      color: "rgb(70, 182, 82)",
    },
  },
  priceWeight: {
    // color: "rgb(70, 182, 82)",
    fontSize: "1.1rem",
    lineHeight: "10px",
    "&#moneyHover": {
      color: "rgb(70, 182, 82)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    priceMoney: {
      fontSize: "1.3rem",
      margin: "0 2px 0 0",
    },
    priceText: {
      fontSize: "1rem",
    },
    priceAvatar: {
      width: "2.9rem",
      height: "2.9rem",
    },
    priceMessage: {
      justifyContent: "center",
      margin: "0",
    },
  },
}));
