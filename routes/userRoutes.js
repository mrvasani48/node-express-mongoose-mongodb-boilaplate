import express from 'express';
import { getAllUsers } from '../controllers/userController.js';
const app = express();

// user routes
app.get('/', getAllUsers);

export default app;
