import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subName:{
        type:[String]
    }
},{timestamps:true})

const categoryModal = mongoose.model('Category',categorySchema)
export default categoryModal;