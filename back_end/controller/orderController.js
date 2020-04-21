const Order = require('../model/order');

exports.saveOrder = (req, res) => {
    const date = new Date();
    const newOrder = new Order({
        name: req.body.name,
        viands: req.body.orders,
        date: date
    });
    console.log(newOrder)
    newOrder.save((err, order) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err);
        }
        res.json(order)
    })
}

exports.RetrieveAllOrder = (req, res) => {
    Order.find({}, (err, orders) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ data: orders })
    })
}