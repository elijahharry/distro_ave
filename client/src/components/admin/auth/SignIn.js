import { useState } from "react";
import { signin } from "../../../../pages/api/auth";

import Input from "./Input";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";

const initialState = {
  email: "",
  password: "",
};

const SignIn = ({ manageAdmin }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [alert, setAlert] = useState(null);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formData);
    setFormData(initialState);
  };
  const signIn = async (formData) => {
    try {
      const { data } = await signin(formData);
      localStorage.setItem("admin", JSON.stringify(data));
      manageAdmin(data);
    } catch (error) {
      console.log(error);
      const { message } = error.body.message;
      setAlert(message);
    }
  };

  return (
    <div className={classes.background}>
      <div className={classes.overlay}>
        <Container maxWidth="lg" className={classes.container}>
          <Paper className={classes.paper} elevation={1}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">Admin Dashboard</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Input
                  name="email"
                  label="Email address"
                  handleChange={handleChange}
                  type="email"
                />
                <Input
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </form>
            {alert && (
              <Grid container justify="center">
                <Grid item>
                  <Alert severity="error">{alert}</Alert>
                </Grid>
              </Grid>
            )}
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
