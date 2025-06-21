import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // in milliseconds
    httpOnly: true, // prevent XSS Cross site scripting attacks
    sameSite: true, // prevent CSRF Cross Site request forgery attacks
    secure: process.env.NODE_ENV !== "development", //https or http(s)
  });
};
