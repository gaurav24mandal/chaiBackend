require("dotenv").config();
const express = require("express")
const mongoDb = require('./db/index')
mongoDb();





















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