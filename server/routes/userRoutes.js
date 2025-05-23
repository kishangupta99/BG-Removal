import express from 'express';
import { clerkWebhooks } from '../controllers/UserController.js';


const userRouter = express.Router();

// API route to handle clerk webhooks
userRouter.post('/webhooks', clerkWebhooks);


export default userRouter;  