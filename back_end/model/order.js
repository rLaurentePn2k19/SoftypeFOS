var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var order = new Schema({
  name: { type: String, required: true },
  viands: [
    {
      viand_name: { type: String, required: true },
      viand_qty: { type: Number, required: true },
    }
  ]
},
  { collection: 'order' }
);


var Order = mongoose.model('Order', order);

module.exports = Order