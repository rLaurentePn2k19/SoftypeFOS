const Order = require('../model/order');

exports.saveOrder = (req, res) => {
    req.save((err, req) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        console.log(req);
        res.json(req);
    });
}

exports.RetrieveAllOrder = (res) => {
    Order.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(data)
    })
}