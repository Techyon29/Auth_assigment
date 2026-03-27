import express from 'express';
import { handleSumbit , handleGetAllUsers } from './Controller.js';
export const UserRouter = express.Router();


UserRouter.post('/addUser',handleSumbit)
UserRouter.get('/getAllUsers',handleGetAllUsers)