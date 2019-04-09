const express=require('express');
const exphbs=require('express-handlebars')

var app=express();
app.engine('handlebars',exphbs({defaultLayout:'mainpage'}));
app.set('view engine','handlebars');
app.use(express.static('views/static'));
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.get('/gallery',(req,res)=>{
    res.render('gallery');
});
app.post('/getdata',(req,res)=>{
   // res.send('DATA ACCEPTED');
   var name=req.body.name;
   var address=req.body.address;
   var place=req.body.place;
   var email=req.body.email;
   var mobile=req.body.mob;
   
   console.log(name,address,place,email,mobile);
});

//var app=express();
//app.get('/2', (req,res)=>{
    //res.send("<marquee><h1> WELCOME TO OOTTY</h1></marquee>");
//});
//app.get('/home',(req,res)=>{
   // res.send("Welcome To Home");
//})
//app.get('/contact',(req,res)=>{
   // res.send('[{"name": "Tom","age":23},{"name":"Riya","age":23}]');
//})
app.listen(3030);