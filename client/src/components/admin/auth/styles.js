import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    maxWidth: "400px",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#FFF",
  },
  container: {
    height: "700px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    backgroundImage: "url('/images/admin.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  overlay: {
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(0deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4654236694677871) 100%)",
  },
}));
