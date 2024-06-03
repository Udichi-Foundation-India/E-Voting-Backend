import express from "express";
import Vote from "../models/Vote.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newVote = new Vote(req.body);
    const savedVote = await newVote.save();
    res.status(201).send(savedVote);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
