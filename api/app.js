const express = require("express");
const session = require('express-session')
const app = express();
app.use(session({
    secret: 'chut',
    saveUninitialized: true,
    resave: false
}))
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
const passport = require("passport");
app.use(passport.initialize())
app.use(passport.session())
const adminRouter = require("./routes/admin.routes.js");
connectToDb();



app.use("/api/auth", authRouter);
app.use('/test/google', (req, res) => {
    res.render('testAuthIndex.ejs')
})
app.use("/admin", adminRouter)
app.use("/", (req, res) => {
     res.status(200).json({
         data: "all good",
     });
 });




module.exports = app;
