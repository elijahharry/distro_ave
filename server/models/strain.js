import mongoose from "mongoose";

const strainSchema = mongoose.Schema({
  strain: String,
  type: String,
  genetics: String,
  slug: String,
  images: Array,
  video: Object,
  structure: String,
  nose: String,
  color: String,
  frost: String,
  size: String,
  thc: {
    type: String,
    default: 0,
  },
  overall: String,
  growType: String,
  price: {
    type: String,
    default: 0,
  },
  weight: {
    type: String,
    default: 0,
  },
  yieldStart: {
    type: Date,
    default: new Date(0),
  },
  yieldFreq: {
    type: String,
    default: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
});

const StrainModel = mongoose.model("StrainModel", strainSchema);

export default StrainModel;
