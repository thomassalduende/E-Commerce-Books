import { Users } from "../../../Entities/Users";
import { getUsuarioMail } from "../../Querys/Usuario/getUsuarioMail";

export async function updateUser(nombre: string, email: string, password: string, user: Users) {

    if ((nombre.length + (+email.length) + (+password.length)) == 0){

        throw `ERROR, TODOS LOS CAMPOS DEBES ESTAR COMPLETOS`
    }

    if (nombre != null){
        user.nombre = nombre;
    }

    if((email != null) && (user.email != email)){
        const existsEmail = await getUsuarioMail(email)

        if(existsEmail){
            throw `ERROR, EL CORREO ${email} YA EXISTE`
        }
        user.email = email;
    }

    if(password != null){
        user.password = password;
    }

    await user.save()
    
}