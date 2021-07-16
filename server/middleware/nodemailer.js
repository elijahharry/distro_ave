import NodeMailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const loungeEmail = process.env.LOUNGE_EMAIL;
const loungePass = process.env.LOUNGE_PASS;

export const transporter = NodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: loungeEmail,
    pass: loungePass,
  },
});
