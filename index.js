import e from "express";
import config from "config";
import ConnectToDb from "./src/start/db.js";
import configurationMiddleware from "./src/start/config.js";

const app = e();
const port = config.get("port");

configurationMiddleware(app)
ConnectToDb()


app.listen(port, () => console.log(`app running on port ${port}`));
