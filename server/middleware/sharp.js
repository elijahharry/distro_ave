import sharp from "sharp";

export const generateThumbnails = async (images) => {
  images.map(async (image) => {
    await sharp(`images/${image.filename}`)
      .withMetadata()
      .resize({
        fit: sharp.fit.contain,
        width: 900,
      })
      .toFile(`images/thumbnails/xl/${image.filename}`);
    await sharp(`images/${image.filename}`)
      .withMetadata()
      .resize({
        fit: sharp.fit.contain,
        width: 500,
      })
      .toFile(`images/thumbnails/lg/${image.filename}`);
    await sharp(`images/${image.filename}`)
      .withMetadata()
      .resize({
        fit: sharp.fit.contain,
        width: 150,
      })
      .toFile(`images/thumbnails/sm/${image.filename}`);
  });
};
