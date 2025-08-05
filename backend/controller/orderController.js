 import Order from "../model/orderModel.js"
 import User from  "../model/userModel.js" 
 import razorpay from "razorpay"
 import dotenv from "dotenv"
 dotenv.config()

 const razorpayInstance=new razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET
 })


 const currency="inr"
 
 export const placeOrder=async(req,res)=>{
    try{
        const {items,amount,address}=req.body
        console.log("place order called")
        const userId=req.userId
        const orderData={
            items,
            amount,
            userId,
            address,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }

        const newOrder=new Order(orderData) 

        await newOrder.save()
        
        await User.findByIdAndUpdate(userId,{cartData:{}})
        return res.status(201).json({message:"Order Place"})

    }catch(error){
        console.log(error)
        res.status(500).json({message:"Order Place error"})
    }
 }


 export const userOrders=async(req,res)=>{
    try{
        const userId=req.userId
        const orders=await Order.find({userId})
        return res.status(200).json(orders)

    }catch(error){
        console.log(error)
        return res.statsu(500).json({message:"userOrders error"})
    }
 }


 export const allOrders=async(req,res)=>{
    try{
        const orders=await Order.find({})
        res.status(200).json(orders)

    }catch(error){
        console.log(error)
        return res.status(500).json({message:"adminAll Orders error"})
    }
 }

 export const updateStatus=async (req,res)=>{
    try{
        
        const {orderId,status}=req.body
 
        
          await Order.findByIdAndUpdate(orderId , { status })
        await res.status(201).json({message:"Status Updated"})

    }catch(error){
                   return res.status(500).json({message:error.message})
    }
 }


 export const placeOrderRazorpay=async(req,res)=>{
 
  
    
    try{
        const {items,amount,address}=req.body
        const userId=req.userId
        const orderData={
            items,
            amount,
            userId,
            address,
            paymentMethod:"Razorpay",
            payment:false,
            date:Date.now()
        }
        const newOrder=new Order(orderData)
        await newOrder.save()

        const options={
            amount:amount*100,
            currency:currency.toUpperCase(),
            receipt:newOrder._id.toString()
        }
        
         razorpayInstance.orders.create(options,(error,order)=>{
            if(error){
                console.log(error)
                return res.status(500).json(error)
            }
            else{

                res.status(200).json(order)

            }
        })


    }catch(error){
            res.status(500).json({message:error.message})
    }
 }

 export const verifyRazorpay=async(req,res)=>{
    try{
        const userId=req.userId
        const{razorpay_order_id}=req.body
        const orderInfo=await razorpayInstance.orders.fetch(razorpay_order_id)
        if(orderInfo.status==="paid"){
            await User.findByIdAndUpdate(userId,{cartData:{}})
            await Order.findByIdAndUpdate(userId,{payment:true})
            res.status(200).json({message:"Payment successfull"})
            res.status(200).json({message:"Payment Successfull"})
        }
        else{
            res.json({message:"payment failed"})
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message:error.message})
    }
 }