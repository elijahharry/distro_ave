import mongoose from "mongoose";
import StrainModel from "../models/strain.js";
import { generateThumbnails } from "../middleware/sharp.js";
import { deleteVideos, deleteImages } from "../middleware/fs.js";

export const getStrains = async (req, res) => {
  try {
    const allStrains = await StrainModel.find();
    res.status(200).json(allStrains);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getStrain = async (req, res) => {
  const { slug } = req.params;
  try {
    const foundStrain = await StrainModel.find({
      slug: slug,
    });
    console.log(foundStrain);
    res.status(200).json(foundStrain);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addStrain = async (req, res) => {
  const allFiles = req.files;
  const images = [];
  allFiles.map((file) => {
    if (file.mimetype === "image/jpeg") {
      images.push(file);
    } else if (file.mimetype === "image/jpg") {
      images.push(file);
    } else if (file.mimetype === "image/png") {
      images.push(file);
    } else {
      console.log("No image here.");
    }
  });
  let video = {};
  allFiles.map((file) => {
    if (file.mimetype === "video/mp4") {
      video = file;
    } else {
      console.log("No video here.");
    }
  });
  let strain = req.body;
  strain.images = images;
  strain.video = video;
  const added =
    parseFloat(strain.structure) +
    parseFloat(strain.nose) +
    parseFloat(strain.color) +
    parseFloat(strain.frost) +
    parseFloat(strain.size);
  strain.overall = added / 5;
  const newStrain = new StrainModel(strain);
  try {
    await newStrain.save();
    res.status(201).json(StrainModel);
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ message: error.message });
  }
  try {
    generateThumbnails(images);
  } catch (error) {
    console.log(error);
  }
};

export const deleteStrains = async (req, res) => {
  const strains = req.body;
  strains.forEach(async (strain) => {
    const id = strain._id;
    const images = strain.images;
    let video = undefined;
    strain.video ? (video = strain.video) : undefined;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No post with that ID.");
    } else {
      deleteImages(images);
      if (strain.video) {
        deleteVideos(strain.video);
      }
      await StrainModel.findByIdAndRemove(id);
      res.status(200).json({ message: "Strain deleted successfully." });
    }
  });
};

export const updateStrain = async (req, res) => {
  let strain = req.body;
  const id = strain._id;
  const added =
    parseFloat(strain.structure) +
    parseFloat(strain.nose) +
    parseFloat(strain.color) +
    parseFloat(strain.frost) +
    parseFloat(strain.size);
  strain.overall = added / 5;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that ID.");
  const updatedStrain = await StrainModel.findByIdAndUpdate(
    id,
    { ...strain, id },
    { new: true }
  );
  res.status(200).json({ message: "Strain updated." });
};

export const toggleVisibility = async (req, res) => {
  let strain = req.body;
  const id = strain._id;
  const hideStatus = !strain.hidden;
  strain.hidden = hideStatus;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that ID.");
  const updatedStrain = await StrainModel.findByIdAndUpdate(
    id,
    { ...strain, id },
    { new: true }
  );
  res.status(200).json({ message: "Strain successfully hidden/unhidden." });
};
