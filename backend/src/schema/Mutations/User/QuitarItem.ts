import { quitarItem } from "../../../TypeOrm/Mutations/Usuario/quitarItem";
import { Send } from "../../../TypesDefs/Send";
import { verify } from "jsonwebtoken";


export async function QuitarItem(isbn: string, cantidad: number, tokenUser: string) {

    const message = new Send()

    try{
        const id: number = parseInt(<string>verify(tokenUser, 'secret-key'))

        await quitarItem(isbn, cantidad, id)

        message.message = 'Items removidos'
        message.success = true;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false; 

        return message;
    }
}