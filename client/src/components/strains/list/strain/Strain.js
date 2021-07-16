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

  const varietyIcon =
    strain.type.toLowerCase() === "indica" ? "indica.svg" : "hybrid.svg";
  const growIcon =
    strain.growType === "lightassist-aaa"
      ? "houseaaa.svg"
      : strain.growType === "lightassist"
      ? "housebulb.svg"
      : strain.growType === "greenhouse"
      ? "greenhouse.svg"
      : strain.growType === "lightdep"
      ? "lightdep.svg"
      : strain.growType === "outdoor"
      ? "outdoor.svg"
      : strain.growType === "indoor"
      ? "lightbulb.svg"
      : strain.growType === "autoflower"
      ? "flower.svg"
      : null;
  const growText =
    strain.growType === "lightassist-aaa"
      ? "AAA Light-Assist"
      : strain.growType === "lightassist"
      ? "Light-Assist Greenhouse"
      : strain.growType === "greenhouse"
      ? "Greenhouse"
      : strain.growType === "lightdep"
      ? "Light Deprivation"
      : strain.growType === "outdoor"
      ? "Outdoor"
      : strain.growType === "indoor"
      ? "Indoor"
      : strain.growType === "autoflower"
      ? "Auto Flower"
      : null;
  const growLabel = (
    <Typography
      style={{ color: "#FFF" }}
      variant="overline"
      className={classes.labelText}
    >
      {growText}
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
      <Link href={`${menu}${strain.slug}`}>
        <CardContent className={classes.clickable}>
          <div className={classes.content}>
            <div className={classes.titleRow}>
              <Typography variant="h6" className={classes.strainName}>
                {strain.strain}
              </Typography>
              <OverallRating strain={strain} />
            </div>
            <div className={classes.genetics}>
              <Typography variant="body1" color="textSecondary">
                {strain.genetics}
              </Typography>
            </div>
            <div className={classes.labelHolder}>
              <Chip
                color="primary"
                className={classes.label}
                label={typeLabel}
                size="small"
                icon={<img src={`/icons/white/${varietyIcon}`} />}
              />
              <Chip
                style={{
                  backgroundColor: typeColor,
                  background: typeColor,
                }}
                className={classes.label}
                label={growLabel}
                size="small"
                icon={<img src={`/icons/white/${growIcon}`} />}
              />
            </div>
          </div>
        </CardContent>
      </Link>
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
