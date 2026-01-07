import express from 'express'
import { config } from 'dotenv'
import indexRouter from "./routes/index.js"
config()
const PORT = 4545;

const app = express()  
app.use(express.json())
app.use(indexRouter.carRouter)
app.use(indexRouter.customerRouter)
app.use(indexRouter.orderRouter)
app.use(indexRouter.paymentRouter)



       
app.listen(PORT,()=> console.log(`Server is running ${PORT}`))
 