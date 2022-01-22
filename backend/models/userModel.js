const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// Generate JWT token
userSchema.methods.getJWTToken = () => {
  return jwt.sign({ id: this._id }, process.env.JWT_ACCESS_KEY);
};

// Compare hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return new Promise((res, rej) => {
    bcrypt.compare(enteredPassword, this.password, function (err, same) {
      if (err) {
        return rej(err);
      }
      return res(same);
    });
  });
};

module.exports = mongoose.model("User", userSchema);
