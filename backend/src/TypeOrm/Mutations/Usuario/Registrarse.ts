import { Users } from "../../../Entities/Users";
import { Carrito } from "../../../Entities/Carrito";
import { ILike } from "typeorm";


export async function Registrarse(nombre: string, email: string, password: string) {

    let user = await Users.find({
        where: {
            email: ILike(`${email}`)
        }
    })

    if(user[0]){
        throw "ERROR, CORREO YA REGISTRADO"
    }

    const usuario = new Users();
    usuario.nombre = nombre;
    usuario.email = email;
    usuario.password = password;

    await usuario.save();

    user = await Users.find({
        where:{
            email: email
        }
    })

    const carrito = new Carrito();
    carrito.users = user[0]

    await carrito.save();

    return user
    
}