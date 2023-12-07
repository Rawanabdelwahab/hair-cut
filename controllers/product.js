import productModel from "../models/product.js";
export const post = async (req, res) => {
    // console.log('POST')
    //console.log(req.body)
    const { name, type, validity, user } = req.body
    await productModel.create({ name, type, validity, user })
    res.json()
}
export const get = async (req, res) => {
    // console.log('GET')
    const user = req.body.user;
    const find = await productModel.find({ user: user._id }).populate('user', 'firstName').lean()
    // console.log(find)
    res.json(find)
}
export const getId = async (req, res) => {
    const id = req.params.id
    // const findId = await productModel.findById(id) // findOne
    const user = req.body.user;
    //console.log(user)
    const findOne = await productModel.findOne({ "_id": id, user: user._id }).populate('user', 'firstName').lean()
    // console.log(findOne)
    res.json(findOne)
}
export const edit = async (req, res) => {
    console.log('edit')
    const id = req.params.id
    const { name, type, validity } = req.body
    const user = req.body.user;
    let updatedUser = {}
    updatedUser.name = name
    updatedUser.type = type
    updatedUser.validity = validity
    // const updatedData = await productModel.findByIdAndUpdate(id, updatedUser)
    //const updatedData = await productModel.findByIdAndUpdate(id, updatedUser) // updateOne
    const updateOne = await productModel.updateOne({ "_id": id, user: user._id }, { updatedUser }).populate('user', 'firstName').lean()
    // console.log(updateOne)
    res.json(updateOne);
}
export const deleteOne = async (req, res) => {
    console.log('delete')
    const id = req.params.id
    const { name, type, validity } = req.body
    const user = req.body.user;
    let deletedUser = {}
    deletedUser.name = name
    deletedUser.type = type
    deletedUser.validity = validity
    const deletedData = await productModel.deleteOne({ "_id": id, user: user._id }, { deletedUser }).populate('user', 'firstName').lean() // deleteOne
    res.json(deletedData);
}
