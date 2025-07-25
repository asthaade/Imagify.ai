import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import razorpay from "razorpay";
import transactionModel from "../models/transactionModel.js";
import userModel from "../models/userModel.js";

//Register User
const registerUser = async (req, res) => {
    try{
        const {name,email, password} = req.body;
        if(!name || !email || !password){
            return res.json({success:false, message:"Please fill all the fields"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password:hashedPassword
        }
        
        const newUser = new userModel(userData);
        await newUser.save();

        const token = jwt.sign({id:newUser._id}, process.env.JWT_SECRET)

        res.json({success:true, token, user:{name:newUser.name}})

    }catch(err){
        console.log(err);
        res.json({success:false, message:err.message})
    }
}

//Login User
const loginUser = async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false, message: "User does not exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success:true, token, user:{name:user.name}})
        }else{
            return res.json({success:false, message: "Invalid Credentials"});
        }

    }catch(err){
        console.log(err);
        res.json({success:false, message:err.message})
    }
}

const userCredits = async(req,res)=>{
    try{
        const userId = req.userId

        const user = await userModel.findById(userId)
        res.json({success:true, credits:user.creditBalance,user:{name:user.name}})
    }catch(err){
        console.log(err);
        res.json({success:false, message:err.message})
    }
}

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const razorpayPayment = async(req, res)=>{
    try{
        const userId = req.userId;
        const { planId} = req.body;

        const userData = await userModel.findById(userId)

        if(!userId || !planId){
            return res.json({success:false, message:"Missing Details"})
        }
        let credits, plan, amount, date

        switch(planId){
            case 'Basic':
                plan = 'Basic'
                credits = 5
                amount = 10
                break;

            case 'Advanced':
                plan = 'Advanced'
                credits = 25
                amount = 50
                break;
            
            case 'Business':
                plan = 'Business'
                credits = 500
                amount = 250
                break;
            
                default:
                    return res.json({success:false, message:"plan not found"})
        }

        date = Date.now();
        
        const transactionData = {
            userId, plan, amount, credits, date
        }

        const newTransaction = await transactionModel.create(transactionData)

        const options = {
            amount:amount * 100,
            currency: process.env.CURRENCY,
            receipt: newTransaction._id,
        }
        await razorpayInstance.orders.create(options, (error, order)=>{
            if(error){
                console.log(error);
                return res.json({success:false, message:error})
            }
            res.json({success:true, order})
        })
    }catch(err){
        console.log(err);
        res.json({success:false, message:err.message})
    }
}

const verifyRazorpay = async(req,res)=>{
    try{

        const {razorpay_order_id} = req.body;

        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

        if(orderInfo.status === 'paid' ){
            const transactionData = await transactionModel.findById(orderInfo.receipt);

            if(transactionData.payment ){
                return res.json({success:false, message:'Payment Failed'})
            }

            const userData = await userModel.findById(transactionData.userId)

            const creditBalance = userData.creditBalance + transactionData.credits;
            await userModel.findByIdAndUpdate(userData._id, {creditBalance});

            await transactionModel.findByIdAndUpdate(transactionData._id,{payment:true, razorpay_order_id})

            res.json({success:true, message:'credits Added'})
        }else{
            res.json({success:false, message:'Payment Failed'})
        }

    }catch(err){
        console.log(err);
        res.json({success:false, message:err.message})
    }
}

export { loginUser, razorpayPayment, registerUser, userCredits, verifyRazorpay };

