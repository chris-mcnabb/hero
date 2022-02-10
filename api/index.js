const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.listen(3040, ()=>{
    console.log(`Server is running on 3040`)

})
const success = app.post("/", async(req,res)=>{
    let good = req.body
    try{
        res.status(200).json(good)
        console.log(good)

    }catch(err){
        console.log(err)
    }
})

module.exports = {app, success};
