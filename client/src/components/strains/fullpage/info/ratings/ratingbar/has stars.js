import { Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorder from "@material-ui/icons/StarBorder";

import useStyles from "./styles";

const RatingBar = ({ strain, label, color }) => {
  const classes = useStyles();

  const rating = strain[label];
  const filledWidth = rating * 10;
  const emptyWidth = 100 - filledWidth;

  const wholeNum = Math.floor(rating);
  const deciNum = rating - wholeNum;
  let iconCounter = wholeNum;

  let stars = [];
  for (var i = 0; i < wholeNum; i++) {
    stars.push(<StarIcon className={classes.icon} style={{ color: color }} />);
  }
  if (deciNum <= 0.7 && deciNum >= 0.3) {
    stars.push(
      <StarHalfIcon className={classes.icon} style={{ color: color }} />
    );
    iconCounter++;
  } else if (deciNum > 0.7) {
    stars.push(<StarIcon className={classes.icon} style={{ color: color }} />);
    iconCounter++;
  }
  const remainingStars = 10 - iconCounter;
  for (var i = 0; i < 10 - iconCounter; i++) {
    stars.push(
      <StarBorder className={classes.icon} style={{ color: color }} />
    );
  }

  return (
    <div className={classes.rating}>
      <div className={classes.detailsHolder}>
        <Typography
          style={{ margin: "0 5px 4px 0" }}
          className={classes.name}
          variant="body"
        >
          {label}:
        </Typography>
        <Typography
          style={{ color: color }}
          className={classes.name}
          variant="h6"
        >
          {rating}
        </Typography>
        {stars}
      </div>
      <div className={classes.barHolder}>
        <div
          style={{ width: `${filledWidth}%`, backgroundColor: color }}
          className={classes.barFilled}
        />
        <div
          style={{ width: `${emptyWidth}%`, backgroundColor: color }}
          className={classes.barEmpty}
        />
      </div>
    </div>
  );
};

export default RatingBar;
