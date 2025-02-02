import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aniketypandit99:K40t9sEJTY4vshMv@e-commerce-project.sqtnv.mongodb.net/",
      {
        dbName: "MERN_E-Commerce",
      }
    );
    console.log("Mongodb is connected successfully");
  } catch (error) {
    console.error(error);
  }
};
export default connectDb;