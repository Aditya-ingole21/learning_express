const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
JWT_SECRET ="ADITYA";
const { UserModel, TodoModel } = require('./db');
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect("mongodb+srv://@cluster0.og6gofh.mongodb.net/todo_app")

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
    const token = jwt.sign({id :founduser.id
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

app.post("/todo", auth ,function (req, res) {
    const title=req.body.title;
    const completed = req.body.completed;
    const userId = req.UserId;
    TodoModel.create({
        userId: userId,
        title: title,
        completed: completed
    });
    res.json({
        message: "Todo created successfully"
    });


});

app.get("/todos", auth, async function (req, res) {
    const userId = req.UserId;
const todos = await TodoModel.find({
        userId: userId
    })
    res.json({
        todos: todos
   


    })
});



function  auth (req,res,next){
    const token = req.headers.token;
    
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData){
        req.UserId = decodedData.id;
        next();
    }
    else(
        res.json({
            message: "You are not authenticated"
        }
    )
)


}

app.listen(3000);

