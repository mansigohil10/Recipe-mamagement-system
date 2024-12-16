import User from "../model/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// import cookie from 'cookie-parser'

export const userRegister = async(req,res)=>{
   try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({ success: false, error: true, message: "Missing Dependency" })
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ success: false, error: true, message: "Email already registered" })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({name, email, password:hashedPassword})
    if(!user){
        return res.status(500).json({ success: false, error: true, message: "somthing went wrong" })
    }
     res.status(200).json({ success: true, message: "User registered successfully",data:user });
   } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: true, message: "Internal Server error" })
   }
}

export const userLogin = async(req,res)=>{
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, error: true, message: "Missing Dependency" })
        }
        const user = await User.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(404).json({ success: false, error: true, message: "User not found" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, error: true, message: "Invalid password" })
        }
        const token = jwt.sign({userId:user._id}, process.env.SECRET_KEY,{
            expiresIn:"30d",
        })
        if(!token){
            return res.status(500).json({ success: false, error: true, message: "Token Error" })
        }
         res.cookie('token', token, { httpOnly: true, expires: new Date(Date.now() + 3600000 * 30) });  // expires in 30 days
         res.status(200).json({ success: true, message: "User logged in successfully" , token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: true, message:"Internal Server Error"})
}
}

export const userLogout = async(req,res)=>{
    try {
        res.clearCookie('token');
        res.status(200).json({ success: true, message: "User logged out successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: true, message: "Internal Server Error" });
    }
}