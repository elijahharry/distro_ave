import { makeStyles } from "@material-ui/core/styles";
import { ImportantDevices } from "@material-ui/icons";

export default makeStyles((theme) => ({
  crumbs: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "20px",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "center",
      display: "none",
      visibility: "hidden",
    },
  },
  strainVideo: {
    height: "100%",
    width: "100%",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  videoIcon: {
    color: "#FFF",
    width: "55%",
    height: "55%",
  },
  strainImages: {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  noVideo: {
    height: "100%",
    width: "100%",
    background:
      "linear-gradient(90deg, rgba(0,29,8,.6) 0%, rgba(12,0,23,.6) 100%)",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#FFF",
    padding: "2px",
  },
  strainImage: {
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      height: "500px",
      width: "95%",
    },
  },
  slideHolder: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  zoomButton: {
    margin: "0 6px 6px 0",
  },
  zoomIcon: {
    color: "#a9a9a9",
    width: "30px",
    height: "30px",
  },
  zoomHolder: {
    paddingTop: "10px",
    height: "30px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  zoomText: {
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginRight: "5px",
  },
  arrowHolder: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnail: {
    cursor: "pointer",
    opacity: 0.7,
    borderRadius: "5%",
    width: "60%",
    height: "80%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnailSelected: {
    borderRadius: "5%",
    width: "70%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnailsHolder: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
      visibility: "hidden",
    },
  },
  photoMenu: {
    marginTop: 15,
    marginBottom: 0,
  },
  singleThumbnailHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mobileInstruction: {
    margin: "15px 0 0 0",
    width: "100%",
    height: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    background: "rgb(0,0,0)",
    background:
      "linear-gradient(180deg, rgba(0,0,0, .3) 0%, rgba(0,0,0,0.5) 100%)",
    [theme.breakpoints.up("sm")]: {
      display: "none",
      visibility: "hidden",
    },
  },
  mobileInstructionText: {
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#FFF",
  },
  mobileSwipeArrow: {
    color: "#FFF",
  },
}));
