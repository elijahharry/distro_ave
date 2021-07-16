import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "6px",
    height: 550,
    position: "relative",
  },
  strainName: {
    fontSize: "1.5rem",
  },
  content: {
    width: "100%",
    height: "100%",
    marginBottom: "-10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  media: {
    height: "300px",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    backgroundBlendMode: "darken",
  },
  titleRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  statsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  genetics: {
    width: "100%",
    padding: "8px 0 15px 0",
  },
  productName: {},
  badge: {
    right: -3,
    top: 13,
  },
  overlayTopLeft: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlayTopRight: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  overlayTagsHolder: {
    width: "100%",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-36px",
    display: "flex",
  },
  overlayTags: {
    marginRight: "10px",
    marginTop: "20px",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  showMore: {
    textTransform: "none",
    padding: "0",
    marginLeft: "4px",
  },
  labelHolder: {},
  label: {
    color: "#FFF",
    marginRight: "10px",
  },
  labelText: {
    fontSize: ".8rem",
  },
});
