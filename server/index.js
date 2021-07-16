import express from "express";

import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import * as path from "path";

const app = express();
dotenv.config();

import strainRoutes from "./routes/strains.js";
import contactRoutes from "./routes/contact.js";
import userRoutes from "./routes/user.js";

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const __dirname = path.resolve(path.dirname(""));

app.use("/images", express.static(__dirname + "/images"));
app.use("/strains", strainRoutes);
app.use("/contact", contactRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
