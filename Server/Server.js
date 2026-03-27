import express from 'express';
import 'dotenv/config';
import { connectDB } from './src/utils/dbConnection.js'
import {UserRouter} from './src/user/Router.js';
import cors from 'cors';
const app = express();

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL + "/auth";
const origin_url = process.env.FRONTEND_URL || 'http://localhost:5173';
app.use(cors({
    origin: origin_url,
    credentials:true,
    allowedHeaders:['Content-Type','Authorization'],
}));
connectDB(MONGO_URL);
app.use(express.json());
app.use('/api/user',UserRouter);
app.get('/',(req,res)=>{
    return res.send('API Working')
})

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))