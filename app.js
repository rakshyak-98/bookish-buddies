const express = require("express");
const { exec } = require("child_process");
const mongoose = require("mongoose");
const {authenticate} = require("./middlewares/auth")
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/bookish-buddies");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(require("helmet")());
app.use(require("cors")());

app.get("/hello", (_, res) => {
	res.status(200).send({ message: "Hello world" });
});

exec("docker start mongodb");

app.use("/", require("./routers/authRoutes"));
app.use("/teacher", require("./routers/teacherRoutes"));
app.use("/slot", require("./routers/slotRoutes"));

app.listen(port, () => {
	console.log(`Started express server on port ${port}`);
});

