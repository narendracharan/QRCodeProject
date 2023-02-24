const userSchema = require("../models/userSchema");
const qrcode = require("qrcode");
const path=require("path")

const genrateQur = async (req, res) => {
  const user = new userSchema(req.body);
  try {
    const json = JSON.stringify(user);
    qrcode.toFile(path.join(__dirname,"qr7.png"),json, (err, code) => {
      if(err) return console.log(err);
      
    });
    await user.save();
    res.status(200).json({
      status: "Success",
      message: "Generated QrCode",  
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports = {
  genrateQur,
};
