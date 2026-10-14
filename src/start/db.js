import mongoose from "mongoose";
import config from "config"
import debug from "debug";


const log = debug("app:database")


export default async function ConnectToDb() {
  try {
    await mongoose.connect(config.get("database.address"));
    log("App Connected to DataBase")
  } catch (error) {
    console.error(error);
  }
}
