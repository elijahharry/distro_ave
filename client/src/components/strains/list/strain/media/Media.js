import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
        title={strain.strain}
        key={activePhoto}
      >
        <Image
          src={`${backendImages}thumbnails/lg/${activePhoto}`}
          layout="fill"
          objectFit="cover"
          className={classes.nextImage}
          placeholder="blur"
          blurDataURL="data:[<mediatype>][;base64],<UklGRmwDAABXRUJQVlA4WAoAAAAwAAAACQAADAAASUNDUKACAAAAAAKgbGNtcwQwAABtbnRyUkdCIFhZWiAH5QAGABwAFAAKADJhY3NwTVNGVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1kZXNjAAABIAAAAEBjcHJ0AAABYAAAADZ3dHB0AAABmAAAABRjaGFkAAABrAAAACxyWFlaAAAB2AAAABRiWFlaAAAB7AAAABRnWFlaAAACAAAAABRyVFJDAAACFAAAACBnVFJDAAACFAAAACBiVFJDAAACFAAAACBjaHJtAAACNAAAACRkbW5kAAACWAAAACRkbWRkAAACfAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACQAAAAcAEcASQBNAFAAIABiAHUAaQBsAHQALQBpAG4AIABzAFIARwBCbWx1YwAAAAAAAAABAAAADGVuVVMAAAAaAAAAHABQAHUAYgBsAGkAYwAgAEQAbwBtAGEAaQBuAABYWVogAAAAAAAA9tYAAQAAAADTLXNmMzIAAAAAAAEMQgAABd7///MlAAAHkwAA/ZD///uh///9ogAAA9wAAMBuWFlaIAAAAAAAAG+gAAA49QAAA5BYWVogAAAAAAAAJJ8AAA+EAAC2xFhZWiAAAAAAAABilwAAt4cAABjZcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltjaHJtAAAAAAADAAAAAKPXAABUfAAATM0AAJmaAAAmZwAAD1xtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAEcASQBNAFBtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJBTFBIEwAAAAEgEiBhKP9vmLTZI2ICGE31AyMAVlA4IIoAAABQAgCdASoKAA0AAMASJQBOgMUAyaI1BsRyfAAA/vZ/8wbPcW/xihzICBBmr+QGBhv3/EY2JhonUhnS0UP62uuduSncs74kOPouME/xzmsot56b8x8MvpfW4v/3X76SKot93nWUxdGQ/k/aIMueqMfEUVPgWB/PpoBpNRPfp3y2T4xdFVICzbtAAAA=>"
        />
        {multiImage &&
          (imageId === 0 ? (
            <IconButton
              className={classes.arrowLeft}
              size="medium"
              style={{ opacity: 0.8, cursor: "default" }}
            >
              <ArrowBackIosIcon className={classes.arrowOff} />
            </IconButton>
          ) : (
            <IconButton
              variant="contained"
              className={classes.arrowLeft}
              size="medium"
              onClick={() => setImageId(imageId - 1)}
            >
              <ArrowBackIosIcon className={classes.arrow} />
            </IconButton>
          ))}
        {multiImage &&
          (imageId === images.length - 1 ? (
            <IconButton
              className={classes.arrowRight}
              size="medium"
              style={{ opacity: ".7", cursor: "default" }}
            >
              <ArrowForwardIosIcon className={classes.arrowOff} />
            </IconButton>
          ) : (
            <IconButton
              className={classes.arrowRight}
              size="medium"
              onClick={() => setImageId(imageId + 1)}
            >
              <ArrowForwardIosIcon className={classes.arrow} />
            </IconButton>
          ))}
        <Link href={`${menu}${strain.slug}`}>
          <div className={classes.backgroundGradient}>
            <div
              className={classes.photoContentHolder}
              key={"imageNav" + imageId}
            >
              <div className={classes.bottomHolder}>
                <Link href={`${menu}${strain.slug}`}>
                  <div>
                    <Badge
                      className={classes.cameraCount}
                      classes={{ badge: classes.cameraBadge }}
                      badgeContent={
                        <span style={{ color: "#FFF" }}>{images.length}</span>
                      }
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
                  </div>
                </Link>
                <Link href={`${menu}${strain.slug}`}>
                  <SearchIcon className={classes.magnify} />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </CardMedia>
    </>
  );
};

export default Media;
