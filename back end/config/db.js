import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rebuni1995:NOFzGAwVk6RapIbZ@cluster-1.hidovfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1')
    .then(() => console.log('db connected'))
}

