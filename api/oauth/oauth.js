const { createStudent } = require('../controllers/stud_auth.js')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy

passport.use(new GoogleStrategy({
    clientID: process.env['GOOGLE_CLIENT_ID'],
    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    callbackURL: 'http://localhost:4000/api/auth/google/callback',
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        console.log(profile)
        const { given_name: name, email } = profile
        createStudent({ name, email })
        return done(null, profile)
    }
))

passport.serializeUser((user, done) => {
    return done(null, user)
})

passport.deserializeUser((user, done) => {
    return done(null, user)
})