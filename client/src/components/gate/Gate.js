import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  Fade,
  Modal,
  Backdrop,
  Typography,
  Switch,
  Radio,
  FormControl,
  FormHelperText,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  withStyles,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";

const Gate = () => {
  const router = useRouter();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [age, setAge] = useState("false");
  const [buyer, setBuyer] = useState("false");

  const [user, setUser] = useState({ over21: "false", buyer: "false" });

  const checkLocal = () => {
    if (localStorage.getItem("user") !== null) {
      const grabbed = JSON.parse(localStorage.getItem("user"));
      setUser(grabbed);
    }
  };

  useEffect(() => {
    checkLocal();
  }, []);

  useEffect(() => {
    if (user.over21 === "true" && user.buyer === "true") {
      setOpen(false);
      localStorage.setItem("user", JSON.stringify(user));
    } else if (user.over21 === "true") {
      localStorage.setItem("user", JSON.stringify(user));
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ over21: age, buyer: buyer });
    buyer === "true" && router.push("/buyers");
  };

  return (
    <>
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          classes: {
            root: classes.modalRoot,
          },
        }}
        disableBackdropClick
        disableAutoFocus
        disableEnforceFocus
        disableEscapeKeyDown
      >
        <Fade in={open}>
          <div className={classes.whole}>
            <div className={classes.paper}>
              <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.main}>
                  <Typography variant="h4">
                    <strong>Age Verification</strong>
                  </Typography>
                  <Typography
                    align="center"
                    variant="body1"
                    className={classes.text}
                  >
                    Are you over the age of 21 or have a medical license to
                    purchase and consume cannabis?
                  </Typography>
                  <RadioGroup
                    row
                    name="over21"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    defaultChecked="false"
                  >
                    <FormControlLabel
                      className={classes.largeRadio}
                      control={<RedRadio />}
                      value="false"
                      label="No"
                    />
                    <FormControlLabel
                      className={classes.largeRadio}
                      control={<GreenRadio size="medium" />}
                      value="true"
                      label="Yes"
                      color="primary"
                    />
                  </RadioGroup>
                </div>
                <div className={classes.buyer}>
                  <Typography variant="body1" align="center">
                    Do you also happen to be a licensed cannabis dealer?
                  </Typography>
                  <RadioGroup
                    row
                    name="buyer"
                    value={buyer}
                    onChange={(e) => setBuyer(e.target.value)}
                    defaultChecked="false"
                  >
                    <FormControlLabel
                      control={<RedRadioSmall />}
                      value="false"
                      label="No"
                    />
                    <FormControlLabel
                      control={<GreenRadioSmall size="medium" />}
                      value="true"
                      label="Yes"
                      color="primary"
                    />
                  </RadioGroup>
                </div>
                <div className={classes.enter}>
                  {age === "true" ? (
                    buyer === "true" ? (
                      <Button
                        style={{ color: "#FFF" }}
                        variant="contained"
                        color="secondary"
                        type="submit"
                        size="large"
                      >
                        Enter Buyer's Lounge
                      </Button>
                    ) : (
                      <Button
                        style={{ color: "#FFF" }}
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="large"
                      >
                        Enter
                      </Button>
                    )
                  ) : (
                    <Button
                      style={{ backgroundColor: "#d3d3d3" }}
                      variant="contained"
                      size="medium"
                      disabled
                    >
                      Enter
                    </Button>
                  )}
                </div>
              </form>
            </div>
            <div className={classes.disclaimer}>
              <Typography variant="overline" align="center">
                By entering, you acknowledge this site uses cookies to store
                your age.
              </Typography>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Gate;

const GreenRadio = withStyles({
  root: {
    color: "#FFF",
    padding: "9px",
    height: 15,
    weight: 15,
    "&.Mui-checked": {
      color: "#46b652",
    },
  },
})(Radio);

const RedRadio = withStyles({
  root: {
    color: "#FFF",
    padding: "9px",
    height: 15,
    weight: 15,
    "&.Mui-checked": {
      color: "#FF0000",
    },
  },
})(Radio);

const GreenRadioSmall = withStyles({
  root: {
    color: "#FFF",
    padding: "12px",
    "&.Mui-checked": {
      color: "#46b652",
    },
  },
})(Radio);

const RedRadioSmall = withStyles({
  root: {
    color: "#FFF",
    "&.Mui-checked": {
      color: "#FF0000",
    },
  },
})(Radio);
