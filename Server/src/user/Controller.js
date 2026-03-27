import UserModel from "./Modal.js";

export async function handleSumbit(req,res){
    try {
        const {name ,email} = req.body;
    if(!name || !email){
        return res.status(400).json({success:false,message:'Please fill all the fields'})
    }
    const user = await UserModel.create({name,email});

    if(user) return res.status(201).json({success:true,message:'User Created Successfully'})
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }
    
}

export async function  handleGetAllUsers(req,res){
    try{
        const user = await UserModel.find();
        return res.status(200).json({success:true,user:user})

    }catch(e){
        return res.status(500).json({success:false,message:e.message})
    }
}