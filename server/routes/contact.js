import express from "express";
import { sendBuyersContact } from "../controllers/contact.js";

const router = express.Router();

router.post("/buyers", sendBuyersContact);

export default router;
