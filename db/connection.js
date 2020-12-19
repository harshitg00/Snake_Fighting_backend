const mongoose = require("mongoose");

mongoose.connect(
    process.env.MongoURI || require('../config/keys.js').MongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },
    function(err){
        if(err) console.log(err);
        else console.log("MongoDB Connected");
    }
)