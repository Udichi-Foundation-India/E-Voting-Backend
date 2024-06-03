import express from "express";
import bodyParser from "body-parser";
import usersRoute from "./routes/users.js";
import votesRoute from "./routes/votes.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 5000;

const mongoDBURL =
  "mongodb+srv://soumyatarafder624:NWeuulW0TiNfXk8E@cluster0.ihgehff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

app.use(bodyParser.json());
app.use(cors());
app.use("/users", usersRoute);
app.use("/votes", votesRoute);
app.get("/", (req, res) => {
  res.send("Welcome to Home");
});
app.listen(port, () => {
  console.log("Server is Running");
});
