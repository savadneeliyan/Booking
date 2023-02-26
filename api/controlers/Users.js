import Users from "../models/Users.js";


export const createUsers =async (req,res,next)=>{
    const newUsers = new Users(req.body) 

    try {
        const savedUsers = await newUsers.save();
        res.status(200).json(savedUsers);    
    } catch (error) {
        next(error);
    }
}


export const updateUsers =async (req,res,next)=>{
    try {
        const updatedUsers = await Users.findByIdAndUpdate(req.params.id, { $set: req.body },{new: true});
        res.status(200).json(updatedUsers);    
    } catch (error) {
        next(error);
    }
}


export const deleteUsers =async (req,res,next)=>{
    try {
        await Users.findByIdAndDelete(req.params.id);
         res.status(200).json("Users hs been deleted");    
    } catch (error) {
        next(error);
    }
}


export const getUsers =async (req,res,next)=>{
    try {
        const user = await Users.findById(req.params.id);
        res.status(200).json(user);     
    } catch (error) {
        next(error);
    }
}


export const getAllUsers =async (req,res,next)=>{
    try {
        const users = await Users.find();
        res.status(200).json(users);     
    } catch (error) {
        next(error);
    }
}
