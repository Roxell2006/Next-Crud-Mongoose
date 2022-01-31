import nc from 'next-connect';
import connectDB from '../../../../database/connectDB';
import { getUserDetails, updateUser, deleteUser } from '../../../../controllers/userController';

const handler = nc();

connectDB();

handler.get(getUserDetails)
handler.put(updateUser)
handler.delete(deleteUser)

export default handler;
