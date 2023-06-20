import mongoose from "mongoose";

const connect = async ()=>{
  //connecting mongo with application
    try {
        await mongoose.connect(process.env.MONGO);
      } catch (error) {
        throw new Error("connection failed");
      }
};

export default connect;