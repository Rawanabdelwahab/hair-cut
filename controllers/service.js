import serviceModel from '../models/service.js'
export const post = async (req, res) => {
    //console.log('POST')
    // console.log(req.body)
    const { name, group, duration, price, description, user } = req.body
    await serviceModel.create({ name, group, duration, price, description, user })
    res.json()
}
export const get = async (req, res) => {
    // const {name } = req.body
    const user = req.body.user;
    //console.log(user)
    // 1. Extract "authorization" from req.headers
    // 2. Replace the "Bearer " with an empty string
    // 3. Decode the token and extract user info.
    const find = await serviceModel.find({ user: user._id }).populate('user', 'firstName').lean()
    console.log(find)

    res.json(find)
}