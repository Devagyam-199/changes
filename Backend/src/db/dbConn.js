import mongoose from "mongoose"
const dbConnection = async () => {
  try {
    const connector = await mongoose.connect(process.env.MONGOCONNURL);
    console.log("db connected successfully");
    console.log(connector.connection.host);
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
