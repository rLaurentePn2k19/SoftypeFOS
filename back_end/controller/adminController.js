const Viand = require('../model/viand');
const upload = require('../middlewares/multer');

exports.saveViand = (viand, res) => {
    viand.save((err, viand) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        console.log(viand);
        res.json(viand);
    });
}

exports.RetrieveAllViand = (res) => {
    Viand.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(data)
    })
}

exports.deleteViand = (req, res) => {
    Viand.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(data)
    })
}

// lacking update 

exports.updateViand = (req, res) => {
    console.log(req.body)
    // Viand.findByIdAndUpdate(req.body._id, { image: req.body.image, name: req.body.name }, (err, data) => {
    //     if (err) {
    //         res.status(500).send(err);
    //     }
    //     res.json(data)
    // })
}


