import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://todoapp:mayurantodo@cluster0.mlur2qf.mongodb.net/');
    console.log("DB Connected");
}