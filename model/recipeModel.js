import mongoose from "mongoose";


const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructions:{
        type: String,
        required: true,
    },
    ingre1:{type: String},
    ingre2:{type: String},
    ingre3:{type: String},
    ingre4:{type: String},
    qty1:{type: String},
    qty2:{type: String},
    qty3:{type: String},
    qty4:{type: String},
    imageUrl:{type: String, required: true}
})

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;