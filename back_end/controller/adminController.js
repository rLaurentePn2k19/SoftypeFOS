const Viand = require('../model/viand');

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


// exports.deleteViand = (viand, res) =>{
//     viand.
// }