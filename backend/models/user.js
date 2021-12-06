const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Compare credentials
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Email doesn't match");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Password doesn't match");

  return user;
};

// Hashing
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
