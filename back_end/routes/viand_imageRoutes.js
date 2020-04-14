const express = require('express');
const app = express.Router();
const upload = require('../middlewares/multer');
const adminController = require('../controller/adminController');
const Viand = require('../model/viand');


app.route("/addViand").post(upload.single("img"), (req, res) => {
    console.log(req.file)
    let viand = JSON.parse(req.body.viand);
    var imgUrl = `http://localhost:4000/files/`

    const create_viand = new Viand({
        image: imgUrl + req.file.filename,
        name: viand.name,
    });
    adminController.saveViand(create_viand, res)
})

app.get('/retrieveViands', (req, res) => {
    adminController.RetrieveAllViand(res);
    console.log(res)
})

// app.route("/retrieveall").get(req, res => {
//     adminController.RetrieveAllViand(res);
//     console.log(res)
// })

module.exports = app;

