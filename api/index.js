import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authroutes from "./routes/auth.js";
import usersroutes from "./routes/users.js";
import hotelsroutes from "./routes/hotel.js";
import roomsroutes from "./routes/rooms.js";
import cookieParser from "cookie-parser"


const app = express();
dotenv.config();

const PORT = process.env.PORT || 8800;

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB");
    }
    catch (error) {
        throw error;
    };
};


mongoose.connection.on("connected",()=>{
    console.log("mongo db connected");
});

mongoose.connection.on("disconnected",()=>{
    console.log("mongo db disconnected");
});

// middlewares

app.use(cookieParser())
app.use(express.json());

app.use("/api/auth",authroutes);
app.use("/api/users",usersroutes);
app.use("/api/hotels",hotelsroutes);
app.use("/api/rooms",roomsroutes);




app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack:err.stack,
    });
});



if (process.env.NODE_ENV !== 'production') {
    app.use(express.static("client/build"));
}




app.listen(PORT, () => {
  connect();
  console.log("connected to backend . . . ");
});