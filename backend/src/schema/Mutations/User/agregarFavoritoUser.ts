import { agregarFav } from "../../../TypeOrm/Mutations/Usuario/agregarBookaFavoritos";
import { Send } from "../../../TypesDefs/Send";
import { verify } from "jsonwebtoken";

export async function AgregarFav(tokenUser: string, isbn: string) {

    const message = new Send();

    try {

        const id: number = parseInt(<string>verify(tokenUser,  'secret-key'))

        await agregarFav(id, isbn);

        message.message = 'favorite agregado correctamente'
        message.success = true;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
    
}