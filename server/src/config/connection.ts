import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://techquiz:i8hmnvoCrHwHm56s@cluster0.sc2zx.mongodb.net/techquiz?retryWrites=true&w=majority&appName=Cluster0');

export default mongoose.connection;
