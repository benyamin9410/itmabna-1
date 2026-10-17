import { Otp } from "../../models/otp.js";
import { User } from "../../models/user.js";
import generateOtp from "../../utils/generateOtp.js";
import GenerateJwt from "../../utils/generateJwt.js";

export default new (class {
  async sendOtp(req, res) {
    const { phone } = req.body;

    const exists = await User.findOne({ phone: phone });
    if (!exists) await User.create({ phone });

    const otp = await generateOtp(phone);
    if (!otp) res.status(401).send("Acces denied , pleas wait!!!");
    return res.json({
      msg: "Otp sent",
      code: otp,
    });
  }

  async verifyOtp(req, res) {
    const { phone, code } = req.body;
    const exists = await Otp.findOne({ key:phone });
    console.log(exists)
    if (!exists) res.status(400).send("Invalid Code!!!");
    console.log(1)
    await exists.deleteOne();
    console.log(2)
    const token = await GenerateJwt(phone);
    return res.json({
      msg: "Otp Verified",
      token: token,
    });
  }
})();
