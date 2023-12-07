import loginModel from '../models/login.js'
import  bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const login = async (req, res) => {
    const loginuser = await loginModel.find({}).lean()
    const { firstName, lastName, email, password } = req.body
    const user = await loginModel.findOne({ email: email, password: password }).lean()

    if (user) {
        res.json({ found: true })
    }
    else
        res.status(404).json({ found: false })
}
export const checkLogin = async (req, res) => {
    const { email, password } = req.body
    const logged = await loginModel.findOne({ email })
    const isCorrectPassword = bcrypt.compareSync(password, logged.password)
   
    const data ={
        _id :logged._id,
        email:logged.email,
    }
    const token=jwt.sign(data,'shhhhh')
    // console.log(token)
    if (isCorrectPassword) {
        res.json({ token })
    }
    else
        res.status(404).json({ found: false })
   
}