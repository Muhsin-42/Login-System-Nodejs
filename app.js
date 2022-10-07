const express = require("express")
const path = require("path");
const bodyparser = require('body-parser');
const session = require('express-session');
const {v4:uuidv4} = require('uuid');
const router = require('./router')

const app = express()
const port = 3000;

app.set('view engine','ejs')

// load static assets
app.use('/static',express.static(path.join(__dirname,'public')))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: false
}));

app.use('/',router)




app.listen(port,()=>{
    console.log('running the server ')
})












    //home route
    // app.get('/',(req,res)=>{
    //     res.render('base',{title: 'login system'})
    // })