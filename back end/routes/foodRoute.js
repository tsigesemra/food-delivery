import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Set up storage configuration
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  }
});

// Create the multer upload instance
const upload = multer({ storage: storage });

// Route for handling file upload
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.post("/remove", removeFood);
foodRouter.get("/list", listFood);

export default foodRouter;
