const express = require("express");
const app = express();
// const session = require('express-session')
// app.use(session({
//      secret: process.env.GOOGLE_AUTH_SECRET,
//     saveUninitialized: true,
//     resave: false
// }))
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ejs = require('ejs')
require("dotenv").config();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.set('view engine', ejs)

const connectToDb = require("./config/db.js");
const authRouter = require("./routes/auth.routes.js");
const adminRouter = require("./routes/admin.routes.js");
// const passport = require("passport");
// app.use(passport.initialize())
// app.use(passport.session())
connectToDb();


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
app.use("/", adminRouter)
app.use('/test/google', (req, res) => {
    res.render('testAuthIndex.ejs')
})


// app.all('*',(req, res) => {
//     res.status(404).send('Oops !! 404 Page not found ')
// })

module.exports = app;
