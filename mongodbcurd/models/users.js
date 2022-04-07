 const mongoose = require('mongoose');
 const validator = require('validator');

 const UserSchema = new mongoose.Schema({
     name:{
         type: 'string',
         required: true
     },
     email:{
         type: 'string',
         required: true,
         unique:[true, "Email should be unique"],
         validate(value) {
             if(validator.isEmail(value)){
                 throw new Error('Invalid email')
             }
         }
     }
})

// create collection
const User = new mongoose.model('User', UserSchema);
module.exports = User;