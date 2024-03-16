const  mongoose = require("mongoose");

const  userSchema  = new mongoose.Schema({
    watchHistory: {
        type: mongoose.Types.ObjectId,
        ref: "video"
    },
    username :{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim : true,
        index: true,
    },
    email :{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim : true,
    },
    fullName  :{
        type: String,
        required: true,
        trim:true,
        index: true
    },
    avatar: {
        type: String
    },
    coverImage:{
        types: String,
        
    },
    password:{
        type : String,
        required: true ,
        min: "5"
    },
    refreshtoken:{
        type: String,
        required: true
    }

},{timestamps:true})

module.exports = mongoose.model("User",userSchema)