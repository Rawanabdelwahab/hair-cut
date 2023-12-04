import serviceModel from '../models/service.js'
export const post = async (req, res) => {
    console.log('POST')
    const { name, group, duration, price, description } = req.body
    await serviceModel.create({ name, group, duration, price, description })
    res.json()
}
export const get = async (req, res) => {
    console.log('GET')
    const find = await serviceModel.find({}).lean()
    console.log(find)
    res.json(find)
}