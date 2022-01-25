import Product from "../models/product";

// Get All Products => /api/product
const getAll = async (req, res)=>{
    try{
        const products = await Product.find();
        res.status(200).json({
            success: true,
            count: products.length,
            products
        });
    } catch(error){
        responseError(res, error);
    } 
}

// POST new Product => /api/product
const newProduct = async (req, res)=>{
    try{
        const product = await Product.create(req.body.data);
        res.status(200).json({
           success: true,
           product
        });
    } catch(error){
        responseError(res, error);           
    }
}

// DELETE Product => /api/product/:id
const deleteProduct = async (req, res)=>{
    try{
        await Product.deleteOne({ id: req.query.id });
        res.status(200).json({
        success: true,
            message: 'Product is deleted'
        });
    } catch(error){
        responseError(res, error);          
    }
}

// UPDATE product => /api/product/:id
const updateProduct = async (req, res)=>{
    try{
        let product = await Product.findById(req.query.id);
        if(!product){
            return res.status(404).json({
                success: false,
                error: 'Product not found with this ID'
            });
        }
        product = await Product.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })   
        res.status(200).json({
            success: true,
            rooms
        });
    } catch(error){
        responseError(res, error);          
    } 
}

function responseError(res, e){
    res.status(400).json({
        success: false,
        error: e.message
    });
}

export{ getAll, newProduct, deleteProduct, updateProduct };
