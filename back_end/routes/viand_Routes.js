const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const adminController = require('../controller/adminController');
const Viand = require('../model/viand');


router.route("/addViand").post(upload.single("img"), (req, res) => {
    console.log(req.file)
    let viand = JSON.parse(req.body.viand);
    var imgUrl = `http://localhost:4000/files/`

    const create_viand = new Viand({
        image: imgUrl + req.file.filename,
        name: viand.name,
    });
    adminController.saveViand(create_viand, res)
})

router.get('/retrieveViands', (req, res) => {
    adminController.RetrieveAllViand(res);
    console.log(res)
})

router.delete("/deleteViand/:id", (adminController.deleteViand));


// router.put("/updateViand", (adminController.updateViand));

router.route("/updateViand").put(upload.single("img"), (req, res) => {
    console.log(req.body.update_viand.name)
    // console.log(req.file)
    // console.log(req.file)
    // let viand = JSON.parse(req.body.update_viand);
    // var imgUrl = `http://localhost:4000/files/`

    // const create_viand = new Viand({
    //     image: imgUrl + req.file.filename,
    //     name: viand.name,
    // });

    // console.log(create_viand)
    // adminController.updateViand(create_viand, res)
})


module.exports = router;

