import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://solara:solara12345678@cluster0.9h9ptwu.mongodb.net/FOOD-DELIVERY')
    .then(() => console.log('db connected'))
}