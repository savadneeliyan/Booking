import express from "express";
import { createUsers, deleteUsers, getAllUsers, getUsers, updateUsers } from "../controlers/Users.js"; 
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyTocken.js";

const router = express.Router();

// CREATE
router.post('/', createUsers);

// router.get("/checkAuthentication",verifyToken , (req,res,next) => {
//     res.send("hello user , you are logged in")
// });


// router.get("/checkuser/:id",verifyUser , (req,res,next) => {
//     res.send("hello user , you are logged in and you can delete your account")
// });


// router.get("/checkAdmin/:id",verifyAdmin , (req,res,next) => {
//     res.send("hello admin , you are logged in and you can delete all account")
// });

// UPDATE
    router.put('/:id',verifyUser,updateUsers);


// DELETE
    router.delete('/:id', verifyUser, deleteUsers);


// GET
    router.get('/:id', verifyUser, getUsers);


// GET ALL
router.get('/', verifyAdmin, getAllUsers);


export default router;