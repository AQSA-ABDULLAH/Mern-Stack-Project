const express = require('express');
const mongoose = require('mongoose');
const app = express();

const DB = 'mongodb+srv://aqsaabdullah38403:WXrxhGCabHa4XNco@cluster0.pmhf3cw.mongodb.net/mernstack?retryWrites=true&w=majority'
mongoose.connect(DB, ).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));


//Middelware
const middleware = (req, res, next) => {
    console.log('Hello my middle ware')
    next();
}

app.get('/', (req, res) =>{
    res.send('hello world')
})

app.get('/about', middleware, (req, res) => {
    res.send('hello I am tell you about me here');
})

app.get('/contact', (req, res) => {
    res.send("Hello its a contact us page")
})

app.get('/Signin', (req, res) => {
    res.send("Hello its a Signin page")
})

app.get('/Signup', (req, res) => {
    res.send("Hello its a SignUp page")
})

app.listen(3000, () => {
    console.log(`server is runnig`)
})