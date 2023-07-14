const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(cookieParser());
app.use(express.json());
app.use(cors());


const connectToDb = require("./config/db.js");
const authRouter = require("./routes/auth.routes.js");
connectToDb();



app.use("/api/auth", authRouter);

 app.use("/", (req, res) => {
     res.status(200).json({
         data: "all good",
     });
 });



module.exports = app;
