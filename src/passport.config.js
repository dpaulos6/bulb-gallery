// import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';
// import User from './models/user';
// import argon2 from 'argon2';

// passport.use(
//   new LocalStrategy(async (username, password, done) => {
//     try {
//       const user = await User.findOne({ username: username });

//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }

//       const passwordMatch = await user.validatePassword(password);
//       if (!passwordMatch) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }

//       return done(null, user);
//     } catch (error) {
//       return done(error);
//     }
//   })
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

// export default passport;