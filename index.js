const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

//? middleware

app.use(express.static('public'));

app.get("/",(req,res)=>{

   res.sendFile(__dirname,'/public/index.html');

})


app.get("/about",(req,res)=>{

    res.send("Hello you shuold know me");

})



app.listen(port,()=>{
    console.log("This is done");
})