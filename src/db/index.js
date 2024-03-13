
const mongoose = require('mongoose')
const  DB_NAME =  require('../constants')

const  mongoDb = async()=>{
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`db connected!! DB HOST ${connectionInstance.connection.host}`);
    }
     catch(error){
     console.log("mongoose  connection failed", error);
     process.exit(1)
    }
}
module.exports = mongoDb

