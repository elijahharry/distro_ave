import { backendImages } from "../../../../../../../constants/backend";
import { toggleVisible } from "../../../../../../../pages/api/strains";
import { useRouter } from "next/router";

import useStyles from "./styles";
import { Paper, Typography, Avatar } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import { useState, useEffect } from "react";

const Strain = ({ strain, queue, queueDeletion, editStrain }) => {
  const router = useRouter();
  const [queued, setQueued] = useState(false);
  const classes = useStyles();

  const handleDelete = () => {
    queueDeletion(strain);
    setQueued(true);
  };

  let opacity = strain.hidden ? 0.8 : 1;
  if (queued) {
    opacity = 0.4;
  }
  useEffect(() => {
    if (queue.length < 1) {
      setQueued(false);
    }
  }, [queue]);

  const toggleHidden = async () => {
    try {
      const { data } = await toggleVisible(strain);
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const refresh = () => {
    router.reload(window.location.pathname);
  };

  return (
    <Paper className={classes.paper} style={{ opacity: opacity }}>
      <Avatar
        className={classes.avatar}
        src={`${backendImages}/thumbnails/sm/${strain.images[0].filename}`}
        alt={strain.strain}
      />
      <Typography variant="body1">{strain.strain}</Typography>

      <div className={classes.controls}>
        {strain.hidden ? (
          <VisibilityOffIcon
            onClick={toggleHidden}
            className={classes.iconActive}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <VisibilityIcon onClick={toggleHidden} className={classes.icon} />
        )}
        <EditIcon onClick={() => editStrain(strain)} className={classes.icon} />
        {queued ? (
          <ClearIcon className={classes.iconActive} />
        ) : (
          <DeleteForeverIcon onClick={handleDelete} className={classes.icon} />
        )}
      </div>
    </Paper>
  );
};

export default Strain;
