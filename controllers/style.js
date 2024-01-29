import styleModel from '../models/style.js'
import asyncHandler from "express-async-handler"
import ApiError from "../utils/apiError.js"
export const post = async (req, res) => {
    const { name, color, type, user } = req.body
    await styleModel.create({ name, color, type, user })
    res.json()
}
export const get = asyncHandler(async (req, res) => {
    const page = req.query.page * 1 || 1
    const limit = req.query.limit * 1 || 5
    const skip = (page - 1) * limit
    const user = req.body.user
    const find = await styleModel.find({ user: user._id }).populate('user', 'firstName').skip(skip).limit(limit).lean()
    res.json(find)
})

export const getId = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const user = req.body.user
    try {
        const findOne = await styleModel.findOne({ '_id': id, user: user._id }).populate('user', 'firstName').lean()
        if (!findOne) {
            const err = new ApiError(`No category for this id ${id}`, 404)
            return next(err)
        }
        res.json(findOne)
    } catch (error) {
        return next(new ApiError(`No category for this id ${id}`, 404))
    }
})
export const edit = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const { name, color, type } = req.body
    const user = req.body.user
    let updatedUser = {}
    updatedUser.name = name
    updatedUser.color = color
    updatedUser.type = type

    const updateOne = await styleModel.updateOne({ _id: id, user: user._id }, { $set: updatedUser }).populate('user', 'firstName').lean()
    if (!updateOne) {
        return next(new ApiError(`No category for this id ${id}`, 404))
    }
    res.json(updateOne)
})
export const deleteOne = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const { name, color, type } = req.body
    const user = req.body.user
    let deletedUser = {}
    deletedUser.name = name
    deletedUser.color = color
    deletedUser.type = type
    const deletData = await styleModel.deleteOne({ _id: id, user: user._id }, { $set: deletedUser }).populate('user', 'firstName').lean()
    if (!deletData) {
        return next(new ApiError(`No category for this id ${id}`, 404))
    }
    res.json(deletData)
})