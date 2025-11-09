const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  community: {
    type: String,
    required: true,
  },
});

// The plugin will automatically add fields for 'username' and a hashed 'password'.
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);
module.exports = User;
