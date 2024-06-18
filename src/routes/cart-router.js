import { Router } from "express";
/* import { CartMgr } from "../daos/fs/cartManager.js";
import { ProductMgr } from "../daos/fs/productManager.js"; */
import * as controller from '../controllers/carts.controller.js'

const router = Router();

//Agregar Cart
router.post('/', controller.addCart)

//Devolver Cart por ID
router.get('/:cid', controller.getCartProductsById)


//Agregar Producto por ID a Cart por ID
router.post('/:cid/product/:pid', controller.addProductToCart)

//Borrar Productos de Cart especifico
router.delete('/:cid/product/:pid', controller.removeProductOfCartById)

//Actualizar Cart por ID --> por body se pasa un array de products
router.put('/:cid', controller.updateCartById)


export default router;