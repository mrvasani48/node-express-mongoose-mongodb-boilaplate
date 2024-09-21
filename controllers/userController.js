import {userModel} from '../models/userModel.js'
import { commonResponse } from '../utils/functions.js';

export const getAllUsers = async (req,res)=>{
    try {
        const allUsers = await userModel.find();
        res.status(200).json(commonResponse(allUsers))
    } catch (error) {
        res.status(400).json({ message: error.message });    }
}

