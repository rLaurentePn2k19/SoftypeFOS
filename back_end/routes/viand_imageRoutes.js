const express = require('express');
const app = express.Router();
const upload = require('../middlewares/multer').array('img', 6);
const adminController = require('../controller/adminController');


app.post('/addviand',(req, res) => {
    console.log(req.body)
    upload(req, res, (err) => {
        if (err) {
            return res.end("Error uploading file.");
        } else {
            var imgs = req.files
            if (!imgs || !imgs.length) {
                const error = new Error('Please upload a file')
                error.httpStatusCode = 400
                res.status(500).send(error);
            } else {
                adminController.saveViand(req, res)
                console.log(res)
            }
        }
    });
})

app.get('/retrieveall', (req, res) => {
    adminController.RetrieveAllViand(res);
    console.log(res)
})


module.exports = app;