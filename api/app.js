require("dotenv").config();
const express = require("express");
const app = express();
const session = require('express-session')
app.use(session({
  secret: process.env.GOOGLE_AUTH_SECRET,
  saveUninitialized: true,
  resave: false
}))
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/db.js");
const ejs = require('ejs')
const authRouter = require("./routes/authRouter.js");
const teacherRouter = require("./routes/teacherRouter.js");
const googleAuthRouter = require("./routes/googleAuthRouter.js")
const passport = require("passport");
app.use(passport.initialize())
app.use(passport.session())
connectToDb();


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.set('view engine', ejs)
app.use("/ping", (req, res) => {
  res.status(200).send({
    msg: "server is running fine", metaInfo: {
      host: req.hostname,
      protocol: req.protocol,
      headers: req.headers
    }
  })
})

app.use("/", authRouter);
app.use("/", teacherRouter)
app.use("/", googleAuthRouter)
app.use('/test/google', (req, res) => {
  res.render('testAuthIndex.ejs')
})


// app.all('*',(req, res) => {
//     res.status(404).send('Oops !! 404 Page not found ')
// })

module.exports = app;
