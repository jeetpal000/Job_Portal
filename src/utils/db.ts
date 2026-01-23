import mongoose from "mongoose";
import 'dotenv/config'



export const CreateServer = async (): Promise<void>=>{
    try {
        const URI = process.env.MONGODB_URI as string;
        await mongoose.connect(URI)
        console.log("MongoDB Connected successfully")
    } catch (error) {
        console.error("MongoDB Connected successfully", error)
        process.exit(1)
    }
}