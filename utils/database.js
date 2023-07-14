import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is Alread Connected");
    retrun;
  }

  try {
    mongoose.connect(process.env.MONGODB_URL, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB is Connected");
  } catch (error) {
    console.log(error);
  }
};
