import express, { type Application, type Request, type Response } from "express"
import { userRouter } from "./module/user/user.route.js"
import { profileRouter } from "./module/profile/profile.route.js"
import { authRouter } from "./module/auth/auth.route.js"
import { logger } from "./Middleware/logger.js"
import cookieParser from "cookie-parser"
import cors from 'cors'
import globalErrorHandler from "./Middleware/gobalErrorHandler.js"

const app :Application = express()

app.use(cookieParser())
app.use(express.urlencoded({extended : true})) //form data  otherwise undefind . extended : true for nexted data 
app.use(express.json()) // json data send in req.body otherwise undefind
app.use(express.text()) // text send in req.body otherwise undefind

app.use(logger)

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get('/', (req :Request, res : Response) => {
  // res.send('Hello World!')
   res.status(200).json({
      massage:"Express Server",
      author :" Next level developer"
   })
})


app.use('/api/users',userRouter)

app.use('/api/profile',profileRouter)

app.use('/api/auth',authRouter)

app.use(globalErrorHandler);
   
export default app