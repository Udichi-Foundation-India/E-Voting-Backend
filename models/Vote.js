import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  party: String,
  candidate: String,
  electionType: String,
  date: { type: Date, default: Date.now },
});

const Vote = mongoose.model("Vote", voteSchema);

export default Vote;
