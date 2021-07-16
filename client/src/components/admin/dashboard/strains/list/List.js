import { useState, useEffect } from "react";
import * as api from "../../../../../../pages/api/strains/index";
import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";

import Queue from "./queue/Queue";
import Strain from "./strain/Strain";

const List = ({ strains, editStrain }) => {
  const router = useRouter();

  const [queue, setQueue] = useState([]);

  const queueStrain = (strain) => {
    setQueue([...queue, strain]);
  };

  const clearQueue = () => {
    setQueue([]);
  };

  const submitQueue = async (req, res) => {
    try {
      const { data } = await api.deleteStrains(queue);
      clearQueue();
      router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        {queue.length > 0 && (
          <Queue
            queue={queue}
            queueClear={clearQueue}
            queueSubmit={submitQueue}
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        {strains.length > 0 ? (
          strains.map((strain) => (
            <Strain
              strain={strain}
              key={strain.slug}
              queue={queue}
              queueDeletion={queueStrain}
              editStrain={editStrain}
            />
          ))
        ) : (
          <Typography variant="h6">No strains currently available.</Typography>
        )}
      </div>
    </>
  );
};

export default List;
