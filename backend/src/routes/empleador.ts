import { Router } from "express";
import { register } from "../controllers/empleador";
import { login } from "../controllers/empleador";
const router = Router();
router.post('/api/empleador/register', register)
router.post('/api/empleador/login',login)
export default router