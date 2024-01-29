import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';
import loginRouter from './routes/login.js'
import serviceRouter from './routes/service.js'
import registerRouter from './routes/register.js'
import productRouter from "./routes/product.js";
import styleRouter from "./routes/style.js";
import ApiError from "./utils/apiError.js"
import {globalError} from "./middlewares/errorMiddleware.js"
import cors from 'cors'
import bodyparser from 'body-parser'
import { extractToken } from "./auth.js";
dotenv.config()
mongoose.connect(process.env.mongoConnectionUrl)
const app = express()
app.use(bodyparser.json())
app.use(cors())
app.use('/', loginRouter)
app.use('/', registerRouter)
app.use(extractToken)
app.use('/', serviceRouter)
app.use('/', productRouter)
app.use('/', styleRouter)
// if route doesn't 
app.all('*', (req, res, next) => {
    next(new ApiError(`can't find this route: ${req.originalUrl}`, 400))
})
app.use(globalError)

app.listen(process.env.port, () => {
    console.log(`started on http://localhost:${process.env.port}`)
})