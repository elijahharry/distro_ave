import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  alert: {
    minWidth: "900px",
    width: "100%",
    backgroundColor: "#e32929",
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "90%",
      textAlign: "center",
    },
  },
  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  alertIcon: {
    color: "#cc3f3f",
    marginRight: "10px",
  },
  content: {
    marginBottom: "5px",
    width: "100%",
    minHeight: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      minWidth: "100%",
    },
  },
  deletion: {
    color: "#e32929",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
    },
  },
  button: {
    backgroundColor: "#e32929",
    color: "#FFF",
    marginLeft: "10px",
    "&:hover": {
      backgroundColor: "#cc3f3f",
      color: "#fff",
    },
  },
}));
