import { Schema, model } from "mongoose";
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

})
export default model('product',product)