import { CartModel } from "./models/cart.model.js"
import { ProductModel } from "./models/product.model.js";

class CartManager{
    
    

    //Metodo Obtener Carts
    async getCarts(){
        return await CartModel.find({})
    }

    //Metodo Agregar Cart
    async addCart(){
        
        const resp = await CartModel.create({products:[]})
        console.log(resp);
        return resp
    }

    //Metodo Devuelve cart por ID
    async getCartById(cartId){
        return await CartModel.findById(cartId)//.populate("products.product");

    }
    //Metodo Devuelve productos por ID de carrito
    async getCartProductsById(cartId){
        return await CartModel.findById(cartId)//.populate("products.product");

    }

    //Metodo Elimina Producto de Cart
    async removeProductOfCartById(cartId, prodId){
        return await CartModel.findByIdAndUpdate(
            { _id: cartId },
            { $pull: { products: { product: prodId } } },
            { new: true }
        )
    }

    //Metodo Devuelve cart buscando por su ID y existencia de ProdId n sus Productos
    async existProdInCart(cartId,prodId){
        console.log("cartId:",cartId , "prodId", prodId);
        try {
            return await CartModel.findOne({
                _id: cartId,
                products: { $elemMatch: { product: prodId } }
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    //Metodo Agregar Producto a Cart
    async addProductToCart(cartId, prodId){
        //Existencia de Cart
        const cart = await this.getCartById(cartId)
        
        if(cart != null){
            
            //Existencia de Prod en Cart
            const existProd= await this.existProdInCart(cartId, prodId)
            console.log("existProd: ",existProd);

            if(existProd){
                console.log("existe");
                return await CartModel.findOneAndUpdate(
                        { _id: cartId, 'products.product': prodId },
                        { $set: { 'products.$.quantity': existProd.products[0].quantity + 1 } },
                        { new: true }
                    );
            }else{
                console.log("No existe");
                return await CartModel.findByIdAndUpdate(
                    cartId,
                    { $push: { products: { product: prodId } } },
                    { new: true }
                )
            }

            
        }

        return null

            }


}



export const CartDaoMongoDB = new CartManager()


//Pruebas
import { initMongoDB } from "../../db/database.js";

//Conexion con DB Mongo

//initMongoDB()

const test = async()=>{
    try {
        //console.log(await CartDaoMongoDB.getCartProductsById("666ef19d35ea0eb1cf79ae3c")); 
        //console.log(await CartDaoMongoDB.addProductToCart("666ef19d35ea0eb1cf79ae3c","666e2dea634a4440c6bfabcf")); 
        //console.log(await CartDaoMongoDB.removeProductOfCartById("666ef19d35ea0eb1cf79ae3c","666e2dea634a4440c6bfabcf")); 
        
    } catch (error) {
        console.log(error);
    }
}

//test()



