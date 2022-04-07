const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt')
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
    },
    password:{
        type: 'string',
        required: true
    }
})

StudentSchema.pre('save', async function(next){
   
    
    if(this.isModified('password')){
        console.log(this.password)
    }
    // if(this.isModified('psw')){
    //     //console.log('pwd')
    //     this.psw = bcrypt.hash(this.psw, 12);
    // }
    //next();
})


// create collection
const Student = new mongoose.model('student', StudentSchema);
module.exports = Student;



