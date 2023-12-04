
import loginModel from '../models/login.js'
export const login = async (req, res) => {
    const loginuser = await loginModel.find({}).lean()
    const { firstName, lastName, email, password } = req.body
    //email.find({email})
    // password.find({password})
    // loginModel.find({email,password},   function (err, docs) {

    //   })

    // loginModel.collection.find( { email,password } )
    //loginModel.$where('this.email')
    //loginModel.logins.find({"email":{$exists:true}})
    //loginModel.project.find({email:{$exists:true}})
    const user = await loginModel.findOne({ email: email, password: password }).lean()

    if (user) {
        res.json({ found: true })
    }
    else
        res.status(404).json({ found: false })
}