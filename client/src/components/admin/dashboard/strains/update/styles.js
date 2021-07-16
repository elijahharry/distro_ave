import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    width: "auto",
    padding: "20px",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      marginRight: "23px",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "6px",
    marginTop: "14px",
    width: "100%",
  },
  yieldToggle: {
    backgroundColor: theme.palette.primary.light,
    margin: "10px 0 10px 0",
  },
  purple: {
    backgroundColor: theme.palette.primary.light,
  },
  input: {
    marginTop: "6px",
    marginBottom: "6px",
    width: "100%",
  },
  dropdown: {
    marginTop: "5px",
    marginBottom: "5px",
    width: "100%",
  },
  row: {
    marginTop: "5px",
    marginBottom: "5px",
  },
  fileInput: {
    width: "100%",
  },
  uploadIcon: {
    marginRight: 10,
  },
  requiredButton: {
    color: "#FFF",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  nevermind: {
    marginTop: "5px",
  },
}));
