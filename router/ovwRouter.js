const express = require('express');
const ovwRouter = express.Router();

const { ovwService, ovwHeroes} = require("../services/ovwService")

ovwRouter.get("/", (req,res,next) => {
    ovwService().then(result => {
        res.status(200).json(result.data)
    }).catch((err) => {
        res.status(500).json({
            error:{
                message: err.message,
            },
        });
    });
});

ovwRouter.get('/:key', (req, res, next)=>{
ovwHeroes(req.params.key)
.then((result)=>{
    res.status(200).json(result.data);
})
.catch(err => {
    res.status(500).json({
        error:{
            message: err.message,
        }
    })
})
})



module.exports = ovwRouter