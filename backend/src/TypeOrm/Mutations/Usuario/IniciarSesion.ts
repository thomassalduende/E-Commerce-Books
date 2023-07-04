import { Users } from "../../../Entities/Users";
import { ILike } from "typeorm";


export async function IniciarSesion(email: string, password: string) {

    const usuario = await Users.find({

        relations:{
            carrito: true,
        },
        
       where:{
            email: ILike(`${email}`),
            password: password
        },

        order: {
            notificacion: {
                id: "DESC"
            }
        }
    })

    if (!usuario[0]){
        throw "ERROR, CORREO O CONTRASEÑA INVALIDAS"
    }
    
    return usuario
}