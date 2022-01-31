import nc from 'next-connect';
import connectDB from '../../../database/connectDB';
import { registerUser } from '../../../controllers/userController';

const handler = nc();

connectDB();

handler.post(registerUser);

export default handler;