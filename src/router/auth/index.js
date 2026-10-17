import { Router } from "express";
import controller from "./controller.js";
import { SendOtpValidation, verifyCodeValidation } from "./validation.js";

const auth = Router();

auth.post("/send-otp", SendOtpValidation, controller.sendOtp);
auth.post("/verify-otp", verifyCodeValidation, controller.verifyOtp);

export default auth;
