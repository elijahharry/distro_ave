import { useState } from "react";
import { addStrain } from "../../../../../../pages/api/strains/index";
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

const Add = () => {
  const router = useRouter();
  const classes = useStyles();
  const [productImages, setProductImages] = useState();
  const [productVideo, setProductVideo] = useState();
  const [hasYield, setYield] = useState(false);

  const [productData, setProductData] = useState({
    strain: "",
    type: "",
    growType: "",
    genetics: "",
    slug: "",
    video: "",
    structure: "",
    nose: "",
    color: "",
    frost: "",
    size: "",
    thc: 0,
    weight: 0,
    yieldStart: new Date(0),
    yieldFreq: 0,
  });

  const saveProduct = (e) => {
    console.log(productData);
    e.preventDefault();
    let imageArray = Array.from(productImages);
    productVideo && imageArray.push(productVideo[0]);
    const formData = new FormData();
    imageArray.forEach((file) => formData.append("images", file));
    formData.append("strain", productData.strain);
    formData.append("genetics", productData.genetics);
    formData.append("type", productData.type);
    formData.append("slug", productData.slug);
    formData.append("video", productData.video);
    formData.append("structure", productData.structure);
    formData.append("nose", productData.nose);
    formData.append("color", productData.color);
    formData.append("frost", productData.frost);
    formData.append("size", productData.size);
    formData.append("thc", productData.thc);
    formData.append("weight", productData.weight);
    formData.append("growType", productData.growType);
    formData.append("yieldStart", productData.yieldStart);
    formData.append("yieldFreq", productData.yieldFreq);
    console.log(formData);
    addNewStrain(formData);
  };

  const addNewStrain = async (strain) => {
    try {
      const { data } = await addStrain(strain);
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleYield = () => {
    setProductData({ ...productData, yieldStart: new Date() });
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
        <Typography variant="h5">Add a New Strain</Typography>
        <form className={classes.form} onSubmit={saveProduct}>
          <TextField
            className={classes.input}
            name="strain"
            variant="outlined"
            label="Strain name"
            fullWidth
            value={productData.strain}
            onChange={(e) =>
              setProductData({ ...productData, strain: e.target.value })
            }
            required
            color="secondary"
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
                value={productData.genetics}
                onChange={(e) =>
                  setProductData({ ...productData, genetics: e.target.value })
                }
                required
                color="secondary"
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <TextField
                className={classes.input}
                name="slug"
                variant="outlined"
                label="Page Slug"
                fullWidth
                value={productData.slug}
                onChange={(e) =>
                  setProductData({ ...productData, slug: e.target.value })
                }
                required
                color="secondary"
              />
            </Grid>
          </Grid>
          <Grid
            style={{ marginTop: "-5px", marginBottom: "-5px" }}
            container
            spacing={3}
            align="center"
            justify="center"
          >
            <Grid item xs={12} md={6} align="center">
              <div className={classes.fileInput}>
                <Button
                  variant="contained"
                  size="large"
                  color={productImages ? "primary" : "secondary"}
                  className={classes.requiredButton}
                  component="label"
                  fullWidth
                >
                  {productImages ? (
                    <CheckCircleOutlineIcon className={classes.uploadIcon} />
                  ) : (
                    <PhotoCamera className={classes.uploadIcon} />
                  )}
                  {productImages
                    ? `Selected ${productImages.length} ${
                        productImages.length === 1 ? "Image" : "Images"
                      }`
                    : "Select Images *"}
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    name="photo"
                    onChange={(event) => setProductImages(event.target.files)}
                    required
                    multiple
                    hidden
                  />
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6} align="center">
              <div className={classes.fileInput}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.purple}
                  color={productVideo ? "secondary" : "secondary"}
                  component="label"
                  fullWidth
                >
                  {productVideo ? (
                    <CheckCircleOutlineIcon className={classes.uploadIcon} />
                  ) : (
                    <PlayCircleFilledIcon className={classes.uploadIcon} />
                  )}
                  {productVideo ? "Video selected" : "Select a video (.mp4)"}
                  <input
                    type="file"
                    accept=".mp4"
                    name="video"
                    onChange={(event) => setProductVideo(event.target.files)}
                    hidden
                  />
                </Button>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={3} align="center" justify="center">
            <Grid item xs={4} align="center">
              <FormControl className={classes.dropdown}>
                <InputLabel color="secondary" id="type">
                  Variety
                </InputLabel>
                <Select
                  labelId="type"
                  id="type"
                  value={productData.type}
                  onChange={(e) =>
                    setProductData({ ...productData, type: e.target.value })
                  }
                  color="secondary"
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
                <InputLabel color="secondary" id="growType">
                  Grow Type
                </InputLabel>
                <Select
                  labelId="growType"
                  id="growType"
                  value={productData.growType}
                  onChange={(e) =>
                    setProductData({ ...productData, growType: e.target.value })
                  }
                  color="secondary"
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
                value={productData.weight}
                onChange={(e) =>
                  setProductData({ ...productData, weight: e.target.value })
                }
                required
                color="secondary"
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
                value={productData.structure}
                onChange={(e) =>
                  setProductData({ ...productData, structure: e.target.value })
                }
                required
                color="secondary"
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
                value={productData.nose}
                onChange={(e) =>
                  setProductData({ ...productData, nose: e.target.value })
                }
                color="secondary"
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
                value={productData.color}
                onChange={(e) =>
                  setProductData({ ...productData, color: e.target.value })
                }
                required
                color="secondary"
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
                value={productData.frost}
                onChange={(e) =>
                  setProductData({ ...productData, frost: e.target.value })
                }
                required
                color="secondary"
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
                value={productData.size}
                onChange={(e) =>
                  setProductData({ ...productData, size: e.target.value })
                }
                required
                color="secondary"
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
            {!hasYield ? (
              <Grid item align="center" xs={12}>
                <Button
                  color="secondary"
                  className={classes.yieldToggle}
                  variant="contained"
                  onClick={toggleYield}
                  fullWidth
                >
                  Add a yield/frequency
                </Button>
              </Grid>
            ) : (
              <>
                <Grid item align="center" xs={6} md={4}>
                  <KeyboardDatePicker
                    disableToolbar
                    format="MM/dd/yyyy"
                    margin="normal"
                    value={productData.yieldStart}
                    onChange={(date) =>
                      setProductData({ ...productData, yieldStart: date })
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
                    value={productData.yieldFreq}
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        yieldFreq: e.target.value,
                      })
                    }
                  />
                </Grid>
              </>
            )}
            <Button
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Paper>
    </MuiPickersUtilsProvider>
  );
};

export default Add;
{
  /* <Grid container spacing={3} align="center" justify="center">
<Grid item xs={6} align="center">
  <div style={{ textAlign: "center" }}>
    <Typography variant="body1">Select images</Typography>
    <input
      className={classes.input}
      type="file"
      multiple
      onChange={(event) => setProductImages(event.target.files)}
    />
  </div>
</Grid>
<Grid item xs={6} align="center">
  <div className={classes.file}>
    <Typography variant="body1">Select video (.mp4)</Typography>
    <input
      type="file"
      onChange={(event) => setProductVideo(event.target.files)}
    />
  </div>
</Grid>
</Grid> */
}
