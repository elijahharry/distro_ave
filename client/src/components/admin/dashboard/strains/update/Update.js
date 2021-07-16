import { useState } from "react";
import { updateStrain } from "../../../../../../pages/api/strains/index";
import { useRouter } from "next/router";

import {
  Button,
  Paper,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  Avatar,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

import useStyles from "./styles";

const Update = ({ strain, cancel }) => {
  const router = useRouter();
  const classes = useStyles();

  const [updatedStrain, setUpdatedStrain] = useState({
    strain: strain.strain,
    _id: strain._id,
    type: strain.type,
    growType: strain.growType,
    genetics: strain.genetics,
    slug: strain.slug,
    structure: strain.structure,
    nose: strain.nose,
    color: strain.color,
    frost: strain.frost,
    size: strain.size,
    thc: strain.thc,
    weight: strain.weight,
    yieldStart: new Date(strain.yieldStart),
    yieldFreq: strain.yieldFreq,
    images: strain.images,
    video: strain.video,
  });

  const saveStrain = (e) => {
    e.preventDefault();
    sendEdits(updatedStrain);
  };

  const sendEdits = async (strain) => {
    try {
      const { data } = await updateStrain(strain);
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleYield = () => {
    setUpdatedStrain({ ...updatedStrain, yieldStart: new Date() });
    setYield(true);
  };

  const refresh = () => {
    router.reload(window.location.pathname);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src="/icons/white/indica.svg" width="30px" height="30px" />
        </Avatar>

        <Typography variant="h5">Update {strain.strain}</Typography>
        <form className={classes.form} onSubmit={saveStrain}>
          <TextField
            className={classes.input}
            name="strain"
            variant="outlined"
            label="Strain name"
            fullWidth
            value={updatedStrain.strain}
            onChange={(e) =>
              setUpdatedStrain({ ...updatedStrain, strain: e.target.value })
            }
            required
            color="primary"
          />
          <Grid container spacing={2} justify="center">
            <Grid item xs={6} md={7}>
              <TextField
                className={classes.input}
                name="genetics"
                variant="outlined"
                label="Genetics"
                multiline
                rows={1}
                rowsMax={2}
                fullWidth
                value={updatedStrain.genetics}
                onChange={(e) =>
                  setUpdatedStrain({
                    ...updatedStrain,
                    genetics: e.target.value,
                  })
                }
                required
                color="primary"
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <TextField
                className={classes.input}
                name="slug"
                variant="outlined"
                label="Page Slug"
                fullWidth
                value={updatedStrain.slug}
                onChange={(e) =>
                  setUpdatedStrain({ ...updatedStrain, slug: e.target.value })
                }
                required
                color="primary"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} align="center" justify="center">
            <Grid item xs={4} align="center">
              <FormControl className={classes.dropdown}>
                <InputLabel color="primary" id="type">
                  Variety
                </InputLabel>
                <Select
                  labelId="type"
                  id="type"
                  value={updatedStrain.type}
                  onChange={(e) =>
                    setUpdatedStrain({ ...updatedStrain, type: e.target.value })
                  }
                  color="primary"
                  required
                >
                  <MenuItem value="Indica">Indica</MenuItem>
                  <MenuItem value="Hybrid">Hybrid</MenuItem>
                  <MenuItem value="Sativa">Sativa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={5} align="center">
              <FormControl className={classes.dropdown}>
                <InputLabel color="primary" id="growType">
                  Grow Type
                </InputLabel>
                <Select
                  labelId="growType"
                  id="growType"
                  value={updatedStrain.growType}
                  onChange={(e) =>
                    setUpdatedStrain({
                      ...updatedStrain,
                      growType: e.target.value,
                    })
                  }
                  color="primary"
                  required
                >
                  <MenuItem value="indoor">Indoor</MenuItem>
                  <MenuItem value="outdoor">Outdoor</MenuItem>
                  <MenuItem value="lightassist-aaa">
                    AAA Light-Assist Greenhouse
                  </MenuItem>
                  <MenuItem value="lightassist">
                    Light-Assist Greenhouse
                  </MenuItem>
                  <MenuItem value="greenhouse">Greenhouse</MenuItem>
                  <MenuItem value="lightdep">Light Deprivation</MenuItem>
                  <MenuItem value="autoflower">Auto Flower</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classes.input}
                name="weight"
                type="number"
                variant="outlined"
                label="Weight (lbs)"
                fullWidth
                value={updatedStrain.weight}
                onChange={(e) =>
                  setUpdatedStrain({ ...updatedStrain, weight: e.target.value })
                }
                required
                color="primary"
                InputProps={{ inputProps: { min: 0, step: "." } }}
              />
            </Grid>
          </Grid>

          <Grid
            className={classes.row}
            container
            alignItems="center"
            spacing={2}
            justify="center"
          >
            <Grid item xs={6} md={2}>
              <Typography variant="button">Rankings all out of 10</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                className={classes.input}
                name="structure"
                type="number"
                variant="outlined"
                label="Structure"
                fullWidth
                value={updatedStrain.structure}
                onChange={(e) =>
                  setUpdatedStrain({
                    ...updatedStrain,
                    structure: e.target.value,
                  })
                }
                required
                color="primary"
                InputProps={{
                  inputProps: { min: 0, max: 10, step: ".1", step: ".1" },
                }}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                className={classes.input}
                name="nose"
                type="number"
                variant="outlined"
                label="Nose"
                fullWidth
                value={updatedStrain.nose}
                onChange={(e) =>
                  setUpdatedStrain({ ...updatedStrain, nose: e.target.value })
                }
                color="primary"
                required
                InputProps={{ inputProps: { min: 0, max: 10, step: ".1" } }}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                className={classes.input}
                name="color"
                type="number"
                variant="outlined"
                label="Color"
                fullWidth
                value={updatedStrain.color}
                onChange={(e) =>
                  setUpdatedStrain({ ...updatedStrain, color: e.target.value })
                }
                required
                color="primary"
                InputProps={{ inputProps: { min: 0, max: 10, step: ".1" } }}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                className={classes.input}
                name="frost"
                type="number"
                variant="outlined"
                label="Frost"
                fullWidth
                value={updatedStrain.frost}
                onChange={(e) =>
                  setUpdatedStrain({ ...updatedStrain, frost: e.target.value })
                }
                required
                color="primary"
                InputProps={{ inputProps: { min: 0, max: 10, step: ".1" } }}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                className={classes.input}
                name="size"
                type="number"
                variant="outlined"
                label="Size"
                fullWidth
                value={updatedStrain.size}
                onChange={(e) =>
                  setUpdatedStrain({ ...updatedStrain, size: e.target.value })
                }
                required
                color="primary"
                InputProps={{ inputProps: { min: 0, max: 10, step: ".1" } }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="center" align="center"></Grid>

          <Grid
            container
            align="center"
            justify="center"
            className={classes.row}
          >
            <Grid item align="center" xs={6} md={4}>
              <KeyboardDatePicker
                disableToolbar
                format="MM/dd/yyyy"
                margin="normal"
                value={updatedStrain.yieldStart}
                onChange={(date) =>
                  setUpdatedStrain({ ...updatedStrain, yieldStart: date })
                }
              />
            </Grid>
            <Grid item align="center" item xs={6} md={3}>
              <TextField
                className={classes.input}
                name="yieldFreq"
                type="number"
                variant="outlined"
                label="Frequency (Weeks)"
                fullWidth
                value={updatedStrain.yieldFreq}
                onChange={(e) =>
                  setUpdatedStrain({
                    ...updatedStrain,
                    yieldFreq: e.target.value,
                  })
                }
              />
            </Grid>
            <Button
              variant="contained"
              color="primary"
              style={{ color: "#FFF" }}
              size="large"
              type="submit"
              fullWidth
            >
              Update
            </Button>
          </Grid>
        </form>
        <Button
          variant="contained"
          size="small"
          className={classes.nevermind}
          fullWidth
          onClick={cancel}
        >
          Nevermind
        </Button>
      </Paper>
    </MuiPickersUtilsProvider>
  );
};

export default Update;
