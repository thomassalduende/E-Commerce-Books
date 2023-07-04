import { AgregarItem } from "../../../TypeOrm/Mutations/Usuario/AgregarItem";
import { Send } from "../../../TypesDefs/Send";
import { verify } from "jsonwebtoken";


export async function agregarItem(isbn: string, cantidad: number, tokenUser: string): Promise<Send> {

    const message = new Send()

    try{
        const id_user: number = parseInt(<string>verify(tokenUser,  'secret-key'))

        await AgregarItem(isbn, cantidad, id_user)

        message.message = 'Se agrego item correctamente'
        message.success = true;

        return message;

    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
    
}