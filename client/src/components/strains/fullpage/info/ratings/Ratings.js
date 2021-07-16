import RatingBar from "./ratingbar/RatingBar";

import { Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Ratings = ({ strain }) => {
  const classes = useStyles();
  return (
    <div className={classes.ratings}>
      <Typography className={classes.text} variant="body2">
        <strong>Our Ratings:</strong>
        <span style={{ fontSize: 12 }}> Scored out of 10</span>
      </Typography>
      <Paper className={classes.paper} elevation={1}>
        <RatingBar strain={strain} label="overall" color="#46B652" />
        <RatingBar strain={strain} label="size" color="#48995E" />
        <RatingBar strain={strain} label="structure" color="#4A7C69" />
        <RatingBar strain={strain} label="color" color="#4B6075" />
        <RatingBar strain={strain} label="frost" color="#4D4380" />
        <RatingBar strain={strain} label="nose" color="#4F268C" />
      </Paper>
    </div>
  );
};

export default Ratings;

// beautiful blend here
// <RatingBar strain={strain} label="overall" color="#46B652" />
// <RatingBar strain={strain} label="size" color="#38A75F" />
// <RatingBar strain={strain} label="structure" color="#2A976C" />
// <RatingBar strain={strain} label="color" color="#1C8879" />
// <RatingBar strain={strain} label="frost" color="#0E7886" />
// <RatingBar strain={strain} label="nose" color="#006993" />

// {/* <RatingBar strain={strain} label="overall" color="#46b652" />
// <RatingBar strain={strain} label="size" color="#006400" />
// <RatingBar strain={strain} label="structure" color="#228B22" />
// <RatingBar strain={strain} label="color" color="#20B2AA" />
// <RatingBar strain={strain} label="frost" color="#87CEEB" />
// <RatingBar strain={strain} label="nose" color="#191970" /> */}

// This one isn't too bad
// <RatingBar strain={strain} label="overall" color="#46b652" />
// <RatingBar strain={strain} label="size" color="#278036" />
// <RatingBar strain={strain} label="structure" color="#41A950" />
// <RatingBar strain={strain} label="color" color="#87D69A" />
// <RatingBar strain={strain} label="frost" color="#1773D1" />
// <RatingBar strain={strain} label="nose" color="#030083" />

// This one is also pretty good. nice blend
// <RatingBar strain={strain} label="overall" color="#46b652" />
// <RatingBar strain={strain} label="size" color="#3CB371" />
// <RatingBar strain={strain} label="structure" color="#30A478" />
// <RatingBar strain={strain} label="color" color="#24957F" />
// <RatingBar strain={strain} label="frost" color="#0C788C" />
// <RatingBar strain={strain} label="nose" color="#006993" />
