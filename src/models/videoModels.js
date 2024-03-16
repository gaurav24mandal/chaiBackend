const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    videoFile:{
        type: String,
        required: true ,
    },
    thumbnail:{
        type:String,
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    title:{
        type:String,
        required: true
     },
     description:{
        type:String,
        required: true,
      },
    duration:{
        type: Number,
        required: true,
    },
    views:{
        type:Number,
        default: 0,
        required: true
    },
    isPublished:{
        type: Boolean,
        default: true,
    }
  
},{timestamps:true})

module.exports =   mongoose.model("Video",videoSchema)