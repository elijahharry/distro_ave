import { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";

import { backendImages } from "../../../../../../constants/backend";

import useStyles from "../styles";
import {
  Tabs,
  Tab,
  Avatar,
  Button,
  IconButton,
  Grid,
  GridList,
  Card,
  CardMedia,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { SRLWrapper, useLightbox } from "simple-react-lightbox";

const Images = ({ strain, images, video }) => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(true);

  const { openLightbox, closeLightbox } = useLightbox();
  const lightboxOptions = {
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
    },
  };

  let lightboxElements = [];
  images.forEach((image) =>
    lightboxElements.push({
      src: backendImages + image.src,
    })
  );

  const [height, setHeight] = useState("650px");
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
    images.length === 1 && setHeight("740px");
    images.length === 2 && setHeight("650px");
    images.length === 3 && setHeight("670px");
    images.length === 4 && setHeight("685px");
    images.length >= 5 && setHeight("700px");
  }, []);

  useEffect(() => {
    if (width <= 640) {
      setHeight("470px");
      setShowThumbnails(false);
    }
    if (images.length <= 1) {
      setShowThumbnails(false);
    }
  }, [width]);

  return (
    <SRLWrapper elements={lightboxElements} options={lightboxOptions}>
      <div>
        <SwipeableViews
          index={index}
          onChangeIndex={() => setIndex(index)}
          onSwitching={(f, t) => setIndex(f)}
          disableLazyLoading={true}
        >
          {images.map((image) =>
            image.type === "img" ? (
              <div
                className={classes.slideHolder}
                key={image.src + "-slide"}
                style={{ height: height }}
              >
                <div
                  className={classes.strainImages}
                  style={{
                    backgroundImage: `url("${backendImages}/thumbnails/xl/${image.src}")`,
                  }}
                >
                  {images.length > 1 && image === images[0] && (
                    <div className={classes.mobileInstruction}>
                      <ArrowBackIcon
                        className={`${classes.mobileSwipeArrow} slide2`}
                      />
                      <Typography
                        className={classes.mobileInstructionText}
                        variant="overline"
                      >
                        Swipe for more
                      </Typography>
                      <ArrowForwardIcon
                        className={`${classes.mobileSwipeArrow} slide1`}
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className={classes.slideHolder} key={image.src + "-slide"}>
                <Card
                  className={classes.strainVideo}
                  style={{ height: height }}
                >
                  <CardMedia
                    component="video"
                    image={backendImages + video}
                    title={strain}
                    loop
                    autoPlay
                    muted
                  />
                </Card>
              </div>
            )
          )}
        </SwipeableViews>

        <div className={classes.zoomHolder}>
          {index < images.length && (
            <IconButton onClick={() => openLightbox(index)}>
              <Typography
                align="center"
                className={classes.zoomText}
                variant="caption"
              >
                Zoom-in
              </Typography>
              <SearchIcon />
            </IconButton>
          )}
        </div>

        {showThumbnails && (
          <Grid container className={classes.thumbnailsHolder}>
            <Grid item xs={1} md={2}>
              <div className={classes.arrowHolder}>
                {index === 0 ? (
                  <IconButton className={classes.arrow} disabled>
                    <ArrowBackIosIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    className={classes.arrow}
                    onClick={() => setIndex(index - 1)}
                  >
                    <ArrowBackIosIcon className={classes.arrow} />
                  </IconButton>
                )}
              </div>
            </Grid>
            <Grid item xs={10} md={8}>
              <div className={classes.photoMenu}>
                <GridList
                  cellHeight={
                    (images.length === 2 && 120) ||
                    (images.length === 3 && 100) ||
                    (images.length === 4 && 80) ||
                    (images.length === 5 && 60) ||
                    (images.length >= 6 && 50)
                  }
                  cols={images.length}
                  elevation={1}
                >
                  {images.map((image) =>
                    image.type === "img" ? (
                      index === images.indexOf(image) ? (
                        <div
                          className={classes.singleThumbnailHolder}
                          key={image.src + "-thumbnail"}
                        >
                          <div
                            className={classes.thumbnailSelected}
                            style={{
                              backgroundImage: `url("${backendImages}/thumbnails/sm/${image.src}")`,
                            }}
                          />
                        </div>
                      ) : (
                        <div
                          className={classes.singleThumbnailHolder}
                          key={image.src + "-thumbnail"}
                        >
                          <div
                            className={classes.thumbnail}
                            onClick={() => setIndex(images.indexOf(image))}
                            style={{
                              backgroundImage: `url("${backendImages}/thumbnails/sm/${image.src}")`,
                            }}
                          />
                        </div>
                      )
                    ) : index === images.length - 1 ? (
                      <div
                        className={classes.singleThumbnailHolder}
                        key="video-thumbnail"
                      >
                        <div
                          className={classes.thumbnailSelected}
                          style={{
                            backgroundImage: `url("${backendImages}/thumbnails/sm/${images[0].src}")`,
                          }}
                        >
                          <DonutLargeIcon
                            className={`${classes.videoIcon} rotateThis`}
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        className={classes.singleThumbnailHolder}
                        key="video-thumbnail"
                      >
                        <div
                          className={classes.thumbnail}
                          onClick={() => setIndex(images.length - 1)}
                          style={{
                            backgroundImage: `url("${backendImages}/thumbnails/sm/${images[0].src}")`,
                          }}
                        >
                          <PlayCircleOutlineIcon
                            className={classes.videoIcon}
                          />
                        </div>
                      </div>
                    )
                  )}
                </GridList>
              </div>
            </Grid>
            <Grid item xs={1} md={2}>
              <div className={classes.arrowHolder}>
                {index === images.length - 1 ? (
                  <IconButton disabled>
                    <ArrowForwardIosIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    className={classes.arrow}
                    onClick={() => setIndex(index + 1)}
                  >
                    <ArrowForwardIosIcon className={classes.arrow} />
                  </IconButton>
                )}
              </div>
            </Grid>
          </Grid>
        )}
      </div>
    </SRLWrapper>
  );
};

export default Images;
