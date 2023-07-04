import { ILike } from "typeorm";
import { Users } from "../../../Entities/Users";
import { Carrito } from "../../../Entities/Carrito";



export async function IniciarSesionRedSocial(nombre: string, email: string, password: string) {

    let user = await Users.find({
        relations:{
            direccion:{
                ciudad: true
            },
            notificacion: true,
            carrito: true,
            factura: true
        },
        where: {
            email: ILike(`${email}`),
            password: password
        },

        order: {
            notificacion: {
                id: "DESC"
            }
        }
    })


    if(!user[0]){

        const usuario = new Users();
        usuario.nombre = nombre;
        usuario.password = password;

        await usuario.save()

        user = await Users.find({
            where: {
                email: email
            }
        })

        const carrito = new Carrito();
        carrito.users = user[0]
        await carrito.save();
    }

    return user
}