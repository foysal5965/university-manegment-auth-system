/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler} from "express";
import config from "../../config";
import { IGenericErrorMessage } from "../../interfaces/error";
import handleValidationError from "../../erorrs/handleValidationError";
import ApiError from "../../erorrs/ApiErorr";
import { ZodError } from "zod";
import handleZodError from "../../erorrs/handleZodError";

const globalErrorHandler: ErrorRequestHandler = (err, req , res , next )=>{

   config.env == 'development'?
   console.log('gloval error handler', err):
   ''


   let statusCode = 500;
   let message= 'Somthing went wrong';
   let errorMessages :IGenericErrorMessage[]= []

   if(err?.name === 'ValidationError'){
    const simplifiedError= handleValidationError(err)
    statusCode = simplifiedError.statusCode;
    message= simplifiedError.message;
    errorMessages= simplifiedError.errorMessages

   }
   else if(err instanceof ZodError){
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages
   }
   else if(err instanceof ApiError){
       statusCode= err?.statusCode;
       message = err.message;
       errorMessages= err?.message?[
        {
            path:'',
            message: err?.message
        }
       ]:[]
   }
   else if(err instanceof Error){
    message = err?.message
    errorMessages= err?.message?[
        {
            path:'',
            message: err.message
        }
    ]:[]
   }

    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config.env !== 'production' ? err?.stack : undefined
    })
    next()
}

export default globalErrorHandler