import httpStatus from "http-status";
import ApiError from "../../../erorrs/ApiErorr";
import { academicSemesterTitlesCodeMapper } from "./academicSemester.Conostants";
import { IAcademicSemester } from "./academicSemester.interface";
import { AcademicSemeter } from "./academicSemester.model";

const createSemester = async(payload: IAcademicSemester): Promise<IAcademicSemester>=>{

    if(academicSemesterTitlesCodeMapper[payload.title] !== payload.code){
        throw new ApiError(httpStatus.BAD_REQUEST, 'invalid semester code')
    }
    const result = await AcademicSemeter.create(payload);
    return result
}

export const AcademicSemesterService = {
    createSemester
}