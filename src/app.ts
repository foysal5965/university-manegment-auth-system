import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/user/user.route'
import globalErrorHandler from './app/middleWares/globalErrorHnadler'
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/users/', UserRoutes.router)
app.use('/api/v1/academic-semester', AcademicSemesterRoutes.router)



app.get('/', async(req: Request, res: Response) => {
  res.send('Working Successfully')
})

app.use(globalErrorHandler)

export default app
