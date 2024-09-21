import express from 'express';
import userRoues from './userRoutes.js'
const app = express.Router();

// user routes 
app.use('/user',userRoues)

// other  routes 
// app.get('/cart', cartRoues)

export default app