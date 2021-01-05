const express = require("express")
const goldRouter = express.Router()
const Gold = require("../models/gold.js")

goldRouter.get("/", (req, res, next) => {
    Gold.find((err, goldChains) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(goldChains)
    })
})

module.exports = goldRouter