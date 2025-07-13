const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
JWT_SECRET ="ADITYA";
const { UserModel, TodoModel } = require('./db');
const mongoose = require('mongoose');

app.use(express.json());
// ViUA7mQ3sIQ2DT6o
mongoose.connect("mongodb+srv://Aditya21:ViUA7mQ3sIQ2DT6o@cluster0.og6gofh.mongodb.net/todo_app")

app.post("/signup", async function (req, res) {

    const  email = req.body.email;
    const  password = req.body.password;
    const  name = req.body.name;

   await UserModel.create({
        email:email,
        password:password,
        name:name

    });

    res.json({
        message: "You are signed up"
    });

});
app.post("/login", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

   const founduser= await  UserModel.findOne({
        email:email,
        password:password
});

if (founduser){
    const token = jwt.sign({id :UserModel.id
},JWT_SECRET);
    res.json({
        token:token,
 });
}
else {
    res.json({
        message:"user not found"
    });
}



})

app.post("/todos", function (req, res) {
});

app.get("/todos", function (req, res) {
});

app.listen(3000);

