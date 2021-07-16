import { GridList, GridListTile } from "@material-ui/core";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import useStyles from "./styles";

const Gallery = () => {
  const classes = useStyles();
  const { openLightbox, closeLightbox } = useLightbox();
  const lightboxOptions = {
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
    },
  };
  return (
    <SRLWrapper options={lightboxOptions}>
      <GridList className={classes.grid} cellHeight={220} cols={6} spacing={5}>
        <GridListTile cols={2}>
          <img
            onClick={() => openLightbox(0)}
            src="/images/gallery1.jpg"
            className={classes.img}
            loading="lazy"
          />
        </GridListTile>
        <GridListTile cols={3}>
          <img
            onClick={() => openLightbox(1)}
            src="/images/gallery7.jpg"
            className={classes.img}
            loading="lazy"
          />
        </GridListTile>
        <GridListTile cols={1}>
          <img
            onClick={() => openLightbox(2)}
            src="/images/gallery2.jpg"
            className={classes.img}
            loading="lazy"
          />
        </GridListTile>
        <GridListTile cols={1}>
          <img
            onClick={() => openLightbox(3)}
            src="/images/gallery4.jpg"
            className={classes.img}
            loading="lazy"
          />
        </GridListTile>
        <GridListTile cols={3}>
          <img
            onClick={() => openLightbox(4)}
            src="/images/gallery5.jpg"
            className={classes.img}
            loading="lazy"
          />
        </GridListTile>
        <GridListTile cols={2}>
          <img
            onClick={() => openLightbox(5)}
            src="/images/gallery6.jpg"
            className={classes.img}
            loading="lazy"
          />
        </GridListTile>
      </GridList>
    </SRLWrapper>
  );
};

export default Gallery;
