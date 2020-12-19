const express = require("express");
const Player = require("./models/players")

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
require('./db/connection');

app.get('/',(req,res)=>{
    res.send("Welcome");
})

app.get('/getScore',(req,res)=>{
    Player.find({}).sort({score:-1}).exec((err,user)=>{
        if(err) Error(err);
        else {
            res.send(user);
        }
    })
})

app.get('/addScore/:name/:score',(req,res)=>{
    Player.find({}).sort({score:-1}).exec((err,data)=>{
        if(err) console.log(err)
        else{
            let index = data.length-1;
            Player.deleteOne({_id:data[index]._id},async (err)=>{
                if(err) Error(err);
                await Player.create({
                    name: req.params.name,
                    score: req.params.score
                })
                console.log("Players Overwritten");
                res.send("OK");
            });
        }
    })
})

app.listen(port,()=>{
    console.log('Server Started: ' + port);
})