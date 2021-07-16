import { useState } from "react";
import { motion } from "framer-motion";

import useStyles from "./styles";
import { Typography, Avatar } from "@material-ui/core";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import Image from "next/image";

const Variety = ({ type }) => {
  const classes = useStyles();

  const icon = type.toLowerCase() === "indica" ? "indica.svg" : "hybrid.svg";

  const text = type.toLowerCase() === "indica" ? "Indica" : "Hybrid";

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      className={classes.holder}
    >
      <Avatar className={classes.growAvatar}>
        {<img className={classes.avatarIcon} src={`/icons/white/${icon}`} />}
      </Avatar>
      <Typography className={classes.growText} variant="body1">
        <span className={classes.hideMobile}>
          Variety: <br />
        </span>
        <span className={classes.growLabel}>
          <strong>{text}</strong>
        </span>
      </Typography>
    </motion.div>
  );
};

export default Variety;
