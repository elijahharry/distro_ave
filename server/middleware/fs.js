import fs from "fs";

export const deleteImages = (images) => {
  images.forEach((image) => {
    const filename = image.filename;
    fs.unlink(`./images/${filename}`, (err) => {
      if (err) {
        console.error(err);
      }
    });
    fs.unlink(`./images/thumbnails/xl/${filename}`, (err) => {
      if (err) {
        console.error(err);
      }
    });
    fs.unlink(`./images/thumbnails/lg/${filename}`, (err) => {
      if (err) {
        console.error(err);
      }
    });
    fs.unlink(`./images/thumbnails/sm/${filename}`, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
};

export const deleteVideos = (video) => {
  const filename = video.filename;
  fs.unlink(`./images/${filename}`, (err) => {
    if (err) {
      console.error(err);
    }
  });
};
