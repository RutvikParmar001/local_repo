const express = require("express");
const hbs = require("hbs");
const path = require("path");

const port = 5000;

const app = express();

const newpath = path.join(__dirname,'/templates/partials');
const new_path = path.join(__dirname,'/templates/views');



app.set('view engine','hbs');
app.set('views',new_path);
hbs.registerPartials(newpath);


app.get("/",(req,res)=>{

    res.render('index');

})


app.listen(port,()=>{
    console.log("this is done bro");
})






// const express = require("express");
// const path = require("path");
// const hbs = require("hbs");
// const app = express();


// const newpath = path.join(__dirname,"/templats/views");
// const partialspath = path.join(__dirname,"/templats/partials")



// const port = 3000;

// //? middleware

// // app.use(express.static('public'));
// app.set('view engine','hbs');
// app.set('views',newpath);
// hbs.registerPartials(partialspath);


// app.get("/",(req,res)=>{

// //? for handlbar

// res.render('index');

// // res.send("hello how are you");


// //? for html file
// //    res.sendFile(__dirname,'/public/index.html');

// })

// app.get("/weather",(req,res)=>{

//    res.render("weather");

// })


// app.listen(port,()=>{
//     console.log("This is done");
// })