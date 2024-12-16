import express from "express";
import { createRecipe, deleteRecipe, getAllRecipe, getRecipeById, updateRecipe } from "../controller/recipeController.js";
import { AuthMiddle } from "../middleWare/auth.js";

const recipeRouter = express.Router()

recipeRouter.get("/",getAllRecipe)
recipeRouter.get("/:id",getRecipeById)
recipeRouter.post("/add",AuthMiddle, createRecipe)
recipeRouter.patch("/update/:id",AuthMiddle, updateRecipe)
recipeRouter.delete("/delete/:id",AuthMiddle, deleteRecipe)

export default recipeRouter