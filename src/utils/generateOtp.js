import { Otp } from "../models/otp.js";

export default async function generateOtp(phone) {
  const otp = Math.floor(Math.random() * 99999);
  const key = `${phone}`;
  const exists = await Otp.findOne({ key: key });
  console.log(key)
  if (exists) return;
  await Otp.create({ key, code: otp });
  return otp;
}
