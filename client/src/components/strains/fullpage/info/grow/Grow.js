import { useState } from "react";
import { motion } from "framer-motion";

import useStyles from "./styles";
import { Typography, Avatar } from "@material-ui/core";

const Grow = ({ type }) => {
  const classes = useStyles();
  const icon =
    type === "lightassist-aaa"
      ? "houseaaa.svg"
      : type === "lightassist"
      ? "housebulb.svg"
      : type === "greenhouse"
      ? "greenhouse.svg"
      : type === "lightdep"
      ? "lightdep.svg"
      : type === "outdoor"
      ? "outdoor.svg"
      : type === "indoor"
      ? "lightbulb.svg"
      : type === "autoflower"
      ? "flower.svg"
      : null;

  const text =
    type === "lightassist-aaa"
      ? "AAA Light-Assist Greenhouse"
      : type === "lightassist"
      ? "Light-Assist Greenhouse"
      : type === "greenhouse"
      ? "Greenhouse"
      : type === "lightdep"
      ? "Light Deprivation"
      : type === "outdoor"
      ? "Grown Outdoors"
      : type === "indoor"
      ? "Grown Indoors"
      : type === "autoflower"
      ? "Auto Flower"
      : null;

  const scale = type === "lightdep" ? "63px" : "55px";

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      className={classes.holder}
    >
      <img
        className={classes.growAvatar}
        width={scale}
        height={scale}
        src={`/icons/purple/${icon}`}
      />
      <Typography className={classes.growText} variant="body1">
        <span className={classes.hideMobile}>
          Grow type: <br />
        </span>
        <span className={classes.growLabel}>
          <strong>{text}</strong>
        </span>
      </Typography>
    </motion.div>
  );
};

export default Grow;
