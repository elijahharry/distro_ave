import { Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import useStyles from "./styles";

export const SubRating = ({ strain, label, color }) => {
  const classes = useStyles();
  const rating = strain[label];
  return (
    <div className={classes.rating}>
      <Typography
        className={classes.textHolder}
        variant="caption"
        style={{ color: color }}
      >
        {label}
        {rating >= 9 ? (
          <StarIcon
            style={{ color: color }}
            className={classes.icon}
            fontSize="default"
          />
        ) : rating >= 8 ? (
          <StarHalfIcon
            style={{ color: color }}
            className={classes.icon}
            fontSize="default"
          />
        ) : (
          <StarBorderIcon
            style={{ color: color }}
            className={classes.icon}
            fontSize="default"
          />
        )}
        {rating}
      </Typography>
    </div>
  );
};

export default SubRating;
