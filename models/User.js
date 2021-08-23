const { Schema, model } = require("../db/connection");
//User Schema
const UserSchema = new Schema({
  img: String,
  fullName: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  bookmarks: [],
});

const User = model("User", UserSchema);

module.exports = User;
