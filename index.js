import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'express'
import cookieParser from 'cookie-parser'
import { connectDB } from './connection.js';
import userRouter from './router/userRouter.js';
import recipeRouter from './router/recipeRoutee.js';

dotenv.config()
const app = express();

app.use(express.json())
app.use(cors({
    origin:true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use("/user",userRouter)
app.use("/recipe",recipeRouter)
app.get('/', (req, res) => {
    res.send("<center><h1>Welcome to Recipe Management Application....</h1> <br/> <p>Getting All Api please click this link and open my git repository :</p><a href=https://github.com/boradkrutil/Recipe_Management/tree/main/router  target=_blank>Click here</a></center>")
})

const port = process.env.PORT

app.use(express.json());

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
    connectDB()
})
