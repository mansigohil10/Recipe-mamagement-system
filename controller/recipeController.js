import Recipe from "../model/recipeModel.js"


export const createRecipe = async(req,res)=>{
    try {
        const{title,description,instructions,ingre1,ingre2,ingre3,ingre4,qty1,qty2,qty3,qty4,imageUrl} = req.body
        if(!title || !description || !instructions || !imageUrl){
          return res.status(400).json({error:"Missing Dependencies"})
        }
        const result = await Recipe.create(req.body)
        if(!result){
            return res.status(400).json({error:"Failed to create recipe"})
        }
        res.status(201).json({message:"Successfull ", data:result})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal Server Error"})
    } 
}

export const getAllRecipe = async(req,res)=>{
    try {
        const result = await Recipe.find()
        if(!result){
            return res.status(404).json({error:"No recipes found"})
        }
        res.status(200).json({message:"Successfull ", data:result})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal Server Error"})
    }
}

export const getRecipeById = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await Recipe.findById(id)
        if(!result){
            return res.status(404).json({error:"Recipe not found"})
        }
        res.status(200).json({message:"Successfull ", data:result})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal Server Error"})
    }
}

export const updateRecipe = async(req,res)=>{
    try {
        const {id} = req.params
        const {title,description,instructions,ingre1,ingre2,ingre3,ingre4,qty1,qty2,qty3,qty4,imageUrl} = req.body
        if(title == "" || description =="" || instructions == "" || imageUrl ==""){
            return res.status(400).json({error:"Missing Dependencies"})
        }
        const result = await Recipe.findByIdAndUpdate(id, req.body)
        if(!result){
            return res.status(404).json({error:"Recipe not found"})
        }
        res.status(200).json({message:"Successfull ", data:result})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal Server Error"})
    }
}

export const deleteRecipe = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await Recipe.findByIdAndDelete(id)
        if(!result){
            return res.status(404).json({error:"Recipe not found"})
        }
        res.status(200).json({message:"Successfull Recipe deleted"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal Server Error"})
    }
}