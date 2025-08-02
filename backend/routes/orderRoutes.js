import express from "express"
import { placeOrder } from "../controller/orderController"

const orderRoutes=express.Router()

orderRoutes.post("/placeOrder",isAuth,placeOrder)

export default orderRoutes