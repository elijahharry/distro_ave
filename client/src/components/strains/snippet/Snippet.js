import Link from "next/link";
import { motion } from "framer-motion";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { backendImages } from "../../../../constants/backend";
import useStyles from "./styles";
import { menu } from "../../../../constants/frontend";

const Snippets = ({ strain, delay }) => {
  const classes = useStyles();

  return (
    <Link href={menu + strain.slug} key={strain.strain}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay }}
        className={classes.strain}
      >
        <Avatar
          className={classes.avatar}
          src={`${backendImages}/thumbnails/sm/${strain.images[0].filename}`}
          alt={strain.strain}
        />
        <div>
          <Typography variant="body1" className={classes.strainName}>
            <strong>{strain.strain}</strong>
          </Typography>
          <div className={classes.subtitle}>
            <Typography
              color="primary"
              variant="body2"
              className={classes.genetics}
            >
              {strain.genetics}
            </Typography>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Snippets;
