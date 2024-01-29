import { Schema, model,ObjectId } from "mongoose";
const style = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'login',
        required: true
    },
})
export default model('style', style)