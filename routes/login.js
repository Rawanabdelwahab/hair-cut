import {Router} from "express"
import { login ,checkLogin} from "../controllers/login.js";
const router =new Router();
router.post('/auth/login',login)
router.post('/auth/login1',checkLogin)
export default router;