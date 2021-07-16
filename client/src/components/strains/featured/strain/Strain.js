import useStyles from "./styles.js";

import Media from "./media/Media";
import OverallRating from "./ratings/OverallRating";
import SubRating from "./ratings/SubRating";

import { Card, CardContent, Typography, Chip } from "@material-ui/core";
import { version } from "react";
import Link from "next/link";

import { menu } from "../../../../../constants/frontend";

const Strain = ({ strain }) => {
  const classes = useStyles();

  const overallLabel = (
    <Typography
      style={{ color: "#FFF" }}
      variant="overline"
      className={classes.labelText}
    >
      {strain.thc}% THC
    </Typography>
  );
  const typeLabel = (
    <Typography
      style={{ color: "#FFF" }}
      variant="overline"
      className={classes.labelText}
    >
      {strain.type}
    </Typography>
  );

  const typeColor =
    strain.type === "indica"
      ? "linear-gradient(90deg, #175225 0%, #195e2a 100%)"
      : "linear-gradient(90deg, #3e1c70 0%, #4F268C 100%)";

  return (
    <Card className={classes.card}>
      <Media strain={strain} />
      <CardContent>
        <div className={classes.content}>
          <div className={classes.titleRow}>
            <Typography variant="h6" className={classes.strainName}>
              {strain.strain}
            </Typography>
            <OverallRating strain={strain} />
          </div>
          <div className={classes.genetics}>
            <Typography variant="body1">{strain.genetics}</Typography>
          </div>
          <div className={classes.labelHolder}>
            <Link href={`${menu}${strain.slug}`}>
              <Chip
                style={{ backgroundColor: typeColor, background: typeColor }}
                className={classes.label}
                label={typeLabel}
                size="medium"
              />
            </Link>
            <Link href={`${menu}${strain.slug}`}>
              <Chip
                style={{ backgroundColor: "#46b652" }}
                className={classes.label}
                label={overallLabel}
                size="medium"
              />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Strain;

// stats row
// <div className={classes.statsRow}>
// <SubRating strain={strain} label="size" color="#a8a8a8" />
// <SubRating strain={strain} label="structure" color="#a8a8a8" />
// <SubRating strain={strain} label="color" color="#a8a8a8" />
// <SubRating strain={strain} label="frost" color="#a8a8a8" />
// <SubRating strain={strain} label="nose" color="#a8a8a8" />
// </div>

// gradient colored version
// <SubRating strain={strain} label="size" color="#48995E" />
// <SubRating strain={strain} label="structure" color="#4A7C69" />
// <SubRating strain={strain} label="frost" color="#4B6075" />
// <SubRating strain={strain} label="nose" color="#4D4380" />
// <SubRating strain={strain} label="color" color="#4F268C" />
