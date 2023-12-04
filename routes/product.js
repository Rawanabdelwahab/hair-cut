import { Router } from "express";
import { post, get,edit,deleteOne,getId } from '../controllers/product.js'
const router = new Router();
router.post('/product', post)
router.get('/product', get)
router.get('/product/:id', getId)
router.put('/product/:id',edit)
router.delete('/product/:id',deleteOne)
export default router 
// Progress