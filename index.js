const express = require ("express");
const jwt = require ("jsonwebtoken");

const app = new express();

app.use(express.json());

 const JWT_SECRET = "Aditya";

 const users = [];

 app.post("/signup",function(req,res){
    const username =req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password
    })
    res.json({
        message:"you are signed up"
    })

 })

 app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let founduser= null;

    for (let i=0;i<users.length;i++){
        if(users[i].username==username&&users[i].password==password)
            founduser=users[i];
    }

    if (founduser){
        const token = jwt.sign({
        username:username,JWT_SECRET
    });

    res.json({
        token:token
    })
    }


 })