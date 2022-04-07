 const mongoose = require('mongoose');
 const validator = require('validator');

 const StudentSchema = new mongoose.Schema({
     name:{
         type: 'string',
         required: true
     },
     email:{
         type: 'string',
         required: true,
         unique:[true, "Email should be unique"],
         validate(value) {
             if(!validator.isEmail(value)){
                 throw new Error('Invalid email')
             }
         }
     }
})

// create collection
const Student = new mongoose.model('student', StudentSchema);
module.exports = Student;