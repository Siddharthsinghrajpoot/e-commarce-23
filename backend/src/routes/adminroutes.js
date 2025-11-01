import express from "express";
import jwt from "jsonwebtoken";

const adminroutes = express.Router();

adminroutes.post("/get", (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign({ password }, process.env.jwt_secret);
      return res.status(200).json({  token });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default adminroutes;
