var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var order = new Schema({
  name: { type: String, required: true },
  viands: { type: [String], required: true }
},
  { collection: 'order' }
);

// user.statics.getByEmail = async function(username) {
//   return await this.findOne({"username" : username})
// }

var Order = mongoose.model('Order', order);

module.exports = Order