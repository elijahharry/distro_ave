import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      let decodedData;
      if (token) {
        decodedData = jwt.verify(token, process.env.SECRET_KEY);
      }
      next();
    } else {
      console.log("Someone made a database update request without auth.");
    }
  } catch (error) {
    console.log(error);
  }
};

export default auth;
