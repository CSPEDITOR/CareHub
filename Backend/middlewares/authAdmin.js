import jwt from 'jsonwebtoken'

//admin authentication middleware
const authAdmin = async (req,res,next) =>{
    try {
        const {atoken} = req.headers;
        if(!atoken){
            return res.json({success:false,message:"Not authorized Login Again"})
        }
        const token_decode = jwt.verify(atoken,process.env.JWT_SECRET);
        console.log(token_decode);
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Not authorized , username and password"})
        }
        next();
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}
export default authAdmin;