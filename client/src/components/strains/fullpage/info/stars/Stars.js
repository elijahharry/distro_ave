import { motion } from "framer-motion";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorder from "@material-ui/icons/StarBorder";

import useStyles from "./styles";

const Stars = ({ strain }) => {
  const classes = useStyles();
  const overallRating = strain.overall;
  const wholeNum = Math.floor(overallRating);
  const deciNum = overallRating - wholeNum;
  let iconCounter = 0;

  let stars = [];
  let delay = 0.1;
  const colors = [
    "#46B652",
    "#47A658",
    "#48965F",
    "#498665",
    "#4A766C",
    "#4B6672",
    "#4C5679",
    "#4D467F",
    "#4E3686",
    "#4F268C",
  ];

  for (var i = 0; i < wholeNum; i++) {
    stars.push(
      <Animate key={iconCounter} delay={delay}>
        <StarIcon className={classes.star} color="primary" />
      </Animate>
    );
    delay = delay + 0.1;
    iconCounter++;
  }

  if (deciNum <= 0.7 && deciNum >= 0.3) {
    stars.push(
      <Animate key={iconCounter} delay={delay}>
        <StarHalfIcon className={classes.star} color="primary" />
      </Animate>
    );
    delay = delay + 0.1;
    iconCounter++;
  } else if (deciNum > 0.7) {
    stars.push(
      <Animate key={iconCounter} delay={delay}>
        <StarIcon className={classes.star} color="primary" />
      </Animate>
    );
    delay = delay + 0.1;
    iconCounter++;
  }

  const remainingStars = 10 - iconCounter;
  for (var i = 0; i < remainingStars; i++) {
    stars.push(
      <Animate key={iconCounter} delay={delay}>
        <StarBorder className={classes.star} color="primary" />
      </Animate>
    );
    delay = delay + 0.1;
    iconCounter++;
  }

  return <div className={classes.starsHolder}>{stars}</div>;
};

export default Stars;

const Animate = ({ delay, iconCounter, children }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: delay }}
      key={iconCounter}
    >
      {children}
    </motion.div>
  );
};
