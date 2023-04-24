import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
  
  e_username: { type: String, required: true },
  e_fname: { type: String, required: true },
  e_lname: { type: String, required: true },
  e_email: { type: String, required: true },
  e_mobile: { type: Number, required: true },
  e_companyName: { type: String, required: true },
  e_roleType: { type: String, required: true },
});

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model("user", userSchema);

export default postUser;
