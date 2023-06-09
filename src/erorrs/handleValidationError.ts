import mongoose from "mongoose";
import { IGenericErrorMessage } from "../interfaces/error";
import { IGenericErrorResponse } from "../interfaces/common";

const handleValidationError = (err: mongoose.Error.ValidationError): IGenericErrorResponse => {
    const errors: IGenericErrorMessage[] = Object.entries(err.errors).map(([key, value]) => {
      return {
        path: key,
        message: value.message
      };
    });
    const statusCode = 400;
    return {
      statusCode,
      message: 'Validation Error',
      errorMessages: errors
    };
  };


  export default handleValidationError
  