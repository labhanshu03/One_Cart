import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes.js"
import bodyParser from "body-parser";
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
dotenv.config()
let port = process.env.PORT || 6000

let app=express()


app.use(express.json())


app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    credentials:true
}))

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/products",productRoutes)
app.use("/api/cart",cartRoutes)

app.listen(port,()=>{
    console.log("server is started")
    connectDb()
})


//// mongodb+srv://labhgupta444:Labhanshu6261@cluster0.crvw9mi.mongodb.net/