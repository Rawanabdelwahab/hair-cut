import { Router } from "express";
import { post, get, getId, edit,deleteOne } from "../controllers/style.js";
const router = new Router()
router.post('/style', post)
router.get('/style', get)
router.get('/style/:id', getId)
router.put('/style/:id',edit)
router.delete('/style/:id',deleteOne)
export default router