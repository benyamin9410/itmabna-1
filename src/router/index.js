import { Router } from "express";
import auth from "./auth/index.js";
import { SendOtpValidation } from "./auth/validation.js";
import validationData from "../middleware/validation.js";

const router = Router();

router.use(validationData);

router.use("/auth", SendOtpValidation, auth);

export default router;
