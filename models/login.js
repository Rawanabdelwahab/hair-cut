import { Schema, model } from "mongoose";
const login = new Schema({
    email: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

},
    { timestamps: true }
)
export default model('login', login)