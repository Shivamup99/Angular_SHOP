import Category from '../modal/category.js'

export const createCategory = async(req,res)=>{
     let oldCat = await Category.findOne({name:req.body.name})
     if(oldCat) return res.status(400).json({message:'category allready exist'})
     try {
        let category = new Category(req.body)
        await category.save()
        res.status(201).json(category)
     } catch (error) {
        res.status(500).json({message:error})
     }
}

export const getCategory = async(req,res)=>{
    try {
        let category = await Category.find()
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({message:error})
    }
}