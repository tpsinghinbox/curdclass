const mongoose = require('mongoose');
mongoose.connect('mongodb://xrayuser:Password@192.168.56.101:27017/xray', {
                            useNewUrlParser: true,
                            // useUnifiedTopology: true,
                            // useFindAndModify: false,
                            // useCreateIndex: true
                          });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDB Connected...");
});

module.exports = db