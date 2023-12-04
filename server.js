import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';
import loginRouter from './routes/login.js'
import serviceRouter from './routes/service.js'
import registerRouter from './routes/register.js'
import productRouter from "./routes/product.js";
import cors from 'cors'
import bodyparser from 'body-parser'
dotenv.config()
mongoose.connect(process.env.mongoConnectionUrl)
const app = express()
app.use(bodyparser.json())
app.use(cors())
app.use('/', loginRouter)
app.use('/', registerRouter)
app.use('/', serviceRouter)
app.use('/', productRouter)
app.listen(process.env.port, () => {
    console.log(`started on http://localhost:${process.env.port}`)
})