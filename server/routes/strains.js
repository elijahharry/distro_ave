import express from "express";
import {
  getStrains,
  addStrain,
  getStrain,
  deleteStrains,
  updateStrain,
  toggleVisibility,
} from "../controllers/strains.js";
import { upload } from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, upload.array("images", 10), addStrain);
router.post("/delete", auth, deleteStrains);
router.post("/update", auth, updateStrain);
router.post("/visibility", auth, toggleVisibility);
router.get("/fetch", getStrains);
router.get("/fetch/:slug", getStrain);

export default router;
