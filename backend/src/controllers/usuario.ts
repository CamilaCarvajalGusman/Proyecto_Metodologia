import { Request, Response } from "express"
import { Usuario } from "../models/usuario"
import bcrypt from "bcrypt";

export const register = async (req: Request, resp: Response) => {
    const { ci, nombres, apellidos, telefono, correo, contrasenia, fec_nac, ciudad, oficio_profesion, mudarse, curriculum, diagnostico, grado_apoyo } = req.body
    const passwordHash = await bcrypt.hash(contrasenia, 10);
    Usuario.create({
        ci: ci,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        correo: correo,
        contrasenia: passwordHash,
        fec_nac: fec_nac,
        ciudad: ciudad,
        oficio_profesion: oficio_profesion,
        mudarse: mudarse,
        curriculum: curriculum,
        diagnostico: diagnostico,
        grado_apoyo: grado_apoyo
    })
    resp.json({
        msg: `Usuario ${nombres} ${apellidos} registrado correctamente...`
    })
}
export const login =async (req: Request, res:Response) => {
    console.log(req.body);
    res.json({
        msg: `INICIO DE SESIÓN EXITOSO =>`,
        body:req.body
    })
}
