import { Router } from "express";
import { register } from "../controllers/usuario";
import { login } from "../controllers/usuario";
const router = Router();
router.post('/api/usuario/register', register)
router.post('/api/usuario/login',login)
export default router