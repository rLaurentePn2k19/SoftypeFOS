const Viand = require('../model/viand');
const upload = require('../middlewares/multer');
const Fact = require('../model/fact');

exports.saveViand = (req, res) => {
    req.save((err, req) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        console.log(req);
        res.json(req);
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


exports.updateViand = (req, res) => {
    console.log(req.body)
    
    // Lacking update 

}

exports.postFact = (req, res) => {
    console.log(req.body)
    const new_fact = new Fact({
        title: req.body.title,
        detail: req.body.detail
    })
    console.log(new_fact)
    new_fact.save((err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err);
        }
        console.log(data);
        res.json(data);
    })
}


exports.getFact = (req, res) => {
    Fact.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ data: data })
    })
}

exports.updateFact = (req, res) => {
    Fact.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        console.log(data)
        res.json(data)
    })
}

exports.deleteFact = (req, res) => {
    Fact.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(data)
    })
}
