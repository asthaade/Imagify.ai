import axios from "axios";
import FormData from "form-data";
import userModel from "../models/userModel.js";

export const generateImage = async(req, res)=>{
    try{
        const userId = req.userId;
        const { prompt} = req.body;

        const user = await userModel.findById(userId)

        if (!prompt) return res.json({ success: false, message: "Prompt is required" });
        if (!user) return res.json({ success: false, message: "User not found" });


        if(user.creditBalance === 0 || user.creditBalance < 0){
            return res.json({success:false, message:"No credit Balance", creditBalance:user.creditBalance})
        }

        const formData = new FormData()
        formData.append('prompt', prompt);


        const {data} = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData,{
            headers: {
        'x-api-key': process.env.CLIPDROP_API,
    },
    responseType: 'arraybuffer'
    })

    const base64Image= Buffer.from(data,'binary').toString('base64')

    const resultImage = `data:image/png;base64,${base64Image}`

    await userModel.findByIdAndUpdate(userId, {creditBalance: user.creditBalance - 1})

    res.json({success:true, message:"Image Generated", creditBalance:user.creditBalance - 1, resultImage})


    }catch(err){
        console.log(err);
        res.json({success:false, message:err.message})
    }
}