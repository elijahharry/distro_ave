import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  drawer: {
    padding: "10px",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#FFF",
    background:
      "linear-gradient(210deg, rgba(70,182,82,1) 0%, rgba(61,161,96,1) 35%)",
  },
  brand: {
    marginTop: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: "284px",
    height: "55px",
  },
  button: {
    margin: "20px 0 20px 0",
    justifyContent: "center",
  },
  link: {
    fontSize: "1.1rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
}));
