//const express = require("express")      //method-1
import express from "express"            //method-2
import dotenv from "dotenv"
import connectDB from "./config/database.js"
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import{app, server} from "./socket/socket.js"
import path from "path"

dotenv.config({})
//const app = express()

const PORT = process.env.PORT || 5000

const _dirname = path.resolve()

// middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:'http://localhost:5173', credentials:true}))

// routes
app.use("/api/v1/user", userRoute)
app.use("/api/v1/message", messageRoute)

app.use(express.static(path.join(_dirname, "/frontend/dist")))

app.use((_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})


server.listen(PORT, ()=>{
    connectDB()
    console.log(`Server listen at port ${PORT}`)
})
