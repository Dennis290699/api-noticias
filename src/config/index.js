import dotenv from "dotenv";
dotenv.config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "",
  NODE_ENV: process.env.NODE_ENV || "development"
};
