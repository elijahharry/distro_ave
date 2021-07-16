import { Container, Grow, Paper, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

export const HeroCentered = ({
  title,
  sub,
  image,
  height,
  vari,
  color,
  logo,
  border,
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
    "linear-gradient(115deg, rgba(0, 0, 0, .3) 0%, rgba(0, 0, 0, .2) 100%)";

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
              <div className={classes.textCentered}>
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
                    <img className={classes.logo} src={`images/${logo}`} />
                  </div>
                )}
              </div>
              {border === "purple" ? (
                <div className={classes.purpleBorder} />
              ) : (
                <div className={classes.greenBorder} />
              )}
            </div>
          </Paper>
        </div>
      </Grow>
      <div className={classes.grey1} />
    </>
  );
};

export default HeroCentered;
