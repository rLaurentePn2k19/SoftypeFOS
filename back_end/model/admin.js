var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var admin = new Schema({
  username:{type:String, required:true},
  password: {type: String, required:true}
},
  { collection: 'admin' }
);


user.statics.getByEmail = async function(username) {
  return await this.findOne({"username" : username})
}

var Admin = mongoose.model('Admin', admin);

module.exports = Admin