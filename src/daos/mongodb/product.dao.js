import { ProductModel } from "./models/product.model.js";


class ProductManager{
    

    //Metodo Obtener Productos
    async getProducts(limit = undefined){
        
        return await ProductModel.find({})
    }

    //Metodo Obtener Producto Por ID
    async getProductById(id){
        const prod = await ProductModel.findById(id)
        return prod
    }

    //Metodo Agregar Producto
    async addProduct(prodToAdd){
        const prod = await ProductModel.create(prodToAdd)
        return prod
    }

    //Metodo Actualizar Producto
    async updateProduct(prodId, prodToUpdate){
        try {
            
            const resp = await ProductModel.findByIdAndUpdate(prodId, prodToUpdate, {new: true});
            console.log(resp);
            return resp
            
        } catch (error) {
            console.log(error);
        }
    }


    //Metodo Borrar Producto
    async deleteProduct(prodId){
        try {
            
            const resp = await ProductModel.findByIdAndDelete(prodId);
            console.log(resp);
            return resp
            
        } catch (error) {
            console.log(error);
        }
}

}

export const ProductDaoMongoDB = new ProductManager();

