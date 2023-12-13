// // src/api/auth.js
// import { MongoClient } from 'mongodb';
// import passport from 'passport';
// import LocalStrategy from 'passport-local';
// import bcrypt from 'bcrypt';

// const mongoCreds = {
//   username: import.meta.env.ASTRO_MONGODB_USERNAME,
//   password: import.meta.env.ASTRO_MONGODB_PASSWORD,
//   cluster: import.meta.env.ASTRO_MONGODB_CLUSTER,
//   database: import.meta.env.ASTRO_MONGODB_DATABASE,
// }

// const mongoURI = `mongodb+srv://${mongoCreds.username}:${mongoCreds.password}@${mongoCreds.cluster}.mongodb.net/${mongoCreds.database}`;

// // Initialize Passport.js
// passport.use(
//   new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
//     const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//       await client.connect();
//       const db = client.db();

//       // Check if the user exists
//       const user = await db.collection('users').findOne({ email: email });

//       if (!user) {
//         return done(null, false, { message: 'Incorrect email.' });
//       }

//       // Check if the password is correct
//       if (!bcrypt.compareSync(password, user.password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }

//       // Authentication successful
//       return done(null, user);
//     } catch (error) {
//       return done(error);
//     } finally {
//       await client.close();
//     }
//   })
// );

// passport.serializeUser((user, done) => {
//   done(null, user._id);
// });

// passport.deserializeUser(async (id, done) => {
//   const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     await client.connect();
//     const db = client.db();

//     const user = await db.collection('users').findOne({ _id: id });

//     if (!user) {
//       return done(null, false);
//     }

//     return done(null, user);
//   } catch (error) {
//     return done(error);
//   } finally {
//     await client.close();
//   }
// });

// export default async function handler(req, res) {
//   const { method } = req;

//   switch (method) {
//     case 'POST':
//       // Handle login or registration logic here
//       passport.authenticate('local', (err, user, info) => {
//         if (err) {
//           return res.status(500).json({ error: 'Internal Server Error' });
//         }
//         if (!user) {
//           return res.status(401).json({ error: info.message });
//         }

//         req.logIn(user, (loginErr) => {
//           if (loginErr) {
//             return res.status(500).json({ error: 'Internal Server Error' });
//           }

//           // User is authenticated, you can handle the response accordingly
//           return res.status(200).json({ message: 'Authentication successful', user });
//         });
//       })(req, res);
//       break;
//     default:
//       res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }
