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
    color: "#000",
    background: "linear-gradient(35deg, #f2f2f2, #ffffff 100%)",
  },
  brand: {
    marginTop: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  partners: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    width: "100%",
    flexWrap: "wrap",
  },
  row: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0 20px 0",
  },
  budfather: {
    height: "55px",
    marginRight: "20px",
  },
  kushboys: {
    height: "80px",
    marginLeft: "20px",
  },
  whiterabbit: {
    height: "80px",
    marginLeft: "20px",
  },
  huds: {
    height: "75px",
    marginRight: "20px",
  },
  logo: {
    width: "213",
    height: "71px",
    maxWidth: "250px",
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
