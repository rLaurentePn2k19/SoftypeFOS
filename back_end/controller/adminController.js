const Viand = require('../model/viand');

exports.saveViand = (req, res) => {
    console.log(req.body)
    var imgUrl = `http://localhost:4000/files/`
    var details = JSON.parse(req.body.details)
    console.log(details);

    var imgs = req.files.map(img => {
        img.filename = imgUrl + img.filename
        return img.filename
    })


    const create_viand = new Viand({
        image: imgs,
        name: details.name,
    });
    create_viand.save((err, viand) => {
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