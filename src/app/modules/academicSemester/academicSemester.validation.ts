import { z } from 'zod';
import { academicSemesterCode, academicSemesterMonths, academicSemesterTitles } from './academicSemester.Conostants';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Titile is required',
    }),
    year: z.number({ required_error: 'Year is required' }),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'start month is required',
    }),
    endMonth: z.enum(
      [...academicSemesterMonths] as [string, ...string[]],
      { required_error: 'end month is required' }
    ),
  }),
});

export const AcademicSemesterValidatiion = {
  createAcademicSemesterZodSchema,
};
