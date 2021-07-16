import { Paper, Typography } from "@material-ui/core";
import { backendImages } from "../../../../../../constants/backend";

const Image = ({ strain }) => {
  const image = strain.images[0].filename;

  return (
    <Paper
      elevation={1}
      style={{
        backgroundColor: "#FFF",
        width: "100%",
        height: "100%",
        backgroundImage: `url('${backendImages}/thumbnails/xl/${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFF",
        padding: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "#46b652",
          padding: "15px",
          borderRadius: "3px",
        }}
      >
        <Typography variant="h4">/{strain.slug}</Typography>
      </div>
    </Paper>
  );
};

export default Image;
