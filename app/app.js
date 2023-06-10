const express = require('express');
const ovwRouter = require('../router/ovwRouter');
const app = express();

app.get('/', (req, res, next)=>{
    res.status(200).json({message:"Service is up"})
});

app.use("/:key", ovwRouter);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method
        }
    })
})

module.exports = app;