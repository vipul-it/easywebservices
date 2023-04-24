import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const otherSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const  postOther =  mongoose.model('other', otherSchema)

export default postOther;