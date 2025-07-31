import mongoose from "mongoose";
const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database connected"));
  await mongoose.connect(`${process.env.MONGODB_URI}/prescripto?retryWrites=true&w=majority&appName=Cluster0`);
};
export default connectDB;
