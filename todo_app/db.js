const mongoose = require('mongoose');
const schema=mongoose.schema;
const ObjectId = schema.ObjectId;

const user= new schema({
    email:string,
    password: string,
    name: string,
});

const todos =new schema({
    userId: ObjectId,
    title: String,
    completed: Boolean
})