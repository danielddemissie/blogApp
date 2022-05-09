const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required!."],
      unique: [true, "username already exist"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: [true, "email shoulbe uniqe"],
    },
    photo: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 24,
      trim: true,
    },
    role: {
      type: String,
      required: [true, "role is required"],
    },
  },
  { timestamps: true }
);

const User = model("Users", userSchema);
module.exports = User;
