const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user= new Schema({
    email:String,
    password: String,
    name: String,
});

const todos =new Schema({
    userId: ObjectId,
    title: String,
    completed: Boolean
});

const UserModel = mongoose.model('Users', user);
const TodoModel = mongoose.model('Todos', todos);

module.exports = {
    UserModel,
    TodoModel
};  