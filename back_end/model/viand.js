var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var viand = new Schema({
  name: { type: String, required: true },
  image: { type: [String], required: true }
},
  { collection: 'viand' }
);

// user.statics.getByEmail = async function(username) {
//   return await this.findOne({"username" : username})
// }

var Viand = mongoose.model('Viand', viand);

module.exports = Viand