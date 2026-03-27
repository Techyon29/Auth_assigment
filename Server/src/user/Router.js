import express from 'express';
import { handleSubmit , handleGetAllUsers } from './Controller.js';
export const UserRouter = express.Router();


UserRouter.post('/addUser',handleSubmit)
UserRouter.get('/getAllUsers',handleGetAllUsers)