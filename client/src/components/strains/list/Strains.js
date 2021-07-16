import { Grid, CircularProgress } from "@material-ui/core";
import { motion } from "framer-motion";
import Strain from "./strain/Strain";

const Strains = ({ strains }) => {
  let delay = 0.15;
  return !strains.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {strains.map((strain) => {
        delay = delay + 0.1;
        return (
          <Grid xs={12} sm={6} md={4} item>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay }}
              key={strain._id}
            >
              <Strain strain={strain} />
            </motion.div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Strains;
