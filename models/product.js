import { Schema, model,ObjectId } from "mongoose";
const product=new Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    validity:{
        type:String,
        required:true
    },
    user: {
        type: ObjectId,
        ref: 'login',
        required: true
    }

})
export default model('product',product)