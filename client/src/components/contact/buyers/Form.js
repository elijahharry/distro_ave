import { useState } from "react";
import { sendBuyersContact } from "../../../../pages/api/contact/index";

import {
  Button,
  Paper,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import useStyles from "./styles";

const Form = ({ origin, title, subtitle }) => {
  const classes = useStyles();
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    company: "",
    license: "",
    phone: "",
    city: "",
    email: "",
    strains: [],
    origin: origin,
  });
  const [sendStatus, setSendStatus] = useState(0);

  const submitForm = (e) => {
    e.preventDefault();
    sendForm(info);
    clear();
  };

  const clear = () => {
    setInfo({
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      email: "",
      strains: [],
    });
  };

  const sendForm = async (form) => {
    try {
      const { status } = await sendBuyersContact(form);
      setSendStatus(status);
      console.log(status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" style={{ marginBottom: "7px" }}>
        <strong>{title}</strong>
      </Typography>
      <Typography
        variant="caption"
        align="center"
        style={{ marginBottom: "10px" }}
      >
        {subtitle}
      </Typography>
      <form className={classes.form} onSubmit={submitForm}>
        <div className={classes.multipleInputHolder}>
          <TextField
            className={classes.input}
            style={{ marginRight: "6px" }}
            name="firstName"
            autoComplete="given-name"
            variant="outlined"
            label="First name"
            value={info.firstName}
            onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
            fullWidth
            required
          />
          <TextField
            className={classes.input}
            style={{ marginLeft: "6px" }}
            name="lastName"
            autoComplete="family-name"
            variant="outlined"
            label="Last name"
            value={info.lastName}
            onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
            fullWidth
            required
          />
        </div>
        <TextField
          className={classes.input}
          name="company"
          variant="outlined"
          label="Company"
          fullWidth
          value={info.company}
          onChange={(e) => setInfo({ ...info, company: e.target.value })}
          required
        />
        <TextField
          className={classes.input}
          name="license"
          variant="outlined"
          label="License #"
          fullWidth
          value={info.license}
          onChange={(e) => setInfo({ ...info, license: e.target.value })}
        />
        <div className={classes.multipleInputHolder}>
          <TextField
            className={classes.input}
            style={{ marginRight: "6px" }}
            name="city"
            autoComplete="address-level2"
            variant="outlined"
            label="City"
            fullWidth
            value={info.city}
            onChange={(e) => setInfo({ ...info, city: e.target.value })}
          />
          <TextField
            className={classes.input}
            style={{ marginLeft: "6px" }}
            name="phone"
            type="tel"
            variant="outlined"
            label="Phone"
            fullWidth
            value={info.phone}
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
            required
          />
        </div>
        <TextField
          className={classes.input}
          name="email"
          type="email"
          variant="outlined"
          label="Email"
          fullWidth
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
        />
        <Button
          variant="contained"
          color={origin === "buyers" ? "secondary" : "primary"}
          size="large"
          type="submit"
          style={{ marginTop: "6px", color: "#FFF" }}
        >
          Submit
        </Button>
      </form>
      {sendStatus === 200 && (
        <Alert style={{ marginTop: "12px" }} severity="success">
          <AlertTitle>
            We've successfully received your contact information.
          </AlertTitle>
          We'll be in touch <strong>within 24 hrs</strong>. Thanks for reaching
          out!
        </Alert>
      )}
    </Paper>
  );
};

export default Form;
