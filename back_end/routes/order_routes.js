
const express = require('express');
const app = express.Router();
const orderController = require('../controller/orderController');
// const Order = require('../model/order');


// app.route("/addOrder").post(upload.single("img"), (req, res) => {
//     console.log(req.file)
//     let viand = JSON.parse(req.body.viand);
//     var imgUrl = `http://localhost:4000/files/`

//     const create_viand = new Viand({
//         image: imgUrl + req.file.filename,
//         name: viand.name,
//     });
//     adminController.saveViand(create_viand, res)
// })

app.route("/addOrder").post((req, res) => {
    
    console.log(req.body)

    let order = JSON.parse(req.body.order);

    orderController.saveOrder(req, res)

})

app.get('/retrieveOrders', (req, res) => {
    adminController.RetrieveAllViand(res);
    console.log(res)
})


module.exports = app;

