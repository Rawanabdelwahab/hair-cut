import {Router} from "express"
import { login } from "../controllers/login.js";
const router =new Router();
router.post('/auth/login',login)

export default router;