
const app = require('./app.js')
const PORT = process.env.API_PORT || 8001;

import express from "express";

const app = express()

app.get("/ping", (req, res) => {
    res.status(200).send({msg: "server is running fine", metaInfo: {
        host: req.hostname,
        protocol: req.protocol,
        headers: req.headers
    }})
})

app.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT} `);
})