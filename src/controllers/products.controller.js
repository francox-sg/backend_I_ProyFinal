//import {ProductMgr} from '../daos/fs/productManager.js'
/* import { validarNewProduct} from '../../middlewares/middlewares.js';
import { validarPut } from '../../middlewares/middlewares.js';
import { socketServer } from '../../serverExpress.js'; */
import * as services from '../services/products.service.js'

export const getProducts = async(req, res)=>{
    const {limit} = req.query;
    try{
        res.status(200).json( await services.getProducts(limit))
    }
    catch(error){
        res.status(404).json({msj:"error"})
    }
}

export const getProductById =  async(req, res)=>{
    const {pid} = req.params;
    try{
        const product = await services.getProductById(pid);
        if(product != null){
            res.status(200).json( product)
        }else{
            res.status(404).send("El Producto No Existe")
        }
        
    }
    catch(error){
        res.status(404).json({msj:"error"})
    }
}

export const addProduct =  async(req, res)=>{
    
    //const newProduct = req.body;

    //Prevengo que no se agreguen campos adicionales si vienen por req
    const {title, description, code, price, status, stock, category, thumbnails} = req.body;


    let newProductValues = {}
    if(title != undefined)         {newProductValues["title"]       = title}
    if(description != undefined)   {newProductValues["description"] = description}
    if(code != undefined)          {newProductValues["code"]        = code}
    if(price != undefined)         {newProductValues["price"]       = price}
    if(status != undefined)        {newProductValues["status"]      = status}
    if(stock != undefined)         {newProductValues["stock"]       = stock}
    if(category != undefined)      {newProductValues["category"]    = category}
    if(thumbnails != undefined)      {newProductValues["thumbnails"]    = thumbnails}


    try{
        
        res.status(200).json( await services.addProduct(newProductValues))
    }
    catch(error){
        res.status(404).json({msj:"error"})
    }

    //Actualizacion de socket ante cambio por Http
    //const socketProducts =  await ProductMgr.getProducts()
    //socketServer.emit('getProducts', socketProducts)

}

export const updateProduct =   async(req, res)=>{
    const {pid} = req.params
    
    //Prevengo que no se agreguen campos adicionales si vienen por req
    const {title, description, code, price, status, stock, category, thumbnails} = req.body;


    let newProductValues = {}
    if(title != undefined)         {newProductValues["title"]       = title}
    if(description != undefined)   {newProductValues["description"] = description}
    if(code != undefined)          {newProductValues["code"]        = code}
    if(price != undefined)         {newProductValues["price"]       = price}
    if(status != undefined)        {newProductValues["status"]      = status}
    if(stock != undefined)         {newProductValues["stock"]       = stock}
    if(category != undefined)      {newProductValues["category"]    = category}
    if(thumbnails != undefined)      {newProductValues["thumbnails"]    = thumbnails}


    try{
        console.log("newProdValues",newProductValues);
        const productoActualizado = await services.updateProduct(pid, newProductValues)
        if(productoActualizado != null){
            res.status(200).json(productoActualizado)
        }else{
            res.status(404).send("El Producto No Existe")
        }
    }
    catch(error){
        res.status(404).json({msj:"error"})
    }

    //Actualizacion de socket ante cambio por Http
    //const socketProducts =  await ProductMgr.getProducts()
    //socketServer.emit('getProducts', socketProducts)
}

export const deleteProduct =  async(req, res)=>{
    const {pid} = req.params
    console.log("pid",pid);
    try{
        const status = await services.deleteProduct(pid)
        if (status != null){
            res.status(200).json("Producto Borrado Con Exito")
        }else{
            res.status(404).send("El Producto No Existe")
        }
    }
    catch(error){
        res.status(404).json({msj:"error"})
    }

    //Actualizacion de socket ante cambio por Http
    //const socketProducts =  await ProductMgr.getProducts()
    //socketServer.emit('getProducts', socketProducts)
}