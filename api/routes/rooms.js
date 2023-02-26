import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailablity } from "../controlers/Rooms.js";
import { verifyAdmin } from "../utils/verifyTocken.js";

const router = express.Router();


// CREATE
router.post('/:hotelid', verifyAdmin, createRoom);


// UPDATE
    router.put('/:id', verifyAdmin, updateRoom);
    router.put("/availablity/:id", updateRoomAvailablity);


// DELETE
    router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);


// GET
    router.get('/:id', getRoom);


// GET ALL
router.get('/', getAllRoom);

export default router;