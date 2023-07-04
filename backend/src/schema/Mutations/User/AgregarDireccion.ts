import { agregarDireccionUser } from "../../../TypeOrm/Mutations/Usuario/agregarDireccionUser";
import { SendUser } from "../../../TypesDefs/SendUser";
import { sign, verify } from "jsonwebtoken";


export async function AgregarDireccion(tokenUser:string, nombre:string, dni:string, direccion: string, info: string, telefono: string, cod_postal: number) {

    const message = new SendUser()

    try{

        const id_user: number = parseInt(<string>verify(tokenUser, 'secret-key'))

        const user = await agregarDireccionUser(id_user, nombre, dni, direccion, info, telefono, cod_postal)

        message.message = 'Direccion agregada'
        message.success = true;
        message.accessToken = tokenUser;
        message.user = user[0]

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
    
}