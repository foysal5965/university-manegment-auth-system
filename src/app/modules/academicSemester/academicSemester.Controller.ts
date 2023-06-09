import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.Service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body;
    console.log(academicSemesterData)
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    
    res.status(200).json({
      success: true,
      message: 'Academic semester created successflly',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesteController = {
  createSemester,
};
