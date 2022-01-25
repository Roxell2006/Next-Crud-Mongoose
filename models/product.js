import mongoose from 'mongoose';  // npm i mongoose

mongoose.models = {};
mongoose.modelSchemas = {};

const productSchema = new mongoose.Schema({
    id: String,
    name: { 
       type: String,
       required: [true, 'Please enter product name']
    },
    category: {
        type: String,
        required: [true, 'Please enter product category'],
    },
    filter: {
        type: String,
        required: [true, 'Please enter product filter'],
    },
    price: {  
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [6, 'product price cannot exceed 6 characters'],
        default: 0.0
    }
}, { collection: 'products'});

export default mongoose.models.productSchema || mongoose.model('products', productSchema);