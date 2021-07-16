import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  rating: {
    margin: "18px 0 18px 0",
  },
  name: {
    textTransform: "uppercase",
    letterSpacing: "1.3px",
    margin: "0 5px 0 0",
  },
  score: {
    letterSpacing: "1.3px",
    margin: "0 0 2px 0",
  },
  detailsHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  barHolder: {
    width: "100%",
    height: "4px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  barFilled: {
    height: "100%",
    zIndex: 1,
  },
  barEmpty: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ebebeb",
  },
  icon: {
    width: "18px",
    height: "18px",
    margin: "0 0 8px 2px",
  },
}));
