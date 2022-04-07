const jwt = require('jsonwebtoken')

const auth = async (req, res, next)=>{
    try{
        // const token = req.cookies.jwt
        // const verifyStudent = jwt.verify(token, "abc")
        console.log(verifyStudent)

    }catch(e){
        res.status(400).send(e)
    }
}

module.exports = auth