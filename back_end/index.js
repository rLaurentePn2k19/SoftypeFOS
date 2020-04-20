const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());
app.use(cors())

app.use('/files', express.static(path.join(__dirname, 'photos')))

require('./setup/mongo');

const order = require('./routes/order_routes'); 
const admin = require('./routes/viand_Routes');
app.use('/order', order);
app.use('/admin', admin);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))