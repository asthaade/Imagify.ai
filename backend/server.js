import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectDB from './config/mongodb.js';
import imageRouter from './routes/imageRoutes.js';
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 7777;
const app = express();

app.use(express.json());

app.use(cors({
        origin: process.env.FRONTEND_URL,
        credentials: true, // optional, useful if using cookies or auth headers
}))
await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req,res)=> res.send('API working'))

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})