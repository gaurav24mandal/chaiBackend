require("dotenv").config();
const express = require("express")
const mongoDb = require('./db/index')
const  cookieParser = require('cookie-parser');
const app = require("./app")

mongoDb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server  running on port ${process.env.PORT||8000}`);
    })
})
.catch((error)=>{
    console.log(`mongoDb connection failed ${error.message} `);
})

 


















// const app = express();
// (async ()=>{
//  try {

// await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("error",()=>{
//     console.log("Errr", error);
//     throw error;
//    })
//    app.listen(process.env.PORT,()=>{
//         console.log(`server  running  on port ${process.env.PORT}`);
//    })
//  } catch (error) {
//     console.log(error.message);
//     throw error
//  }  
// })()    