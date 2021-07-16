import { useState, useEffect } from "react";
import Link from "next/link";

import { backendImages } from "../../../../../../constants/backend";
import { menu } from "../../../../../../constants/frontend";
import useStyles from "./styles";

import { CardMedia, Badge, Typography, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import SearchIcon from "@material-ui/icons/Search";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const Media = ({ strain }) => {
  const multiImage = strain.images.length > 1;
  const images = strain.images.map((image) => image.filename);
  const video = strain.video ? true : false;

  const classes = useStyles();
  const [activePhoto, setActivePhoto] = useState(images[0]);
  const [imageId, setImageId] = useState(0);

  useEffect(() => {
    setActivePhoto(images[imageId]);
  }, [imageId]);

  return (
    <>
      <CardMedia
        className={classes.media}
        image={backendImages + activePhoto}
        title={strain.strain}
        key={activePhoto}
      >
        <div className={classes.backgroundGradient}>
          <div
            className={classes.photoContentHolder}
            key={"imageNav" + imageId}
          >
            {multiImage && (
              <div className={classes.arrowHolder}>
                {imageId === 0 ? (
                  <IconButton size="medium" disabled>
                    <ArrowBackIosIcon className={classes.arrowOff} />
                  </IconButton>
                ) : (
                  <IconButton
                    size="medium"
                    onClick={() => setImageId(imageId - 1)}
                  >
                    <ArrowBackIosIcon className={classes.arrow} />
                  </IconButton>
                )}
                {imageId === images.length - 1 ? (
                  <IconButton size="medium" disabled>
                    <ArrowForwardIosIcon className={classes.arrowOff} />
                  </IconButton>
                ) : (
                  <IconButton
                    size="medium"
                    onClick={() => setImageId(imageId + 1)}
                  >
                    <ArrowForwardIosIcon className={classes.arrow} />
                  </IconButton>
                )}
              </div>
            )}
            <div className={classes.bottomHolder}>
              <a href={`${menu}${strain.slug}`}>
                <Badge
                  className={classes.cameraCount}
                  classes={{ badge: classes.cameraBadge }}
                  badgeContent={images.length}
                  color="primary"
                  overlap="circle"
                >
                  <CameraAltIcon className={classes.camera} />
                </Badge>
                {video && (
                  <Badge
                    className={classes.cameraCount}
                    classes={{ badge: classes.cameraBadge }}
                    badgeContent={1}
                    color="secondary"
                    overlap="circle"
                  >
                    <PlayCircleFilledIcon className={classes.video} />
                  </Badge>
                )}
              </a>
              <a href={`${menu}${strain.slug}`}>
                <SearchIcon className={classes.magnify} />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.preloadImages}>
          {images.map((image) => {
            return (
              <img
                src={backendImages + image}
                key={"prerender-" + image}
                height="0"
                width="0"
              />
            );
          })}
        </div>
      </CardMedia>
    </>
  );
};

export default Media;
