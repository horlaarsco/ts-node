import mongoose from "mongoose";
import { MONGO } from "./configs";

mongoose
  .connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    return console.log(`Successfully connected to database`);
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
  });

let db = mongoose.connection;

export default db;
