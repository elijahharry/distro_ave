import Calendar from "react-calendar";

import { Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

const SingleYield = ({ yieldStart }) => {
  const classes = useStyles();

  const today = new Date();
  const start = new Date(yieldStart);

  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const startDay = start.getDate();

  const timeSince = today.getTime() - start.getTime();
  const daysSince = Math.floor(timeSince / (1000 * 3600 * 24));

  const label =
    daysSince > 2
      ? "Last yield"
      : daysSince < 3 && daysSince >= 0
      ? "Yielding now"
      : "Next yield";

  let harvest = new Date(startYear, startMonth, startDay);
  let harvestEnd = new Date(startYear, startMonth, startDay + 2);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={classes.calendar}>
      <Typography className={classes.text} variant="body2">
        <strong>{label}</strong>{" "}
        <span style={{ fontSize: 12 }}>
          {monthNames[harvest.getMonth()]} {harvest.getDate()} -{" "}
          {monthNames[harvestEnd.getMonth()]} {harvestEnd.getDate()},{" "}
          {harvest.getFullYear()}
        </span>
      </Typography>
      <Paper className={classes.paper}>
        <Calendar value={[harvest, harvestEnd]} showNavigation={true} />
      </Paper>
    </div>
  );
};

export default SingleYield;
