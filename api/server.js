import express from "express";

const app = express()


app.get("/ping", (req, res) => {
    res.status(200).send({msg: "server is running fine", metaInfo: {
        host: req.hostname,
        protocol: req.protocol,
        headers: req.headers
    }})
})