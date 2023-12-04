import productModel from "../models/product.js";
export const post = async (req, res) => {
    console.log('POST')
    const { name, type, validity } = req.body
    await productModel.create({ name, type, validity })
    res.json()
}
export const get = async (req, res) => {
    console.log('GET')
    const find = await productModel.find({}).lean()
    console.log(find)
    res.json(find)
}
export const getId = async (req, res) => {
    const id = req.params.id
    const findId = await productModel.findById(id)
    console.log('*******')
    console.log(findId)
    res.json(findId)
}
export const edit = async (req, res) => {
    console.log('edit')
    const id = req.params.id
    const { name, type, validity } = req.body
    let updatedUser = {}
    updatedUser.name = name
    updatedUser.type = type
    updatedUser.validity = validity
    const updatedData = await productModel.findByIdAndUpdate(id, updatedUser)


    res.json(updatedData);
}
export const deleteOne = async (req, res) => {
    console.log('delete')
    const id = req.params.id
    const { name, type, validity } = req.body
    let deletedUser = {}
    deletedUser.name = name
    deletedUser.type = type
    deletedUser.validity = validity
    const deletedData = await productModel.findByIdAndDelete(id, deletedUser)
    res.json(deletedData);
}
