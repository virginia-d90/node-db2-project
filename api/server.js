const express = require("express")

const carsRouter = require("../cars/cars-router.js")

const db = require("../data/connection")

const server = express()

server.use(express.json())

server.use("/api/cars", carsRouter)

server.get("/api/cars", (req, res) => {
    db("cars")
        .then(cars => {
           res.status(200).json({data: cars}) 
        })
        .catch(err => {
            res.status(500).json({error:error.message})
        })
})

module.exports = server