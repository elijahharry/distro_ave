import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorder from "@material-ui/icons/StarBorder";

import useStyles from "./styles";

const Stars = ({ strain }) => {
  const classes = useStyles();
  const overallRating =
    strain.overall >= 5 ? strain.overall / 2 : strain.overall;
  const wholeNum = Math.floor(overallRating);
  const deciNum = overallRating - wholeNum;
  let iconCounter = wholeNum;

  let stars = [];
  let key = 0;
  for (var i = 0; i < wholeNum; i++) {
    stars.push(<StarIcon key={key} className={classes.star} color="primary" />);
    key++;
  }
  if (deciNum <= 0.7 && deciNum >= 0.3) {
    stars.push(
      <StarHalfIcon key={key} className={classes.star} color="primary" />
    );
    iconCounter++;
    key++;
  } else if (deciNum > 0.7) {
    stars.push(<StarIcon key={key} className={classes.star} color="primary" />);
    iconCounter++;
    key++;
  }
  const remainingStars = 5 - iconCounter;
  for (var i = 0; i < 5 - iconCounter; i++) {
    stars.push(
      <StarBorder key={key} className={classes.star} color="primary" />
    );
    key++;
  }

  return <div className={classes.starsHolder}>{stars}</div>;
};

export default Stars;
