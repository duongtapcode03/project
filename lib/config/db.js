import mongoose from 'mongoose';

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://duongqx2409:Ioncanxi2k3@cluster0.ipknyzz.mongodb.net/')
    console.log("DB Connected")
}