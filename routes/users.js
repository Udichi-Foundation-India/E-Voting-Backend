import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      phone: req.body.phone,
      password: req.body.password,
      aadharNumber: req.body.aadhar,
      voterNumber: req.body.voter,
    });

    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ voterNumber: req.body.voter });
    if (user) {
      if (req.body.password === user.password) {
        res.status(200).send(user);
      } else {
        res.status(401).send({ message: "Invalid Credentials!" });
      }
    } else {
      res.status(404).send({ message: "User Not Found!" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
