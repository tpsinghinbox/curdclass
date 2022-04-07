const express = require('express');
const router = new express.Router();
const Student = require('../../models/students')

router.post("/students", async (req, res) => {
    //console.log(req.body);
    const user = new Student(req.body);
    
    //promise
    // user.save().then(() => {
    //     res.send(user)
    // }).catch(err => {
    //     res.send(err)
    // })  
    
    
    try {
        const saveUSer = await user.save()
        res.status(200).send(saveUSer)
    }catch(err) {
        res.status(400).send(err)
    }
    
    //res.send("Hello from api");
})

module.exports = router;