import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getAllHotelbycount, getHotel, getHotelRooms, hotelsByCity, updateHotel } from "../controlers/Hotels.js";
import { verifyAdmin } from "../utils/verifyTocken.js";


const router = express.Router();

// CREATE
    router.post('/', verifyAdmin, createHotel);


// UPDATE
    router.put('/:id', verifyAdmin, updateHotel);


// DELETE
    router.delete('/:id', verifyAdmin, deleteHotel);


// GET
    router.get('/find/:id', getHotel);


// GET ALL
router.get('/', getAllHotel);
router.get("/region/hotel", getAllHotelbycount);
router.get('/countByCity', countByCity);
router.get('/hotelsByCity', hotelsByCity);
router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms);


export default router;