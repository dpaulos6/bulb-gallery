// // Import necessary modules
// import { connectToDatabase } from '../utils/db';
// import User from '../models/user';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { username, password, rePassword, email, fname, lname } = req.body;

//     // Check if passwords match
//     if (password !== rePassword) {
//       return res.status(400).json({ message: 'Passwords do not match.' });
//     }

//     // Connect to the database
//     await connectToDatabase();

//     // Check if the user already exists
//     const existingUser = await User.findOne({ username });

//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists.' });
//     }

//     // Create a new user and hash the password
//     const newUser = new User({
//       username,
//       email,
//       fname,
//       lname,
//     });

//     await newUser.setPassword(password);
//     await newUser.save();

//     return res.status(201).json({ message: 'User registered successfully.' });
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
