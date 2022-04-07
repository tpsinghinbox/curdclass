const express = require('express');
const router = new express.Router();
const studentModel = require('../models/student')

router.post('/student', async(req, res) => {
    try {
        const pass1 = req.body.psw
        const pass2 = req.body.psw2
        if(pass1 === pass2){
           
            // res.status(200).render('index')
              const registerStudents = new studentModel({
                  name: req.body.name,
                  email: req.body.email,
                  password: req.body.psw
              })  
              const register = await registerStudents.save()
              res.status(200).render('index')
        }else{
            res.send("Both password should match");
        } 
        
    }catch(err) {
        res.send(400).send("Error "+err);
    }
    
    //console.log(req)
    
})

module.exports = router;