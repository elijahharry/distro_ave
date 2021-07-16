import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials." });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ info: existingUser, token: token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong..." });
  }
};

export const signup = async (req, res) => {
  console.log(req.body.secret);
  const secret = process.env.SECRET_KEY;
  if (req.body.secret === secret) {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists." });
      }
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords don't match" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const result = await User.json({
        email,
        password: hashedPassword,
        name: `${firstName} ${lastName}`,
      });
      const token = jwt.sign(
        { email: result.email, id: result._id },
        process.env.SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      console.log("added");
      res.status(200).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong..." });
    }
  } else {
    console.log("Someone tried to create a user without a valid key.");
  }
};
