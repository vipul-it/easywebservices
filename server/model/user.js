import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },

  username: { type: String, required: true },
  f_name: { type: String, required: true },
  l_name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  company: { type: String, required: true },
  role: { type: String, required: true },
});

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model("user", userSchema);

export default postUser;
