const  promiseAsyncHandler  = (requestHandler)=>{
     return (req,res ,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
     }
}

const asyncHandler  = (asyncHandlerFunc)=>async(req,res,next)=>{
  try {
        await asyncHandlerFunc(req,res,next)
   }catch(error){
       res.status(err.code|| 500).json({
        status:false,
        message: err.message
       })
   }
}
exports.promiseAsyncHandler = promiseAsyncHandler
exports.asyncHandler = asyncHandler 