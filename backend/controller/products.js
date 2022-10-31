import Products from '../modal/products.js'

export const createProduct = async(req,res)=>{
    // let oldProduct = await Products.findOne({category:req.body.category})
    // if(oldProduct) return res.status(400).json({message:'category allready exist'})
    try {
        let products = new Products(req.body)
        await products.save()
        res.status(201).json(products)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export const getProducts = async(req,res)=>{
    try {
        let products = await Products.find().sort({_id:-1}).populate('category')
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error})
    }
}