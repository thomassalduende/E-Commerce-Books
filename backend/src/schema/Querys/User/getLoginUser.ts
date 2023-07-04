import { sign, verify } from "jsonwebtoken"
import { IniciarSesion } from "../../../TypeOrm/Mutations/Usuario/IniciarSesion";
import { IniciarSesionRedSocial } from "../../../TypeOrm/Mutations/Usuario/IniciarSesionRedSocial";
import { getUsuarioID } from "../../../TypeOrm/Querys/Usuario/getUsuarioID";
import { SendUser } from "../../../TypesDefs/SendUser";


async function iniciarSesionRedSocial(nombre: string, email: string, password: string) {

    const message = new SendUser()

    try{
        const user = await IniciarSesionRedSocial(nombre, email, password)

        const id: string = user[0].id.toString()

        message.message = 'User logueado'
        message.success = true;
        message.accessToken = sign(id, 'secret-key')
        message.user = user[0];

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false

        return message;
    }
}

async function IniciarSesionCorreoyContraseña(args: any): Promise<SendUser> {

    const message = new SendUser()

    try{
        const user = await IniciarSesion(args.email, args.password)

        const id: string = user[0].id.toString()

        message.message = 'User logueado'
        message.success = true;
        message.accessToken = sign(id, 'secret-key')
        message.user = user[0];
        return message;

    }catch(error: any){

        message.message = error;
        message.success = false

        return message;
    }
}

async function getTokerUser(tokenUser: string): Promise<SendUser> {

    const message = new SendUser()

    let id_string = ''

    try{
        id_string = <string>verify(tokenUser,  'secret-key')

    }catch(error: any){
        message.message = 'TokerUser invalido'
        message.success = false

        return message;
    }


    try{

        const id: number = parseInt(id_string);

        const user = await getUsuarioID(id);

        message.message = 'User logueado'
        message.success = true;
        message.accessToken = tokenUser;
        message.user = user[0];

        return message;
    }catch(error: any){

        message.message = error
        message.success = false

        return message;
    }
}

export async function getLoginUser(args: any) {

    if( args.nombre != ''  && (args.password != '' && (args.password != null))){

        return await iniciarSesionRedSocial(args.nombre, args.email, args.password)

    }else if(args.email != '' && (args.password != '' && (args.password != null))){

        return await IniciarSesionCorreoyContraseña(args)
    
    }else if(args.tokenUser != ''){

        return await getTokerUser(args.tokenUser)
    }

    return new SendUser()
    
}