const mongoose=require('mongoose');
require("dotenv").config();
 const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewurlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log('connection succesfull')
    })
    .catch((error)=>{
        console.log("issue in db connect")
        console.error(error.message);
        
        process.exit(1);
    })
 }
 module.exports=dbConnect;






 // .env libary is used for import database url which is kept in .env file
 // install .env package 

 // require('dotenv').config();->jo v .env me define oo sab ke sab config ke process wale me load ho jaayega