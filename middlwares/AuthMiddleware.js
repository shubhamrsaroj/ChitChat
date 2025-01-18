import User from "../models/UserModels";

export const signUp=(req,res,next)=>{
     
    
    try{
        const{email,password}=req.body();

        if(!email || !password){
            return res.status(400).send("Enter username and password");
        }

        const user=User.create({email,password});


    }
    catch(error){
        console.log(error);
        return res.status(404).send("Internal server error");
    }

}