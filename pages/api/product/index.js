import nc from 'next-connect';
import connectDB from '../../../database/connectDB';
import {getAll, newProduct} from '../../../controllers/productController';

const handler = nc();
// Connection à la base de données
connectDB();

handler.get(getAll);
handler.post(newProduct);

export default handler;