import * as services from '../services/carts.service.js'

export const addCart = async(req, res)=>{
    try{
        
        res.status(200).json(await services.addCart()) 
        
    }
    catch(error){
        console.log(error);
        res.status(404).json({msj:"error"})
    }
}

export const getCartProductsById =  async (req, res)=>{
    const {cid} = req.params;

    try{
        const cart = await services.getCartProductsById(cid)
        if(cart != null){
            res.status(200).json(cart)
        }else{
            res.status(404).send("No existe el cart")
        }
    }
    catch(error){
        res.status(404).json({msj:"error"})
    }

}

export const addProductToCart =  async (req, res)=>{async (req, res)=>{
    const {cid, pid} = req.params;
    
    try{
        
            const cart = await services.addProductToCart(cid, pid)
            if(cart != -1){
                res.status(200).json(cart)
            }else{
                res.status(404).send("El cart no existe")
            }
        }
    
    catch(error){
        res.status(404).json({msj:"error"})
    }

}

}