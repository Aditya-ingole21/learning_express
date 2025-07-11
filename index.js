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

 