import { Button, Typography, Paper } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import useStyles from "./styles";

import { useState } from "react";

const Queue = ({ queue, queueClear, queueSubmit }) => {
  const classes = useStyles();
  const [checkSure, setSure] = useState(false);

  const queuedStrains = queue.map((strain) => strain.strain);
  const queSentence = new Intl.ListFormat().format(queuedStrains);

  return (
    <Paper className={classes.alert}>
      <div className={classes.content}>
        {!checkSure ? (
          <div className={classes.info}>
            <Typography variant="body1" className={classes.text}>
              {queue.length > 1 ? (
                <>
                  <strong>
                    <span className={classes.deletion}>{queSentence}</span>
                  </strong>{" "}
                  have{" "}
                </>
              ) : (
                <>
                  <strong>
                    <span className={classes.deletion}>{queuedStrains}</span>
                  </strong>{" "}
                  has{" "}
                </>
              )}
              been queued for deletion.
            </Typography>
          </div>
        ) : (
          <Typography variant="h6" className={classes.deletion}>
            <strong>Are you sure?</strong>
          </Typography>
        )}

        {!checkSure ? (
          <div className={classes.controls}>
            <Button
              size="small"
              onClick={queueClear}
              className={classes.buttonSecondary}
            >
              Nevermind
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => setSure(true)}
              className={classes.button}
            >
              {queue.length > 1 ? "Delete All" : "Delete"}
            </Button>
          </div>
        ) : (
          <div className={classes.controls}>
            <Button
              size="small"
              onClick={queueClear}
              className={classes.buttonSecondary}
            >
              Maybe not
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={queueSubmit}
              className={classes.button}
            >
              Yes, I'm sure
            </Button>
          </div>
        )}
      </div>
    </Paper>
  );
};

export default Queue;
