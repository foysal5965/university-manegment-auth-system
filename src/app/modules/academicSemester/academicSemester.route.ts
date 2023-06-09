import express from 'express';

import validedRequest from '../../middleWares/validationREquest';
import { AcademicSemesterValidatiion } from './academicSemester.validation';
import { AcademicSemesteController } from './academicSemester.Controller';

const router = express.Router();
router.post(
  '/create-semester',
  validedRequest(AcademicSemesterValidatiion.createAcademicSemesterZodSchema),
  AcademicSemesteController.createSemester
);
export const AcademicSemesterRoutes = {
  router,
};
