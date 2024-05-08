const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  CID: { type: String, unique: true },
  phoneNumber: { type: String },
  password: { type: String, required: true },
  portfolioLink: { type: String },
  address1: { type: String },
  address2: { type: String },
  organizationName: { type: String },
  role: {
    type: String,
    enum: ["client", "talent", "admin"],
    default: "client", 
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
