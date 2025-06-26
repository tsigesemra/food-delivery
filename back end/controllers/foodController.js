import foodModel from "../models/foodModel.js";
import fs from 'fs'

//add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
  
    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename
    });
  
    try {
      await food.save();
      res.status(201).json({ message: "Food item added successfully", food });
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: "Failed to add food item", details: error });
    }
};

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

const removeFood = async (req, res) => {
    try {
        if (!req.body || !req.body.id) {
            return res.status(400).json({ success: false, message: "Food ID is required" });
        }

        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        // Delete the image file
        const imagePath = `uploads/${food.image}`;
        fs.unlink(imagePath, (err) => {
            if (err) console.log("Error deleting image:", err);
        });
   
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error removing food item", error: error.message });
    }
};

export { addFood, listFood, removeFood }