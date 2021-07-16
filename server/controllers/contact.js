import dotenv from "dotenv";
import { transporter } from "../middleware/nodemailer.js";
dotenv.config();
const loungeEmail = process.env.LOUNGE_EMAIL;

export const sendBuyersContact = async (req, res) => {
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const company = req.body.company;
  const license = req.body.license;
  const phone = req.body.phone;
  const city = req.body.city;
  const email = req.body.email;
  const origin = req.body.origin;
  const strainsArray = req.body.strains;
  let strains = "";
  if (strainsArray === []) {
    strains = "";
  } else if (strainsArray === 1) {
    return strainsArray[0];
  } else {
    strainsArray.map((strain) => `${strain}... `);
  }

  const html =
    origin === "buyers"
      ? `<h2>New Buyer's Lounge Contact Request</h2><h3>Name</h3><p>${firstName} ${lastName}</p><h3>Company</h3><p>${company}</p><h3>License #</h3><p>${license}</p><h3>Phone</h3><p>${phone}<h3>Email</h3><p>${email}</p><h3>City</h3><p>${city}</p>${
          strains === ""
            ? "<h3>No strain selections made.</h3>"
            : `<h3>Interested in</h3><p>${strains}</p>`
        }`
      : `<h2>New Contact Request</h2><h3>Name</h3><p>${firstName} ${lastName}</p><h3>Company</h3><p>${company}</p><h3>Phone</h3><p>${phone}<h3>Email</h3><p>${email}</p><h3>City</h3><p>${city}</p>`;

  const senderName = origin === "buyers" ? "Buyer's Lounge" : "DistroAve.com";
  const mailOptions = {
    from: `${senderName} <${loungeEmail}>`,
    to: "og@distro-ave.com, elijah@outbounded.com",
    subject: "",
    text: `${firstName} ${lastName} from ${company} - ${phone} - ${email}`,
    html: html,
  };

  mailOptions.subject =
    origin === "buyers"
      ? `New Buyer's Lounge Request from ${firstName} ${lastName} (${company})`
      : `New Contact Form Request from ${firstName} ${lastName} (${company})`;

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(404).send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("success");
    }
  });
};
