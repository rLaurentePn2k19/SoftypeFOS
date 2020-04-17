
const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');


router.post("/addOrder", orderController.saveOrder);

router.get("/retrieveOrders", orderController.RetrieveAllOrder);


module.exports = router;

