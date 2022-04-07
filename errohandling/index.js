const express = require('express')
const app = express();

function errorx(err, req, res, next) {
    res.status(500).send(err.stack)
}

app.get('/', (req, res) => {
    throw new Error('something wrong');
})

app.use(errorx);

app.listen(3000,()=>{
    console.log('listening on 3000')
});