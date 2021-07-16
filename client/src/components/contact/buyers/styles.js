import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  paper: {
    width: "98%",
    padding: "20px",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "6px",
  },
  multipleInputHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    marginTop: "6px",
    marginBottom: "6px",
  },
});
