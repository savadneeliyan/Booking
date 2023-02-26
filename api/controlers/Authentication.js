import User from "../models/Users.js";
import { createError } from "../utils/Error.js";
import jwt from "jsonwebtoken"

export const register =async (req,res,next)=>{
    try {
        const newUser = new User({
            ...req.body,
            password: req.body.password,
        }) 

        await newUser.save();
        res.status(200).send("user created successfully")
    } catch (error) {
        next(error);
    }
}

export const login =async (req,res,next)=>{
    try {
        const user =await User.findOne({username : req.body.username})
        const {password, isAdmin, ...otherdetails} = user._doc;
        if(!user) return next(createError(404,"no user found"));

        if (user.password === req.body.password) {
            const token = jwt.sign(
                {
                    id : user._id,
                    isAdmin: user.isAdmin,
                    profileImg: user.img,
                },process.env.JWT)
            res
            .cookie("access_token",token,{
                httOnly:true,
            }).status(200).send({details:{...otherdetails},isAdmin});
        } else {
            next(createError(404,"password does not match"));
        }

    } catch (error) {
        next(error);
    }
}
