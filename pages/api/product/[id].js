import nc from 'next-connect';
import connectDB from '../../../database/connectDB';
import {deleteProduct, updateProduct} from '../../../controllers/productController';

const handler = nc();
// Connection à la base de données
connectDB();

handler.delete(deleteProduct);
handler.put(updateProduct) ;

export default handler;