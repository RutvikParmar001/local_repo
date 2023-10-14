const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

//? middleware

app.set('view engine','hbs');
app.use(express.static('public'));



app.get("/",(req,res)=>{

//? for handlbar

res.render('index');


//? for html file
//    res.sendFile(__dirname,'/public/index.html');

})


app.get("/about",(req,res)=>{

    res.send("Hello you shuold know about me");

})

app.get("/weather",(req,res)=>{

    res.send("Hello I am Weather");

})



app.listen(port,()=>{
    console.log("This is done");
})