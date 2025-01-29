import { Request, Response } from "express"
import { Empleador } from "../models/empleador"
import bcrypt from "bcrypt";
import { or } from "sequelize";

export const register = async (req: Request, resp: Response) => {
    const {nit,organizacion, nombres, apellidos,sucursal,telefono,correo, contrasenia,ciudad}= req.body
    const passwordHash=await bcrypt.hash(contrasenia, 10);
    Empleador.create({
        nit:nit,
        organizacion:organizacion,
        nombres:nombres,
        apellidos:apellidos,
        sucursal:sucursal,
        telefono:telefono,
        correo:correo,
        contrasenia:passwordHash,
        ciudad:ciudad
    })
    resp.json({
        msg: `Empleador ${nombres} ${apellidos} registrado correctamente...`
    })
    
}
export const login =async (req: Request, res:Response) => {
    console.log(req.body);
    res.json({
        msg: `INICIO DE SESIÓN EXITOSO =>`,
        body:req.body
    })
}
