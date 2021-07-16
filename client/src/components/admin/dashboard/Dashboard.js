import { useState, useEffect } from "react";
import * as api from "../../../../pages/api/strains/index";

import Add from "./strains/add/Add";
import List from "./strains/list/List";
import SignUp from "../auth/SignUp";

import {
  Typography,
  Container,
  Grid,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import Hero from "../../hero/Hero";
import Update from "./strains/update/Update";
import Image from "./strains/update/Image";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import BackendHero from "../../hero/BackendHero";

const Dashboard = ({ admin }) => {
  const [strains, setStrains] = useState();
  const [strain, setStrain] = useState();

  const editStrain = (strain) => {
    setStrain(strain);
  };

  const clearStrain = () => {
    setStrain();
  };

  const getStrains = async (req, res) => {
    try {
      const { data } = await api.fetchStrains();
      setStrains(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStrains();
  }, []);

  return (
    <>
      <div
        className="grey"
        style={{ paddingBottom: "50px", paddingTop: "30px" }}
      >
        <Container maxWidth="lg">
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
            {strain ? (
              <BackendHero
                height="200"
                title={`Editing ${strain.strain}`}
                sub={`Welcome, ${admin.info.name}.`}
                image={strain.images[0].filename}
              />
            ) : (
              <Hero
                height="250"
                title="Admin Dashboard"
                sub={`Welcome, ${admin.info.name}.`}
                image="menu2.jpg"
                logo="admin.png"
              />
            )}
          </div>

          <Grid item xs={12} md={12}>
            {strain ? (
              <>
                <Grid
                  container
                  style={{ marginBottom: "20px" }}
                  spacing={3}
                  justify="center"
                  align="stretch"
                >
                  <Grid item xs={12} align="center">
                    <IconButton onClick={clearStrain}>
                      <ArrowBackIcon style={{ marginRight: "10px" }} />
                      <Typography variant="h6">Back to main menu.</Typography>
                    </IconButton>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Image strain={strain} />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Update strain={strain} cancel={clearStrain} />
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                <Grid
                  container
                  justify="center"
                  align="stretch"
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    marginBottom: "20px",
                    marginTop: "-40px",
                  }}
                >
                  <Grid item xs={12} md={12}>
                    {strains ? (
                      <List editStrain={editStrain} strains={strains} />
                    ) : (
                      <CircularProgress />
                    )}
                  </Grid>
                </Grid>
                <Grid container justify="center" align="flex-start">
                  <Grid item xs={12} md={4}>
                    <SignUp />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Add />
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
