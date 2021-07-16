import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";

import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import useStyles from "./styles";
import { BorderAll } from "@material-ui/icons";

const RatingBar = ({ strain, label, color }) => {
  const classes = useStyles();

  const rating = strain[label];
  // const filledWidth = rating * 10;
  // const emptyWidth = 100 - filledWidth;

  const test = rating - 5;
  const frac = test / 5;
  const filledWidth = frac * 100;
  const emptyWidth = 100 - filledWidth;

  let duration;
  switch (label) {
    case "overall":
      duration = 0.7;
      break;
    case "size":
      duration = 0.85;
      break;
    case "structure":
      duration = 1;
      break;
    case "color":
      duration = 1.15;
      break;
    case "frost":
      duration = 1.3;
      break;
    case "frost":
      duration = 1.45;
      break;
    case "nose":
      duration = 1.6;
      break;
  }
  return (
    <div className={classes.rating}>
      <div className={classes.detailsHolder}>
        <Typography className={classes.name} variant="overline">
          {label}:
        </Typography>
        <Typography
          className={classes.score}
          style={{ color: color }}
          variant="h6"
        >
          {rating}
        </Typography>
        {rating >= 9 ? (
          <StarIcon className={classes.icon} style={{ color: color }} />
        ) : rating >= 8 ? (
          <StarHalfIcon className={classes.icon} style={{ color: color }} />
        ) : (
          <StarBorderIcon className={classes.icon} style={{ color: color }} />
        )}
      </div>
      <div className={classes.barHolder}>
        <div className={classes.barEmpty}>
          <motion.div
            style={{ width: `${filledWidth}%`, backgroundColor: color }}
            className={classes.barFilled}
            initial={{ width: 0 }}
            animate={{ width: `${filledWidth}%` }}
            transition={{ duration: duration }}
          />
        </div>
      </div>
    </div>
  );
};

export default RatingBar;
