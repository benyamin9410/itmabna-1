import e from "express";
import helmet from "helmet";
import { limiter } from "../utils/rate-limit.js";

export default function configurationMiddleware(app) {
  app.use(e.json());
  app.use(helmet());
  app.use(limiter);
}
