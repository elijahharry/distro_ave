import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: "250px",
    backgroundColor: "",
    backgroundBlendMode: "darken",
    display: "flex",
    backgroundSize: "cover",
    position: "relative",
  },
  nextImage: {
    maxHeight: "250px",
    width: "100%",
  },
  backgroundGradient: {
    width: "100%",
    height: "100%",
    background: "rgb(0,0,0)",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)",
    cursor: "pointer",
  },
  photoContentHolder: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  arrowLeft: {
    position: "absolute",
    marginTop: "100px",
    top: 0,
    left: 0,
    zIndex: "1",
  },
  arrowRight: {
    position: "absolute",
    marginTop: "100px",
    top: 0,
    right: 0,
    zIndex: "1",
  },
  bottomHolder: {
    width: "95%",
    height: "40%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "4px",
  },
  arrow: {
    color: "#fff",
    filter: "drop-shadow(0 0 3px #000)",
  },
  arrowOff: {
    color: "rgba(255, 255, 255, .6)",
  },
  camera: {
    height: "27px",
    width: "27px",
    color: "#fff",
  },
  video: {
    height: "25px",
    width: "25px",
    color: "#fff",
  },
  magnify: {
    height: "40px",
    width: "40px",
    color: "#fff",
    margin: "-2px",
  },
  cameraBadge: {
    color: "#fff",
    top: "5%",
    right: "5%",
  },
  cameraCount: {
    margin: "6px",
  },
}));
