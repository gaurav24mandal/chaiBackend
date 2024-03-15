const e = require("express");

class ApiError extends Error {
   constructor(statuscode,message="something  went  worng",errors=[],stack){
       this.statuscode = statuscode 
       super(message)
       this.data  = null 
       this.message = message 
       this.success = false ;
       this.errors = errors
       if(stack){
        this.stack = stack
       }else{
            Error.captureStackTrace(this,this.constructor)
       }

   }

}

module.exports = ApiError