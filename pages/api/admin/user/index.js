import nc from 'next-connect';
import connectDB from '../../../../database/connectDB';
import { allAdminUsers } from '../../../../controllers/userController';

const handler = nc();

connectDB();

handler.get(allAdminUsers)

export default handler;
