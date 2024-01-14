// import passport from '../passport-config';
// import { connectToDatabase } from '../utils/db';

// // Configure Passport
// import '../src/passport.config.js';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     // Connect to the database
//     await connectToDatabase();

//     passport.authenticate('local', async (err, user, info) => {
//       if (err) return res.status(500).json({ message: 'Internal Server Error' });
//       if (!user) return res.status(401).json({ message: 'Invalid credentials' });

//       req.logIn(user, (err) => {
//         if (err) return res.status(500).json({ message: 'Internal Server Error' });

//         // You can customize the response based on successful login
//         return res.status(200).json({ message: 'Login successful', user });
//       });
//     })(req, res);
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
