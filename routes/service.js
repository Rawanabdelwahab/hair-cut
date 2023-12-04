import { Router } from "express";
import { post, get } from "../controllers/service.js";
const router = new Router();
router.post('/services', post)
router.get('/services', get)
export default router 