import { Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import useStyles from "./styles";

const OverallRating = ({ strain }) => {
  const classes = useStyles();
  const rating = strain.overall;
  return (
    <>
      {rating >= 9 ? (
        <StarIcon className={classes.ratingIcon} fontSize="default" />
      ) : rating >= 8 ? (
        <StarHalfIcon className={classes.ratingIcon} fontSize="default" />
      ) : (
        <StarBorderIcon className={classes.ratingIcon} fontSize="default" />
      )}
      <Typography className={classes.ratingText} variant="caption">
        {rating}
      </Typography>
    </>
  );
};

export default OverallRating;
