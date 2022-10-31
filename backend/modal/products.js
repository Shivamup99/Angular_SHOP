import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
       type:String,
       required:true,
       ref:'Category'
    },
    price:{
        type:Number,
        required:true
    },
    inStock:{
        type:Number,
        default:4
    },
    image:{
        type:String
    },
    images:{
        type:[String]
    },
    desc:{
        type:String
    },
    discount:{
        type:Number
    }
},{timestamps:true})

const prouctModal = mongoose.model('Products',productsSchema)
export default prouctModal