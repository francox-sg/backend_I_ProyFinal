import { ProductDaoMongoDB } from "../daos/mongodb/product.dao.js";


export const getProducts = async()=>{
    try {
        return await ProductDaoMongoDB.getProducts();
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async(id)=>{
    try {
        return await ProductDaoMongoDB.getProductById(id);
    } catch (error) {
        console.log(error);
    }
}

export const addProduct = async(prodToAdd)=>{
    try {
        return await ProductDaoMongoDB.addProduct(prodToAdd);
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async(prodId, prodToUpdate)=>{
    try {
        
        return await ProductDaoMongoDB.updateProduct(prodId, prodToUpdate);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async(prodId)=>{
    try {
        return await ProductDaoMongoDB.deleteProduct(prodId);
    } catch (error) {
        console.log(error);
    }
}

