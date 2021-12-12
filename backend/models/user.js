const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.virtual("dishes", {
  ref: "Dish",
  localField: "_id",
  foreignField: "userId",
});

// Hide critical information
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();

  delete userObject.password;
  delete userObject.token;

  return userObject;
};

// Generate token
userSchema.methods.generateToken = async function () {
  const id = this._id.toString();
  const token = jwt.sign(
    { _id: id },
    "9E49C8459CC1FD44" /*{ expiresIn: "24h" }*/
  );

  this.tokens = this.tokens.concat({ token });
  await this.save();

  return token;
};

// Admit credentials
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
