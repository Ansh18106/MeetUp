import express from 'express';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js'
import dotenv from "dotenv";

// dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

// APIS
app.use('/api/auth', authRoutes);
const server = http.createServer(app);


mongoose
  .connect(URL)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`)
    });
  })
  .catch(err => {
    console.log("DB connection failed");
    console.log(err);
  });
