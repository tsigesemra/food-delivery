import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// simple route
app.get("/", (req, res) => {
  res.send("Hello, Express with CORS!");
});

//db connection

connectDB();

//api end points

app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'))

// start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
