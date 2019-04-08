const express=require('express');
var app=express();
app.get('/', (req,res)=>{
    res.send("WELCOME TO OOTTY");
});
app.get('/home',(req,res)=>{
    res.send("Welcome To Home");
})
app.get('/contact',(req,res)=>{
    res.send("Contact Page");
})
app.listen(3000);