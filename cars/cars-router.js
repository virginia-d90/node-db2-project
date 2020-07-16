const express = require("express")
const db = require("../data/connection")
const router = express.Router()

//POST
router.post('/', (req, res) => {
    const newCar = req.body

    db("cars")
        .insert(newCar, "id")
        .then(ids => {
            db("cars")
                .where({id:ids[0]}) 
                .first()
                .then(car => {
                    res.status(200).json({data: car})
                })
        })
        .catch(err => {
            res.status(500).json({message: "could not post account"})
        })
})

//GET
router.get('/', (req, res) => {
    db("cars")
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(500).json({message: "there was an error retrieving cars", error: err.message})
        })
})


module.exports = router