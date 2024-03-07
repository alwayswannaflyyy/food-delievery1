import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bezsama0817:Fake99280519@javhlann.h90yfyn.mongodb.net/food-delivery"
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};