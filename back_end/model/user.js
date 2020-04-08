var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = new Schema({
  username:{type:String, required:true},
},
  { collection: 'user' }
);


user.statics.getByEmail = async function(username) {
  return await this.findOne({"username" : username})
}

var User = mongoose.model('User', user);

module.exports = User