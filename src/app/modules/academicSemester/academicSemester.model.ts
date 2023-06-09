import { Schema, model } from 'mongoose';
import {
  AcademicSemeterModel,
  IAcademicSemester,
} from './academicSemester.interface';
import {
  academicSemesterCode,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.Conostants';
import ApiError from '../../../erorrs/ApiErorr';

import status from 'http-status';

const academicSemesterShema = new Schema<IAcademicSemester>({
  title: {
    type: String,
    required: true,
    enum: academicSemesterTitles,
  },
  year: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
    enum: academicSemesterCode,
  },
  startMonth: {
    type: String,
    required: true,
    enum: academicSemesterMonths,
  },
  endMonth: {
    type: String,
    required: true,
    enum: academicSemesterMonths,
  },
});


academicSemesterShema.pre('save', async function (next) {
    const isExist = await AcademicSemeter.findOne({
      title: this.title,
      year: this.year,
    });
  
    if (isExist) {
      throw new ApiError(status.CONFLICT, 'Academic semester is alredy exists');
    }
    next();
  });

export const AcademicSemeter = model<IAcademicSemester, AcademicSemeterModel>(
  'AcademicSemester',
  academicSemesterShema
);


