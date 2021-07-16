import { Grid } from "@material-ui/core";
import Strain from "./strain/Strain";

const Featured = ({ strains }) => {
  const featured = strains.filter(
    (strain) => strain.featured === true && strain
  );

  return (
    <>
      <Grid xs={12} sm={6} md={6} item>
        <Strain strain={featured[0]} />
      </Grid>
    </>
  );
};

export default Featured;
