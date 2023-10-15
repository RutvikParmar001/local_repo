const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();


const newpath = path.join(__dirname,"/templats/views");
const partialspath = path.join(__dirname,"/templats/partials")



const port = 3000;

//? middleware

// app.use(express.static('public'));
app.set('view engine','hbs');
app.set('views',newpath);
hbs.registerPartials(partialspath);


app.get("/",(req,res)=>{

//? for handlbar

res.render('index');

// res.send("hello how are you");


//? for html file
//    res.sendFile(__dirname,'/public/index.html');

})

app.get("/weather",(req,res)=>{

   res.render("weather");

})


app.listen(port,()=>{
    console.log("This is done");
})