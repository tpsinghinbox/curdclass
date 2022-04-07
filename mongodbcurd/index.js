const { application } = require('express');
const express = require('express')
const app = express();
const db = require('./helpers/db')
const auth = require('./helpers/middleware/auth')
const StudentRouter = require('./helpers/routers/student')

const jwt = require('jsonwebtoken')
const createToken = async() => { 
    const token = jwt.sign({_id:"abcdef"}, "keykeykeykeykeykeykeykeykeykeykeykeykey")
    console.log(token);
}

createToken();
//app.use(StudentRouter)
//const router = new express.Router();

// app.get("/secret", auth, function (req, res) {
//     res.send("This is secret!");
// })

// app.post("/students", async (req, res) => {
//     //console.log(req.body);
//     const user = new Student(req.body);
    
//     //promise
//     // user.save().then(() => {
//     //     res.send(user)
//     // }).catch(err => {
//     //     res.send(err)
//     // })  
    
    
//     try {
//         const saveUSer = await user.save()
//         res.status(200).send(saveUSer)
//     }catch(err) {
//         res.status(400).send(err)
//     }
    
//     //res.send("Hello from api");
// })
// This must be end
//app.use(router);
app.listen(3000,()=>{
    console.log('listening on 3000')
});