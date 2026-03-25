import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.UPI_MOOGODB);
        console.log("Mongo Connect!!!!!");
    } catch (error) {
        console.log(error);  
    }
}