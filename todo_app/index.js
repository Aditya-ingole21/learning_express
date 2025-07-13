const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
JWT_SECRET ="ADITYA";

app.use(express.json());

app.post("/signup",function (req,res){

});
app.post("/login", function (req, res) {
});

app.post("/todos", function (req, res) {
});

app.get("/todos", function (req, res) {
});

app.listen(3000);

