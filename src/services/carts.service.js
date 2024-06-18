import { CartDaoMongoDB } from "../daos/mongodb/cart.dao.js";
import { ProductDaoMongoDB } from "../daos/mongodb/product.dao.js";

export const addCart = async()=>{
    
    
    try {
        const resp= await CartDaoMongoDB.addCart();
        
        return resp
    } catch (error) {
        console.log(error);
    }
}

export const getCartProductsById = async(id)=>{
    
    
    try {
        const resp= await CartDaoMongoDB.getCartProductsById(id);
        
        return resp
    } catch (error) {
        console.log(error);
    }
}

export const addProductToCart = async(cartId, prodId)=>{
    
    
    try {
        const prodExists = await ProductDaoMongoDB.getProductById(prodId)
        if(prodExists){
            const resp= await CartDaoMongoDB.addProductToCart(cartId, prodId);
            return resp
        }else{
            return null
        }
        
    } catch (error) {
        console.log(error);
    }
}

export const removeProductOfCartById = async(cartId, prodId)=>{
    
    
    try {
        
            const resp= await CartDaoMongoDB.removeProductOfCartById(cartId, prodId);
            return resp
        
    } catch (error) {
        console.log(error);
    }
}