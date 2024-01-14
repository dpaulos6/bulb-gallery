// import mongoose from 'mongoose';
// import argon2 from 'argon2';

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   email: String,
//   fname: String,
//   lname: String,
// });

// // Add a method to set and hash the password
// userSchema.methods.setPassword = async function (password) {
//   this.password = await argon2.hash(password);
// };

// // Add a method to verify the password
// userSchema.methods.validatePassword = async function (password) {
//   return await argon2.verify(this.password, password);
// };

// const User = mongoose.model('User', userSchema);

// export default User;