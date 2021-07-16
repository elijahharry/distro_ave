import { Container, Grow, Paper, Typography, Zoom } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import React from "react";

import useStyles from "./styles";

const Hero = ({
  title,
  sub,
  image,
  height,
  vari,
  color,
  logo,
  border,
  buds,
}) => {
  const classes = useStyles();

  let headSize = "h3";
  let subSize = "h5";
  let spacing = "15px";
  if (vari === "small") {
    headSize = "h4";
    subSize = "body1";
    spacing = "10px";
  }
  let gradient =
    "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, .4) 100%)";
  if (color === "green") {
    gradient =
      "linear-gradient(115deg, rgba(0, 33, 8, .6) 0%, rgba(0, 8, 2, .2) 100%)";
  } else if (color === "green-black") {
    gradient =
      "linear-gradient(115deg, rgba(0, 33, 8, .6) 0%, rgba(70, 182, 82, .4) 100%)";
  } else if (color === "red") {
    gradient =
      "linear-gradient(115deg, rgba(0, 0, 0, .6) 0%, rgba(199, 0, 0, .5) 100%)";
  } else if (color === "darkgreen") {
    gradient =
      "linear-gradient(115deg, rgba(0, 33, 8, .8) 0%, rgba(0, 8, 2, .5) 100%)";
  } else if (color === "black") {
    gradient =
      "linear-gradient(115deg, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, .4) 100%)";
  } else if (color === "blue") {
    gradient =
      "linear-gradient(115deg, rgba(0, 3, 28, .6) 0%, rgba(13, 24, 184, .4) 100%)";
  } else if (color === "black") {
    gradient =
      "linear-gradient(115deg, rgba(0, 0, 0, .4) 0%, rgba(0, 0, 0, .3) 100%)";
  }

  return (
    <>
      <Grow in>
        <div className={classes.holder} style={{ height: `${height}px` }}>
          <Paper
            style={{ backgroundImage: `url(/images/${image})` }}
            className={classes.hero}
            elevation={1}
          >
            <div className={classes.gradient} style={{ background: gradient }}>
              <div className={classes.text}>
                <Typography
                  className={classes.heading}
                  style={{ marginBottom: spacing }}
                  variant={headSize}
                >
                  <strong>{title}</strong>
                </Typography>
                <Typography className={classes.sub} variant={subSize}>
                  {sub}
                </Typography>
                {logo && (
                  <div className={classes.logoHolder}>
                    <img className={classes.logo} src={`/images/${logo}`} />
                  </div>
                )}
                {buds && (
                  <div className={classes.budsHolder}>
                    <img className={classes.buds} src={`/images/${buds}`} />
                  </div>
                )}
                {title === "White Rabbit" && (
                  <div className={classes.followTheRabbit}>
                    <Typography
                      variant="button"
                      style={{ color: "#d3d2ce", letterSpacing: "2px" }}
                    >
                      Follow the rabbit
                    </Typography>
                    <img
                      className={classes.rabbit}
                      src="/images/little-rabbit.png"
                    />
                  </div>
                )}
              </div>
              {border === "purple" ? (
                <div className={classes.purpleBorder} />
              ) : border === "green" ? (
                <div className={classes.greenBorder} />
              ) : null}
            </div>
          </Paper>
        </div>
      </Grow>
      <div className={classes.grey1} />
    </>
  );
};

export default Hero;
