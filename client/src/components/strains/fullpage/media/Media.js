import Crumbs from "../info/crumbs/Crumbs";
import Images from "./images/Images";

import useStyles from "./styles";

const Media = ({ strain }) => {
  const classes = useStyles();

  const images = strain.images.map((image) => ({
    src: image.filename,
    type: "img",
  }));
  const video = strain.video ? strain.video.filename : null;
  video &&
    images.push({
      src: video,
      type: "video",
    });

  return (
    <>
      <div className={classes.crumbs}>
        <Crumbs showLounge={false} strain={strain} />
      </div>
      <Images strain={strain.strain} images={images} video={video} />
    </>
  );
};

export default Media;
