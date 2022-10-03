const { response } = require("express");
const express = require("express");
const TicTacToe = require("./TicTacToe");
const app = express();
var plates;
app.get("/",async function(req,res){
    console.log("On server");
})
app.post("/api/checkTicTacToe",async function(req,res){
    console.log(req.body.title);
    plates = req.body.colectionPlates;
    console.log(plates)
    res.json({result:TicTacToe(plates)});
})
module.exports = app