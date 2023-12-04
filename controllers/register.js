import loginModel from '../models/login.js'
export const register = async (req, res) => {
    console.log('saved')
    console.log(req.body)
    // const firstName=req.body.firstName
    // const lasttName=req.body.lasttName
    // const email=req.body.email
    // const password=req.body.password
    const { firstName, lastName, email, password } = req.body
    await loginModel.create({ firstName, lastName, email, password })
}
