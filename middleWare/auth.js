import jwt from 'jsonwebtoken'
import User from '../model/userModel.js';
export const AuthMiddle = async(req, res, next) => {
       try {
          const token  = req.cookies["token"]
          if (!token) {
             return res.status(401).json({ message: 'Unauthorized' });
          }
          const decoded = jwt.verify(token, process.env.SECRET_KEY)   
          if(!decoded){
             return res.status(401).json({ message: 'Unauthorized' });
          }  
          const user = await User.findById(decoded.userId).select("-password")
          if (!user) {
             return res.status(404).json({ message: 'User Not Found' });
          }
          req.user = user;
          next();
        } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'Internal Server Error' });
       }
}