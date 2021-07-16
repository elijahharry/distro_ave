import Stars from "./stars/Stars";
import Ratings from "./ratings/Ratings";
import Crumbs from "./crumbs/Crumbs";
import RepeatYield from "./yield/RepeatYield";
import Price from "./price/Price";
import Variety from "./variety/Variety";
import Grow from "./grow/Grow";

import { Typography, Chip, Grid, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import SingleYield from "./yield/SingleYield";

const Description = ({ strain }) => {
  const classes = useStyles();
  const hasYield =
    new Date(0).getTime() !== new Date(strain.yieldStart).getTime();

  const overallLabel = (
    <Typography variant="body2" className={classes.labelText}>
      {strain.thc}% THC
    </Typography>
  );
  const typeLabel = (
    <Typography variant="body2" className={classes.labelText}>
      {strain.type}
    </Typography>
  );

  const typeColor =
    strain.type === "indica"
      ? "linear-gradient(90deg, #175225 0%, #195e2a 100%)"
      : "linear-gradient(90deg, #3e1c70 0%, #4F268C 100%)";

  return (
    <div className={classes.container}>
      <div className={classes.topHalf}>
        <div className={classes.crumbs}>
          <Crumbs showLounge={true} strain={strain} />
        </div>
        <div className={classes.titleRow}>
          <div className={classes.title}>
            <Typography
              className={classes.titleText}
              style={{ padding: "10px 0 10px 0" }}
              variant="h4"
              color="initial"
              align="center"
            >
              <strong>{strain.strain}</strong>
            </Typography>
          </div>
          <Stars strain={strain} />
        </div>
        <div className={classes.subtitleRow}>
          <Typography className={classes.geneticsText} variant="h5">
            {strain.genetics}
          </Typography>
        </div>
        <div className={classes.labelsRow}>
          <Variety type={strain.type} />
          <Grow type={strain.growType} />
        </div>
        <Price weight={parseFloat(strain.weight)} />
      </div>
      <Grid
        container
        spacing={3}
        justify="space-between"
        alignItems="stretch"
        className={classes.dataHolder}
      >
        <Grid item xs={12} md={hasYield ? 6 : 12}>
          <Ratings strain={strain} />
        </Grid>
        {hasYield && (
          <Grid item xs={12} md={6}>
            {strain.yieldFreq !== "0" ? (
              <RepeatYield
                yieldStart={strain.yieldStart}
                yieldFreq={strain.yieldFreq}
              />
            ) : (
              <SingleYield yieldStart={strain.yieldStart} />
            )}
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Description;
